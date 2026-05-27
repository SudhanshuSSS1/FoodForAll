import os
import re

dir_path = r'c:\Users\ASUS\Downloads\FoodForAll\src'

# Mapping of custom Stitch spacing to Tailwind default spacing
replacements = [
    (r'\b(p|px|py|pt|pb|pl|pr|m|mx|my|mt|mb|ml|mr|gap|space-x|space-y)-xs\b', r'\g<1>-1'),
    (r'\b(p|px|py|pt|pb|pl|pr|m|mx|my|mt|mb|ml|mr|gap|space-x|space-y)-sm\b', r'\g<1>-3'),
    (r'\b(p|px|py|pt|pb|pl|pr|m|mx|my|mt|mb|ml|mr|gap|space-x|space-y)-base\b', r'\g<1>-2'),
    (r'\b(p|px|py|pt|pb|pl|pr|m|mx|my|mt|mb|ml|mr|gap|space-x|space-y)-md\b', r'\g<1>-6'),
    (r'\b(p|px|py|pt|pb|pl|pr|m|mx|my|mt|mb|ml|mr|gap|space-x|space-y)-lg\b', r'\g<1>-12'),
    (r'\b(p|px|py|pt|pb|pl|pr|m|mx|my|mt|mb|ml|mr|gap|space-x|space-y)-xl\b', r'\g<1>-20'),
    (r'\b(p|px|py|pt|pb|pl|pr|m|mx|my|mt|mb|ml|mr|gap|space-x|space-y)-gutter\b', r'\g<1>-6'),
    (r'\bmax-w-container-max\b', r'max-w-7xl'),
    (r'\bmd:p-xl\b', r'md:p-20'),
    (r'\bmd:py-xl\b', r'md:py-20'),
    (r'\blg:p-xl\b', r'lg:p-20'),
    (r'\blg:py-xl\b', r'lg:py-20'),
]

for root, _, files in os.walk(dir_path):
    for file in files:
        if file.endswith('.jsx'):
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = content
            for pattern, replacement in replacements:
                new_content = re.sub(pattern, replacement, new_content)
            
            if new_content != content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {file_path}")

print("Replacement complete.")
