# Awesome Stargazer - GitHub Pages Site

A dynamic, interactive web application to explore 19,564+ curated GitHub repositories across 567 categories.

## Features

- **📚 Repository Explorer**: Browse all repos with rich metadata
- **🔍 Dynamic Search**: Real-time filtering by name, description, or category  
- **🎯 Learning Paths**: Create and manage personalized learning journeys
- **🔖 Bookmarks**: Save favorites with localStorage persistence
- **❤️ Likes & Trending**: Like repos and see what's popular
- **🌓 Dark/Light Mode**: Toggle themes with one click
- **⌨️ Keyboard Shortcuts**: Power-user navigation (⌘K, Esc, T, ?, 1-4)
- **📱 Mobile Responsive**: Works beautifully on all devices
- **🚀 GitHub-like UI**: Familiar design and interactions

## Tech Stack

- Pure HTML/CSS/JavaScript (no frameworks)
- LocalStorage for data persistence
- Pre-generated JSON data (6.2MB)
- ~1,800 lines of code

## Data Generation

Run `python3 generate-repo-data.py` from the root directory to regenerate `docs/data.json` from the markdown files in `categories/`.

## Local Development

```bash
cd docs
python3 -m http.server 8000
# Visit http://localhost:8000
```

## GitHub Pages Deployment

This site is configured to deploy from the `docs/` directory. Enable GitHub Pages in repository settings:

1. Go to Settings → Pages
2. Select "Deploy from a branch"
3. Choose branch `main` (or your default branch) and folder `/docs`
4. Save

**Note**: The `data.json` file is 6.2MB. GitHub has a recommended limit of 1MB per file for optimal performance. Consider splitting the data or using pagination if you encounter issues.

## Keyboard Shortcuts

- `⌘/Ctrl + K` - Focus search
- `Esc` - Clear search / Close modal
- `T` - Toggle dark/light mode
- `?` - Show help
- `1-4` - Switch between tabs

## Browser Compatibility

Works in all modern browsers (Chrome, Firefox, Safari, Edge).
