// Awesome Stargazer - Main Application
(function() {
    'use strict';

    // State Management
    const state = {
        repos: [],
        categories: new Map(),
        bookmarks: new Set(),
        likes: new Set(),
        learningPaths: [],
        currentView: 'explorer',
        searchQuery: '',
        categoryFilter: '',
        sortBy: 'name'
    };

    // Local Storage Keys
    const STORAGE_KEYS = {
        BOOKMARKS: 'awesome-stargazer-bookmarks',
        LIKES: 'awesome-stargazer-likes',
        PATHS: 'awesome-stargazer-paths',
        THEME: 'awesome-stargazer-theme'
    };

    // Initialize App
    async function init() {
        loadFromLocalStorage();
        setupEventListeners();
        setupKeyboardShortcuts();
        await loadRepositories();
        renderCurrentView();
        updateStats();
    }

    // Load data from localStorage
    function loadFromLocalStorage() {
        try {
            const bookmarks = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
            if (bookmarks) state.bookmarks = new Set(JSON.parse(bookmarks));

            const likes = localStorage.getItem(STORAGE_KEYS.LIKES);
            if (likes) state.likes = new Set(JSON.parse(likes));

            const paths = localStorage.getItem(STORAGE_KEYS.PATHS);
            if (paths) state.learningPaths = JSON.parse(paths);

            const theme = localStorage.getItem(STORAGE_KEYS.THEME) || 'dark';
            document.body.setAttribute('data-theme', theme);
        } catch (e) {
            console.error('Error loading from localStorage:', e);
        }
    }

    // Save to localStorage
    function saveToLocalStorage() {
        try {
            localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify([...state.bookmarks]));
            localStorage.setItem(STORAGE_KEYS.LIKES, JSON.stringify([...state.likes]));
            localStorage.setItem(STORAGE_KEYS.PATHS, JSON.stringify(state.learningPaths));
        } catch (e) {
            console.error('Error saving to localStorage:', e);
        }
    }

    // Load repository data from pregenerated JSON file
    async function loadRepositories() {
        showLoading(true);
        
        try {
            const response = await fetch('data.json');
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            
            const data = await response.json();
            
            state.repos = data.repos || [];
            
            // Convert categories object to Map
            if (data.categories) {
                Object.entries(data.categories).forEach(([cat, count]) => {
                    state.categories.set(cat, count);
                });
            }

            populateCategoryFilter();
            renderCurrentView();
            updateStats();
        } catch (e) {
            console.error('Error loading repositories:', e);
            // Use fallback data for demo
            loadFallbackData();
        } finally {
            showLoading(false);
        }
    }

    // Fallback data for initial demo
    function loadFallbackData() {
        const sampleRepos = [
            {
                id: 'developersdigest/llm-answer-engine',
                name: 'developersdigest/llm-answer-engine',
                url: 'https://github.com/developersdigest/llm-answer-engine',
                category: 'react-nextjs',
                description: 'Build a Perplexity-Inspired Answer Engine Using Next.js, Groq, Llama-3, Langchain, OpenAI, Upstash, Brave & Serper',
                likes: 42
            },
            {
                id: 'openai/openai-assistants-quickstart',
                name: 'openai/openai-assistants-quickstart',
                url: 'https://github.com/openai/openai-assistants-quickstart',
                category: 'react-nextjs',
                description: 'OpenAI Assistants API quickstart with Next.js.',
                likes: 38
            },
            {
                id: 'vercel/ai-chatbot',
                name: 'vercel/ai-chatbot',
                url: 'https://github.com/vercel/ai-chatbot',
                category: 'react-nextjs',
                description: 'A full-featured, hackable Next.js AI chatbot built by Vercel',
                likes: 156
            },
            {
                id: 'tailwindlabs/tailwindcss',
                name: 'tailwindlabs/tailwindcss',
                url: 'https://github.com/tailwindlabs/tailwindcss',
                category: 'css-frameworks',
                description: 'A utility-first CSS framework for rapid UI development.',
                likes: 203
            },
            {
                id: 'themesberg/flowbite',
                name: 'themesberg/flowbite',
                url: 'https://github.com/themesberg/flowbite',
                category: 'css-frameworks',
                description: 'Open-source UI component library and front-end development framework based on Tailwind CSS',
                likes: 89
            }
        ];

        state.repos = sampleRepos;
        state.categories.set('react-nextjs', 3);
        state.categories.set('css-frameworks', 2);
        populateCategoryFilter();
        renderCurrentView();
        updateStats();
    }

    // Populate category filter dropdown
    function populateCategoryFilter() {
        const select = document.getElementById('category-filter');
        const categories = Array.from(state.categories.keys()).sort();
        
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = formatCategoryName(category) + ` (${state.categories.get(category)})`;
            select.appendChild(option);
        });
    }

    // Format category name for display
    function formatCategoryName(category) {
        return category
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    // Filter and sort repositories
    function getFilteredRepos() {
        let filtered = [...state.repos];

        // Apply search filter
        if (state.searchQuery) {
            const query = state.searchQuery.toLowerCase();
            filtered = filtered.filter(repo =>
                repo.name.toLowerCase().includes(query) ||
                repo.description.toLowerCase().includes(query) ||
                repo.category.toLowerCase().includes(query)
            );
        }

        // Apply category filter
        if (state.categoryFilter) {
            filtered = filtered.filter(repo => repo.category === state.categoryFilter);
        }

        // Apply sorting
        switch (state.sortBy) {
            case 'name':
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'likes':
                filtered.sort((a, b) => (state.likes.has(b.id) ? 1 : 0) - (state.likes.has(a.id) ? 1 : 0));
                break;
            case 'recent':
                // For demo, just reverse the order
                filtered.reverse();
                break;
        }

        return filtered;
    }

    // Render repository grid
    function renderRepoGrid(repos, containerId = 'repo-grid') {
        const container = document.getElementById(containerId);
        container.innerHTML = '';

        if (repos.length === 0) {
            container.innerHTML = `
                <div class="empty-state" style="grid-column: 1 / -1;">
                    <svg width="48" height="48" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path>
                    </svg>
                    <h3>No repositories found</h3>
                    <p>Try adjusting your search or filters</p>
                </div>
            `;
            return;
        }

        repos.forEach(repo => {
            const card = createRepoCard(repo);
            container.appendChild(card);
        });

        updateResultCount(repos.length);
    }

    // Create repository card element
    function createRepoCard(repo) {
        const card = document.createElement('div');
        card.className = 'repo-card';
        
        const isBookmarked = state.bookmarks.has(repo.id);
        const isLiked = state.likes.has(repo.id);

        card.innerHTML = `
            <div class="repo-card-header">
                <a href="${repo.url}" target="_blank" class="repo-name">${escapeHtml(repo.name)}</a>
                <div class="repo-actions">
                    <button class="action-btn bookmark-btn ${isBookmarked ? 'active' : ''}" 
                            data-repo-id="${repo.id}" title="Bookmark">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 01-1.227.579L8 11.722l-3.773 3.107A.75.75 0 013 14.25V2.75z"></path>
                        </svg>
                    </button>
                    <button class="action-btn like-btn ${isLiked ? 'liked' : ''}" 
                            data-repo-id="${repo.id}" title="Like">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 14.25l-.345.666a.75.75 0 001.39 0l-.645-.666zm0 0l.645-.666a.75.75 0 00-1.29 0l.645.666zm-6.543-4.5a5.5 5.5 0 117.778 7.778L8 14.25l-6.543-4.5z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="repo-description">${escapeHtml(repo.description)}</div>
            <div class="repo-footer">
                <span class="repo-category">${formatCategoryName(repo.category)}</span>
                <div class="repo-stats">
                    <span class="repo-stat">
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 14.25l-.345.666a.75.75 0 001.39 0l-.645-.666zm0 0l.645-.666a.75.75 0 00-1.29 0l.645.666zm-6.543-4.5a5.5 5.5 0 117.778 7.778L8 14.25l-6.543-4.5z"></path>
                        </svg>
                        ${isLiked ? repo.likes + 1 : repo.likes}
                    </span>
                </div>
                <button class="share-btn" data-repo-id="${repo.id}">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M7.823 1.677L4.927 4.573A.25.25 0 005.104 5H7.25v3.236a.75.75 0 101.5 0V5h2.146a.25.25 0 00.177-.427L8.177 1.677a.25.25 0 00-.354 0zM3.75 6.5a.75.75 0 00-.75.75v6.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-6.5a.75.75 0 00-.75-.75h-1.5a.75.75 0 000 1.5h.75v5h-7v-5h.75a.75.75 0 000-1.5h-1.5z"></path>
                    </svg>
                    Share
                </button>
            </div>
        `;

        // Add event listeners
        card.querySelector('.bookmark-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleBookmark(repo.id);
        });

        card.querySelector('.like-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleLike(repo.id);
        });

        card.querySelector('.share-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            shareRepo(repo);
        });

        return card;
    }

    // Toggle bookmark
    function toggleBookmark(repoId) {
        if (state.bookmarks.has(repoId)) {
            state.bookmarks.delete(repoId);
        } else {
            state.bookmarks.add(repoId);
        }
        saveToLocalStorage();
        updateBookmarkCount();
        renderCurrentView();
    }

    // Toggle like
    function toggleLike(repoId) {
        if (state.likes.has(repoId)) {
            state.likes.delete(repoId);
        } else {
            state.likes.add(repoId);
        }
        saveToLocalStorage();
        renderCurrentView();
    }

    // Share repository to Twitter
    function shareRepo(repo) {
        const text = `Check out ${repo.name}: ${repo.description}`;
        const hashtags = 'GitHub,AwesomeList,OpenSource';
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(repo.url)}&hashtags=${hashtags}`;
        window.open(url, '_blank', 'width=550,height=420');
    }

    // Render current view
    function renderCurrentView() {
        const views = document.querySelectorAll('.view');
        views.forEach(view => view.classList.remove('active'));

        const navBtns = document.querySelectorAll('.nav-btn');
        navBtns.forEach(btn => btn.classList.remove('active'));

        const currentViewBtn = document.querySelector(`[data-view="${state.currentView}"]`);
        if (currentViewBtn) currentViewBtn.classList.add('active');

        switch (state.currentView) {
            case 'explorer':
                document.getElementById('explorer-view').classList.add('active');
                renderRepoGrid(getFilteredRepos());
                break;
            case 'bookmarks':
                document.getElementById('bookmarks-view').classList.add('active');
                renderBookmarksView();
                break;
            case 'paths':
                document.getElementById('paths-view').classList.add('active');
                renderPathsView();
                break;
            case 'stats':
                document.getElementById('stats-view').classList.add('active');
                renderStatsView();
                break;
        }
    }

    // Render bookmarks view
    function renderBookmarksView() {
        const bookmarkedRepos = state.repos.filter(repo => state.bookmarks.has(repo.id));
        const container = document.getElementById('bookmarks-container');
        
        if (bookmarkedRepos.length === 0) {
            container.innerHTML = `
                <div class="empty-state" style="grid-column: 1 / -1;">
                    <svg width="48" height="48" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v11.5a.75.75 0 01-1.227.579L8 11.722l-3.773 3.107A.75.75 0 013 14.25V2.75z"></path>
                    </svg>
                    <h3>No Bookmarks Yet</h3>
                    <p>Start bookmarking repositories to save them for later</p>
                </div>
            `;
        } else {
            renderRepoGrid(bookmarkedRepos, 'bookmarks-container');
        }
    }

    // Render learning paths view
    function renderPathsView() {
        const container = document.getElementById('paths-container');
        
        if (state.learningPaths.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <svg width="48" height="48" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.5 4.75a.75.75 0 00-1.5 0v3.5a.75.75 0 00.471.696l2.5 1a.75.75 0 00.557-1.392L8.5 7.742V4.75z"></path>
                    </svg>
                    <h3>No Learning Paths Yet</h3>
                    <p>Create your first learning path to organize repositories for your learning journey</p>
                </div>
            `;
            return;
        }

        container.innerHTML = '';
        state.learningPaths.forEach(path => {
            const card = createPathCard(path);
            container.appendChild(card);
        });
    }

    // Create learning path card
    function createPathCard(path) {
        const card = document.createElement('div');
        card.className = 'path-card';
        
        card.innerHTML = `
            <h3>${escapeHtml(path.name)}</h3>
            <p>${escapeHtml(path.description || 'No description')}</p>
            <div class="path-repos">${path.repos.length} repositories</div>
            <div class="path-actions">
                <button class="btn-secondary view-path-btn" data-path-id="${path.id}">View</button>
                <button class="btn-secondary share-path-btn" data-path-id="${path.id}">Share</button>
                <button class="btn-secondary delete-path-btn" data-path-id="${path.id}">Delete</button>
            </div>
        `;

        card.querySelector('.view-path-btn').addEventListener('click', () => viewPath(path));
        card.querySelector('.share-path-btn').addEventListener('click', () => sharePath(path));
        card.querySelector('.delete-path-btn').addEventListener('click', () => deletePath(path.id));

        return card;
    }

    // View learning path
    function viewPath(path) {
        alert(`Path: ${path.name}\n\nRepositories:\n${path.repos.map(id => `- ${id}`).join('\n')}`);
    }

    // Share learning path
    function sharePath(path) {
        const text = `Check out my learning path: ${path.name}`;
        const hashtags = 'LearningPath,GitHub,OpenSource';
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&hashtags=${hashtags}`;
        window.open(url, '_blank', 'width=550,height=420');
    }

    // Delete learning path
    function deletePath(pathId) {
        if (confirm('Are you sure you want to delete this learning path?')) {
            state.learningPaths = state.learningPaths.filter(p => p.id !== pathId);
            saveToLocalStorage();
            renderCurrentView();
            updateStats();
        }
    }

    // Render stats view
    function renderStatsView() {
        document.getElementById('total-repos').textContent = state.repos.length;
        document.getElementById('total-categories').textContent = state.categories.size;
        document.getElementById('total-bookmarks').textContent = state.bookmarks.size;
        document.getElementById('total-paths').textContent = state.learningPaths.length;

        // Render top categories chart
        const chartContainer = document.getElementById('category-chart');
        chartContainer.innerHTML = '';

        const sortedCategories = Array.from(state.categories.entries())
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10);

        const maxCount = sortedCategories[0]?.[1] || 1;

        sortedCategories.forEach(([category, count]) => {
            const bar = document.createElement('div');
            bar.className = 'chart-bar';
            
            const width = (count / maxCount) * 100;
            
            bar.innerHTML = `
                <div class="chart-label">${formatCategoryName(category)}</div>
                <div class="chart-value-bar" style="width: ${width}%">
                    <div class="chart-value-text">${count}</div>
                </div>
            `;
            
            chartContainer.appendChild(bar);
        });
    }

    // Update stats
    function updateStats() {
        updateBookmarkCount();
    }

    // Update bookmark count badge
    function updateBookmarkCount() {
        document.getElementById('bookmark-count').textContent = state.bookmarks.size;
    }

    // Update result count
    function updateResultCount(count) {
        const total = state.repos.length;
        const text = count === total 
            ? `Showing all ${total} repositories`
            : `Showing ${count} of ${total} repositories`;
        document.getElementById('result-count').textContent = text;
    }

    // Setup event listeners
    function setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                state.currentView = btn.dataset.view;
                renderCurrentView();
            });
        });

        // Theme toggle
        document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

        // Search
        const searchInput = document.getElementById('search-input');
        searchInput.addEventListener('input', (e) => {
            state.searchQuery = e.target.value;
            document.getElementById('clear-search').style.display = state.searchQuery ? 'block' : 'none';
            renderCurrentView();
        });

        document.getElementById('clear-search').addEventListener('click', () => {
            searchInput.value = '';
            state.searchQuery = '';
            document.getElementById('clear-search').style.display = 'none';
            renderCurrentView();
        });

        // Filters
        document.getElementById('category-filter').addEventListener('change', (e) => {
            state.categoryFilter = e.target.value;
            renderCurrentView();
        });

        document.getElementById('sort-filter').addEventListener('change', (e) => {
            state.sortBy = e.target.value;
            renderCurrentView();
        });

        // Create path button
        document.getElementById('create-path-btn').addEventListener('click', openCreatePathModal);

        // Modal close buttons
        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', () => {
                btn.closest('.modal').classList.remove('active');
            });
        });

        // Click outside modal to close
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                }
            });
        });

        // Create path modal actions
        document.getElementById('cancel-path').addEventListener('click', () => {
            document.getElementById('create-path-modal').classList.remove('active');
        });

        document.getElementById('save-path').addEventListener('click', saveLearningPath);

        // Path search
        document.getElementById('path-search').addEventListener('input', (e) => {
            filterAvailableRepos(e.target.value);
        });
    }

    // Setup keyboard shortcuts
    function setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Cmd/Ctrl + K: Focus search
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                document.getElementById('search-input').focus();
            }

            // Escape: Clear search or close modal
            if (e.key === 'Escape') {
                const activeModal = document.querySelector('.modal.active');
                if (activeModal) {
                    activeModal.classList.remove('active');
                } else {
                    document.getElementById('search-input').value = '';
                    state.searchQuery = '';
                    document.getElementById('clear-search').style.display = 'none';
                    renderCurrentView();
                }
            }

            // T: Toggle theme
            if (e.key === 't' || e.key === 'T') {
                if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
                    toggleTheme();
                }
            }

            // B: View bookmarks
            if (e.key === 'b' || e.key === 'B') {
                if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
                    state.currentView = 'bookmarks';
                    renderCurrentView();
                }
            }

            // P: View paths
            if (e.key === 'p' || e.key === 'P') {
                if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
                    state.currentView = 'paths';
                    renderCurrentView();
                }
            }

            // ?: Show shortcuts
            if (e.key === '?') {
                if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
                    document.getElementById('shortcuts-modal').classList.add('active');
                }
            }
        });
    }

    // Toggle theme
    function toggleTheme() {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem(STORAGE_KEYS.THEME, newTheme);
    }

    // Open create path modal
    function openCreatePathModal() {
        const modal = document.getElementById('create-path-modal');
        modal.classList.add('active');
        
        // Populate available repos
        const container = document.getElementById('available-repos-list');
        container.innerHTML = '';
        
        state.repos.forEach(repo => {
            const item = document.createElement('div');
            item.className = 'repo-item';
            item.textContent = repo.name;
            item.dataset.repoId = repo.id;
            
            item.addEventListener('click', () => {
                addRepoToPath(repo.id);
            });
            
            container.appendChild(item);
        });

        // Clear selected repos
        document.getElementById('selected-repos-list').innerHTML = '';
        document.getElementById('selected-count').textContent = '0';
        document.getElementById('path-name').value = '';
        document.getElementById('path-description').value = '';
    }

    // Add repo to learning path
    function addRepoToPath(repoId) {
        const selectedList = document.getElementById('selected-repos-list');
        
        // Check if already added
        if (selectedList.querySelector(`[data-repo-id="${repoId}"]`)) return;
        
        const repo = state.repos.find(r => r.id === repoId);
        if (!repo) return;
        
        const item = document.createElement('div');
        item.className = 'repo-item selected';
        item.textContent = repo.name;
        item.dataset.repoId = repoId;
        
        item.addEventListener('click', () => {
            item.remove();
            updateSelectedCount();
        });
        
        selectedList.appendChild(item);
        updateSelectedCount();
    }

    // Update selected repos count
    function updateSelectedCount() {
        const count = document.querySelectorAll('#selected-repos-list .repo-item').length;
        document.getElementById('selected-count').textContent = count;
    }

    // Filter available repos in path modal
    function filterAvailableRepos(query) {
        const items = document.querySelectorAll('#available-repos-list .repo-item');
        const lowerQuery = query.toLowerCase();
        
        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(lowerQuery) ? 'block' : 'none';
        });
    }

    // Save learning path
    function saveLearningPath() {
        const name = document.getElementById('path-name').value.trim();
        const description = document.getElementById('path-description').value.trim();
        const selectedItems = document.querySelectorAll('#selected-repos-list .repo-item');
        
        if (!name) {
            alert('Please enter a path name');
            return;
        }
        
        if (selectedItems.length === 0) {
            alert('Please select at least one repository');
            return;
        }
        
        const repos = Array.from(selectedItems).map(item => item.dataset.repoId);
        
        const path = {
            id: Date.now().toString(),
            name,
            description,
            repos,
            createdAt: new Date().toISOString()
        };
        
        state.learningPaths.push(path);
        saveToLocalStorage();
        
        document.getElementById('create-path-modal').classList.remove('active');
        state.currentView = 'paths';
        renderCurrentView();
        updateStats();
    }

    // Show/hide loading spinner
    function showLoading(show) {
        const loading = document.getElementById('loading');
        if (show) {
            loading.classList.add('active');
        } else {
            loading.classList.remove('active');
        }
    }

    // Escape HTML
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Initialize app when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
