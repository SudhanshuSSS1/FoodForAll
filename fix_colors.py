import os
import re

directory = r"c:\Users\ASUS\Downloads\FoodForAll\src"

mappings = {
    # Light mode hardcodes
    r'bg-\[#fbf9f5\]': 'bg-surface',
    r'text-\[#1b1c1a\]': 'text-on-surface',
    r'border-\[#fbf9f5\]': 'border-surface',
    r'divide-\[#fbf9f5\]': 'divide-surface',
    
    # Dark mode hardcodes
    r'bg-\[#001206\]': 'bg-surface',
    r'bg-\[#001f0e\]': 'bg-surface-container',
    r'bg-\[#001809\]': 'bg-surface-container-low',
    r'text-\[#ccfcd8\]': 'text-on-surface',
    r'text-\[#ccfcd9\]': 'text-on-surface',
    r'border-\[#255036\]': 'border-outline-variant',
    r'border-\[#537f61\]': 'border-outline',
    r'divide-\[#255036\]': 'divide-outline-variant',
    
    # Specific colors
    r'text-\[#5ff077\]': 'text-primary-dim',
    r'border-\[#5ff077\]': 'border-primary-dim',
    r'ring-\[#5ff077\]': 'ring-primary-dim',
    r'bg-\[#5ff077\]': 'bg-primary-dim'
}

for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith(".jsx") or file.endswith(".js"):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                
            new_content = content
            for old, new in mappings.items():
                new_content = re.sub(old, new, new_content)
                
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {file}")

print("Done replacing hardcoded colors.")
