// Data storage
let allRepos = [];
let categories = new Set();
let bookmarks = new Set();
let likes = new Map();
let learningPaths = [];

// Load from localStorage
function loadFromStorage() {
    const saved = localStorage.getItem('awesome-stargazer-data');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            bookmarks = new Set(data.bookmarks || []);
            likes = new Map(data.likes || []);
            learningPaths = data.learningPaths || [];
        } catch (e) {
            console.error('Error loading data:', e);
        }
    }
}

// Save to localStorage
function saveToStorage() {
    const data = {
        bookmarks: Array.from(bookmarks),
        likes: Array.from(likes.entries()),
        learningPaths: learningPaths
    };
    localStorage.setItem('awesome-stargazer-data', JSON.stringify(data));
}

// Fetch and parse repository data
async function fetchRepoData() {
    try {
        const response = await fetch('data.json');
        if (response.ok) {
            const data = await response.json();
            // Check if data has repos property or is array
            allRepos = Array.isArray(data) ? data : (data.repos || []);
            allRepos.forEach(repo => categories.add(repo.category));
            console.log(`Loaded ${allRepos.length} repositories from JSON`);
        } else {
            throw new Error('JSON not found');
        }
    } catch (e) {
        console.error('Error loading repo data:', e);
        // Show error message
        document.getElementById('results-count').textContent = 'Error loading repositories';
    }
}

// Parse markdown files - removed, now using pre-generated JSON

// Filter and search repos
function filterRepos() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const categoryFilter = document.getElementById('category-filter').value;
    const sortBy = document.getElementById('sort-filter').value;

    let filtered = allRepos.filter(repo => {
        const matchesSearch = !searchTerm || 
            repo.name.toLowerCase().includes(searchTerm) ||
            repo.description.toLowerCase().includes(searchTerm) ||
            repo.category.toLowerCase().includes(searchTerm);
        
        const matchesCategory = !categoryFilter || repo.category === categoryFilter;

        return matchesSearch && matchesCategory;
    });

    // Sort
    filtered.sort((a, b) => {
        switch (sortBy) {
            case 'name-asc':
                return a.name.localeCompare(b.name);
            case 'name-desc':
                return b.name.localeCompare(a.name);
            case 'category':
                return a.category.localeCompare(b.category);
            case 'likes':
                return (likes.get(b.id) || 0) - (likes.get(a.id) || 0);
            default:
                return 0;
        }
    });

    return filtered;
}

