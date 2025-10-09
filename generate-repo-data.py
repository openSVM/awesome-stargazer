#!/usr/bin/env python3
"""
Generate repo-data.json from markdown files in categories/ directory
"""

import os
import re
import json
from pathlib import Path

def parse_markdown_file(filepath, category):
    """Parse a single markdown file and extract repository information"""
    repos = []
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    lines = content.split('\n')
    current_repo = None
    
    for line in lines:
        line = line.strip()
        
        # Match repo heading: ## [owner/repo](url)
        repo_match = re.match(r'^##\s+\[([^\]]+)\]\(([^)]+)\)', line)
        if repo_match:
            if current_repo:
                repos.append(current_repo)
            current_repo = {
                'name': repo_match.group(1),
                'url': repo_match.group(2),
                'category': category.replace('-', ' ').upper(),
                'description': '',
                'id': f"{category}-{repo_match.group(1).replace('/', '-')}"
            }
            continue
        
        # Collect description (lines between repo heading and next ---)
        if current_repo and line and not line.startswith('#') and not line.startswith('---') and not line.startswith('🔗'):
            if current_repo['description']:
                current_repo['description'] += ' ' + line
            else:
                current_repo['description'] = line
    
    if current_repo:
        repos.append(current_repo)
    
    return repos

def main():
    """Main function to generate repo-data.json"""
    categories_dir = Path('categories')
    all_repos = []
    
    if not categories_dir.exists():
        print(f"Error: {categories_dir} directory not found")
        return
    
    # Get all markdown files
    md_files = sorted(categories_dir.glob('*.md'))
    
    print(f"Processing {len(md_files)} category files...")
    
    for md_file in md_files:
        category = md_file.stem
        repos = parse_markdown_file(md_file, category)
        all_repos.extend(repos)
        print(f"  ✓ {category}: {len(repos)} repos")
    
    # Write to JSON file
    output_file = 'repo-data.json'
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(all_repos, f, indent=2, ensure_ascii=False)
    
    print(f"\n✓ Generated {output_file} with {len(all_repos)} repositories")
    
    # Also generate categories list for JavaScript
    categories = sorted(set(repo['category'] for repo in all_repos))
    print(f"✓ Found {len(categories)} unique categories")

if __name__ == '__main__':
    main()
