#!/usr/bin/env python3
"""
Generate a JSON file from markdown category files for the GitHub Pages site
"""
import os
import json
import re
from pathlib import Path

def parse_category_file(file_path):
    """Parse a category markdown file and extract repository information"""
    repos = []
    category_name = Path(file_path).stem
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            lines = content.split('\n')
            
            current_repo = None
            
            for i, line in enumerate(lines):
                line = line.strip()
                
                # Match repo header: ## [owner/repo](url)
                header_match = re.match(r'^##\s+\[([^\]]+)\]\(([^)]+)\)', line)
                if header_match:
                    if current_repo:
                        repos.append(current_repo)
                    
                    current_repo = {
                        'id': header_match.group(1),
                        'name': header_match.group(1),
                        'url': header_match.group(2),
                        'category': category_name,
                        'description': '',
                        'likes': 0
                    }
                    continue
                
                # Get description (first non-empty line after header)
                if current_repo and not current_repo['description'] and line:
                    if not line.startswith('#') and not line.startswith('---') and not line.startswith('🔗'):
                        current_repo['description'] = line
            
            if current_repo:
                repos.append(current_repo)
    
    except Exception as e:
        print(f"Error parsing {file_path}: {e}")
    
    return repos

def main():
    categories_dir = Path('categories')
    all_repos = []
    category_counts = {}
    
    if not categories_dir.exists():
        print(f"Error: {categories_dir} directory not found")
        return
    
    # Process all markdown files in categories directory
    for md_file in sorted(categories_dir.glob('*.md')):
        category_name = md_file.stem
        repos = parse_category_file(md_file)
        
        if repos:
            all_repos.extend(repos)
            category_counts[category_name] = len(repos)
            print(f"Parsed {category_name}: {len(repos)} repositories")
    
    # Create data structure
    data = {
        'repos': all_repos,
        'categories': category_counts,
        'total_repos': len(all_repos),
        'total_categories': len(category_counts),
        'generated_at': '2025-01-09'
    }
    
    # Write to JSON file
    output_file = Path('docs/data.json')
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    print(f"\nGenerated {output_file}")
    print(f"Total repositories: {len(all_repos)}")
    print(f"Total categories: {len(category_counts)}")
    print(f"Top 10 categories by count:")
    for cat, count in sorted(category_counts.items(), key=lambda x: x[1], reverse=True)[:10]:
        print(f"  {cat}: {count}")

if __name__ == '__main__':
    main()