// Render repositories
function renderRepos(repos) {
    const container = document.getElementById('repos-container');
    const noResults = document.getElementById('no-results');
    const resultsCount = document.getElementById('results-count');
    const searchClear = document.getElementById('search-clear');

    if (document.getElementById('search-input').value) {
        searchClear.classList.remove('hidden');
    } else {
        searchClear.classList.add('hidden');
    }

    if (repos.length === 0) {
        container.innerHTML = '';
        noResults.classList.remove('hidden');
        resultsCount.textContent = 'No repositories found';
        return;
    }

    noResults.classList.add('hidden');
    resultsCount.textContent = `${repos.length} repositories`;

    container.innerHTML = repos.map(repo => {
        const isBookmarked = bookmarks.has(repo.id);
        const likeCount = likes.get(repo.id) || 0;
        const isLiked = likeCount > 0;
        
        return `
            <div class="repo-card" data-repo-id="${repo.id}">
                <div class="repo-header">
                    <div class="repo-icon">📦</div>
                    <div class="repo-info">
                        <a href="${repo.url}" class="repo-name" target="_blank" rel="noopener">${repo.name}</a>
                        <div class="repo-category">${repo.category}</div>
                    </div>
                </div>
                <div class="repo-description">${repo.description || 'No description available'}</div>
                <div class="repo-footer">
                    <div class="repo-actions">
                        <button class="action-btn bookmark-btn ${isBookmarked ? 'active' : ''}" data-repo-id="${repo.id}" title="Bookmark">
                            <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 01-1.227.579L8 11.722l-3.773 3.107A.75.75 0 013 14.25V2.75z"></path>
                            </svg>
                            ${isBookmarked ? 'Saved' : 'Save'}
                        </button>
                        <button class="action-btn like-btn ${isLiked ? 'liked' : ''}" data-repo-id="${repo.id}" title="Like">
                            <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 14.25l-.345.666a.75.75 0 001.39 0L8 14.25zm3.598-11.982A5.515 5.515 0 0116 7.207c0 4.125-5.503 8.674-7.656 10.043L8 14.25l.344 3zm-7.196 0A5.515 5.515 0 000 7.207c0 4.125 5.503 8.674 7.656 10.043L8 14.25l-.344 3z"></path>
                            </svg>
                            ${likeCount || ''}
                        </button>
                        <button class="action-btn share-btn" data-repo-id="${repo.id}" title="Share">
                            <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M11 2.5a2.5 2.5 0 11.603 1.628l-6.718 3.12a2.499 2.499 0 010 1.504l6.718 3.12a2.5 2.5 0 11-.488.876l-6.718-3.12a2.5 2.5 0 110-3.256l6.718-3.12A2.5 2.5 0 0111 2.5z"></path>
                            </svg>
                        </button>
                        <button class="action-btn add-to-path-btn" data-repo-id="${repo.id}" title="Add to learning path">
                            <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M7.75 2a.75.75 0 01.75.75V7h4.25a.75.75 0 010 1.5H8.5v4.25a.75.75 0 01-1.5 0V8.5H2.75a.75.75 0 010-1.5H7V2.75A.75.75 0 017.75 2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Add event listeners
    document.querySelectorAll('.bookmark-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleBookmark(btn.dataset.repoId);
        });
    });

    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleLike(btn.dataset.repoId);
        });
    });

    document.querySelectorAll('.share-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            shareRepo(btn.dataset.repoId);
        });
    });

    document.querySelectorAll('.add-to-path-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            addToPath(btn.dataset.repoId);
        });
    });
}

// Toggle bookmark
function toggleBookmark(repoId) {
    if (bookmarks.has(repoId)) {
        bookmarks.delete(repoId);
    } else {
        bookmarks.add(repoId);
    }
    saveToStorage();
    updateBookmarkCount();
    
    const currentTab = document.querySelector('.tab-content.active').id;
    if (currentTab === 'bookmarks-tab') {
        renderBookmarks();
    } else {
        renderRepos(filterRepos());
    }
}

// Toggle like
function toggleLike(repoId) {
    const currentLikes = likes.get(repoId) || 0;
    likes.set(repoId, currentLikes + 1);
    saveToStorage();
    renderRepos(filterRepos());
    updateStats();
}

// Share repo
function shareRepo(repoId) {
    const repo = allRepos.find(r => r.id === repoId);
    if (!repo) return;

    const text = `Check out ${repo.name} - ${repo.description} #AwesomeStargazer #GitHub`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(repo.url)}`;
    window.open(url, '_blank', 'width=550,height=420');
}

// Add to learning path
function addToPath(repoId) {
    const repo = allRepos.find(r => r.id === repoId);
    if (!repo) return;

    if (learningPaths.length === 0) {
        alert('Please create a learning path first!');
        switchTab('learning-paths');
        return;
    }

    // Show path selection
    const pathNames = learningPaths.map((p, i) => `${i + 1}. ${p.name}`).join('\n');
    const selection = prompt(`Select a learning path:\n${pathNames}\n\nEnter number:`);
    
    if (selection) {
        const index = parseInt(selection) - 1;
        if (index >= 0 && index < learningPaths.length) {
            if (!learningPaths[index].repos.find(r => r.id === repo.id)) {
                learningPaths[index].repos.push({
                    id: repo.id,
                    name: repo.name,
                    url: repo.url,
                    completed: false
                });
                saveToStorage();
                alert(`Added to "${learningPaths[index].name}"!`);
            } else {
                alert('Repository already in this path!');
            }
        }
    }
}

// Update bookmark count
function updateBookmarkCount() {
    document.getElementById('bookmarks-count').textContent = bookmarks.size;
}

// Render bookmarks
function renderBookmarks() {
    const bookmarkedRepos = allRepos.filter(repo => bookmarks.has(repo.id));
    const container = document.getElementById('bookmarks-container');
    const noBookmarks = document.getElementById('no-bookmarks');

    if (bookmarkedRepos.length === 0) {
        container.innerHTML = '';
        noBookmarks.classList.remove('hidden');
        return;
    }

    noBookmarks.classList.add('hidden');
    renderRepos(bookmarkedRepos);
    
    // Re-target container
    const tempContainer = document.createElement('div');
    tempContainer.className = 'repos-grid';
    tempContainer.innerHTML = container.innerHTML;
    container.innerHTML = '';
    container.appendChild(tempContainer);
}

// Render learning paths
function renderLearningPaths() {
    const container = document.getElementById('learning-paths-container');
    const noPaths = document.getElementById('no-paths');

    if (learningPaths.length === 0) {
        container.innerHTML = '';
        noPaths.classList.remove('hidden');
        return;
    }

    noPaths.classList.add('hidden');

    container.innerHTML = learningPaths.map((path, pathIndex) => {
        const completed = path.repos.filter(r => r.completed).length;
        const total = path.repos.length;
        const progress = total > 0 ? (completed / total) * 100 : 0;

        return `
            <div class="learning-path-card">
                <div class="path-header">
                    <div class="path-title">${path.name}</div>
                    <div class="path-actions">
                        <button class="action-btn export-path-btn" data-path-index="${pathIndex}" title="Export">
                            <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M7.25 10.25a.75.75 0 001.5 0V4.56l2.22 2.22a.75.75 0 101.06-1.06l-3.5-3.5a.75.75 0 00-1.06 0l-3.5 3.5a.75.75 0 001.06 1.06l2.22-2.22v5.69z"></path>
                                <path d="M3.5 9.75a.75.75 0 00-1.5 0v1.5A2.75 2.75 0 004.75 14h6.5A2.75 2.75 0 0014 11.25v-1.5a.75.75 0 00-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5z"></path>
                            </svg>
                        </button>
                        <button class="action-btn share-path-btn" data-path-index="${pathIndex}" title="Share">
                            <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M11 2.5a2.5 2.5 0 11.603 1.628l-6.718 3.12a2.499 2.499 0 010 1.504l6.718 3.12a2.5 2.5 0 11-.488.876l-6.718-3.12a2.5 2.5 0 110-3.256l6.718-3.12A2.5 2.5 0 0111 2.5z"></path>
                            </svg>
                        </button>
                        <button class="action-btn delete-path-btn" data-path-index="${pathIndex}" title="Delete">
                            <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M11 1.75V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                ${path.description ? `<div class="path-description">${path.description}</div>` : ''}
                <div class="path-repos">
                    ${path.repos.map((repo, repoIndex) => `
                        <div class="path-repo-item">
                            <span class="drag-handle">☰</span>
                            <input type="checkbox" ${repo.completed ? 'checked' : ''} 
                                   data-path-index="${pathIndex}" 
                                   data-repo-index="${repoIndex}">
                            <div class="path-repo-info">
                                <a href="${repo.url}" class="path-repo-name" target="_blank">${repo.name}</a>
                            </div>
                            <button class="action-btn" data-path-index="${pathIndex}" data-repo-index="${repoIndex}" title="Remove">
                                <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
                                </svg>
                            </button>
                        </div>
                    `).join('')}
                </div>
                <div class="path-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progress}%"></div>
                    </div>
                    <span class="progress-text">${completed}/${total}</span>
                </div>
            </div>
        `;
    }).join('');

    // Add event listeners
    document.querySelectorAll('.path-repo-item input[type="checkbox"]').forEach(cb => {
        cb.addEventListener('change', (e) => {
            const pathIndex = parseInt(cb.dataset.pathIndex);
            const repoIndex = parseInt(cb.dataset.repoIndex);
            learningPaths[pathIndex].repos[repoIndex].completed = cb.checked;
            saveToStorage();
            renderLearningPaths();
        });
    });

    document.querySelectorAll('.delete-path-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (confirm('Delete this learning path?')) {
                learningPaths.splice(parseInt(btn.dataset.pathIndex), 1);
                saveToStorage();
                renderLearningPaths();
            }
        });
    });

    document.querySelectorAll('.export-path-btn').forEach(btn => {
        btn.addEventListener('click', () => exportPath(parseInt(btn.dataset.pathIndex)));
    });

    document.querySelectorAll('.share-path-btn').forEach(btn => {
        btn.addEventListener('click', () => sharePath(parseInt(btn.dataset.pathIndex)));
    });

    document.querySelectorAll('.path-repo-item button.action-btn[data-repo-index]').forEach(btn => {
        btn.addEventListener('click', () => {
            const pathIndex = parseInt(btn.dataset.pathIndex);
            const repoIndex = parseInt(btn.dataset.repoIndex);
            learningPaths[pathIndex].repos.splice(repoIndex, 1);
            saveToStorage();
            renderLearningPaths();
        });
    });
}

// Export path as markdown
function exportPath(pathIndex) {
    const path = learningPaths[pathIndex];
    let markdown = `# ${path.name}\n\n`;
    if (path.description) {
        markdown += `${path.description}\n\n`;
    }
    markdown += `## Repositories\n\n`;
    path.repos.forEach((repo, i) => {
        markdown += `${i + 1}. [${repo.completed ? 'x' : ' '}] [${repo.name}](${repo.url})\n`;
    });

    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${path.name.replace(/\s+/g, '-').toLowerCase()}.md`;
    a.click();
    URL.revokeObjectURL(url);
}

// Share learning path
function sharePath(pathIndex) {
    const path = learningPaths[pathIndex];
    const text = `Check out my learning path: ${path.name} with ${path.repos.length} repositories! #AwesomeStargazer #LearningPath`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'width=550,height=420');
}

// Update stats
function updateStats() {
    document.getElementById('total-repos').textContent = allRepos.length.toLocaleString();
    document.getElementById('total-categories').textContent = categories.size;
    document.getElementById('total-likes').textContent = Array.from(likes.values()).reduce((a, b) => a + b, 0);
    document.getElementById('total-bookmarks').textContent = bookmarks.size;

    // Top categories
    const categoryCounts = {};
    allRepos.forEach(repo => {
        categoryCounts[repo.category] = (categoryCounts[repo.category] || 0) + 1;
    });
    
    const topCategories = Object.entries(categoryCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);

    document.getElementById('top-categories').innerHTML = topCategories.map(([cat, count], i) => `
        <div class="top-item">
            <span class="top-item-rank">#${i + 1}</span>
            <span class="top-item-name">${cat}</span>
            <span class="top-item-value">${count}</span>
        </div>
    `).join('');

    // Top liked repos
    const topLiked = Array.from(likes.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([id, count]) => {
            const repo = allRepos.find(r => r.id === id);
            return { repo, count };
        })
        .filter(item => item.repo);

    document.getElementById('top-liked').innerHTML = topLiked.length > 0 
        ? topLiked.map((item, i) => `
            <div class="top-item">
                <span class="top-item-rank">#${i + 1}</span>
                <span class="top-item-name">${item.repo.name}</span>
                <span class="top-item-value">❤️ ${item.count}</span>
            </div>
        `).join('')
        : '<p style="text-align: center; padding: 20px; color: var(--text-secondary);">No liked repositories yet</p>';
}

// Switch tabs
function switchTab(tabName) {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));

    const tabBtn = document.querySelector(`[data-tab="${tabName}"]`);
    const tabContent = document.getElementById(`${tabName}-tab`);

    if (tabBtn) tabBtn.classList.add('active');
    if (tabContent) tabContent.classList.add('active');

    // Render content for specific tabs
    if (tabName === 'bookmarks') {
        renderBookmarks();
    } else if (tabName === 'learning-paths') {
        renderLearningPaths();
    } else if (tabName === 'stats') {
        updateStats();
    }
}

// Initialize
async function init() {
    loadFromStorage();
    updateBookmarkCount();

    // Load repo data
    await fetchRepoData();

    // Hide loading state
    document.getElementById('loading-state').style.display = 'none';

    // Populate category filter
    const categoryFilter = document.getElementById('category-filter');
    Array.from(categories).sort().forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        categoryFilter.appendChild(option);
    });

    // Initial render
    renderRepos(filterRepos());

    // Event listeners
    document.getElementById('search-input').addEventListener('input', () => {
        renderRepos(filterRepos());
    });

    document.getElementById('search-clear').addEventListener('click', () => {
        document.getElementById('search-input').value = '';
        renderRepos(filterRepos());
    });

    document.getElementById('category-filter').addEventListener('change', () => {
        renderRepos(filterRepos());
    });

    document.getElementById('sort-filter').addEventListener('change', () => {
        renderRepos(filterRepos());
    });

    // Tab navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchTab(btn.dataset.tab);
        });
    });

    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        document.querySelector('.sun-icon').classList.toggle('hidden');
        document.querySelector('.moon-icon').classList.toggle('hidden');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        document.querySelector('.sun-icon').classList.add('hidden');
        document.querySelector('.moon-icon').classList.remove('hidden');
    }

    // Create path button
    document.getElementById('create-path-btn').addEventListener('click', () => {
        showPathModal();
    });

    // Modal close buttons
    document.querySelectorAll('.modal-close, .modal-overlay').forEach(el => {
        el.addEventListener('click', () => {
            document.querySelectorAll('.modal').forEach(modal => modal.classList.add('hidden'));
        });
    });

    // Path modal actions
    document.getElementById('save-path-btn').addEventListener('click', () => {
        const name = document.getElementById('path-name-input').value.trim();
        const description = document.getElementById('path-description-input').value.trim();
        
        if (name) {
            learningPaths.push({
                name,
                description,
                repos: [],
                created: Date.now()
            });
            saveToStorage();
            document.getElementById('path-modal').classList.add('hidden');
            renderLearningPaths();
            document.getElementById('path-name-input').value = '';
            document.getElementById('path-description-input').value = '';
        }
    });

    document.getElementById('cancel-path-btn').addEventListener('click', () => {
        document.getElementById('path-modal').classList.add('hidden');
        document.getElementById('path-name-input').value = '';
        document.getElementById('path-description-input').value = '';
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Cmd/Ctrl + K for search
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            document.getElementById('search-input').focus();
        }

        // Esc to clear search or close modal
        if (e.key === 'Escape') {
            if (document.querySelector('.modal:not(.hidden)')) {
                document.querySelectorAll('.modal').forEach(modal => modal.classList.add('hidden'));
            } else {
                document.getElementById('search-input').value = '';
                renderRepos(filterRepos());
            }
        }

        // T for theme toggle
        if (e.key === 't' && !e.target.matches('input, textarea')) {
            document.getElementById('theme-toggle').click();
        }

        // ? for help
        if (e.key === '?' && !e.target.matches('input, textarea')) {
            showHelpModal();
        }

        // 1-4 for tab switching
        if (e.key >= '1' && e.key <= '4' && !e.target.matches('input, textarea')) {
            const tabs = ['explorer', 'learning-paths', 'bookmarks', 'stats'];
            switchTab(tabs[parseInt(e.key) - 1]);
        }
    });

    updateStats();
}

function showPathModal() {
    document.getElementById('path-modal').classList.remove('hidden');
    document.getElementById('path-name-input').focus();
}

function showHelpModal() {
    document.getElementById('help-modal').classList.remove('hidden');
}

// Start the app
init();
