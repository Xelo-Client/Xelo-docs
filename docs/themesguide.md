# Getting Started
## - For themes
> for themes you would need to first download the themes template from here:  or clone it using
``
git clone https://github.git
``

# Theme-template
Free to use themes template to make your own themes for Xelo

# 📦 XTheme File Structure

This document explains how to structure and define `.xtheme` files for community-made themes in your Android app.  
Each `.xtheme` is just a **ZIP archive** with specific files inside.

---

## 🔹 File Structure

```
MyCoolTheme.xtheme
│
├── manifest.json       # Metadata about the theme
├── preview.png         # Optional preview image
│
└── colors/
    └── colors.json     # Actual color definitions
```

---

## 🔹 `manifest.json` (Theme Metadata)

This file describes the theme itself (like a manifest).  
It does **not** contain colors, images, or sounds — just metadata.

```json
{
  "name": "My Cool Theme",
  "package": "com.community.theme.cooltheme",
  "version": "1.0",
  "author": "User123",
  "email": "user123@example.com",
  "license": "MIT",
  "description": "A clean minimalistic theme with teal accents.",
  "preview": "preview.png",
  "createdAt": "2025-08-21",
  "updatedAt": "2025-08-21"
}
```

### Fields
- **name** → Human-readable theme name  
- **package** → Unique package identifier (like Android apps)  
- **version** → Theme version string  
- **author** → Theme creator’s name  
- **email** → (Optional) Contact info  
- **license** → License for sharing (MIT, GPL, etc.)  
- **description** → Short description of the theme  
- **preview** → File path of preview image (usually `preview.png`)  
- **createdAt / updatedAt** → Dates for version tracking  

---

## 🔹 `colors/colors.json`

This file defines all the theme’s colors.  
Keep naming consistent so your app can map them correctly.

```json
{
  "name": "Default",
  "author": "Xelo Team",
  "description": "Material Design 3 Dark Theme",
  "colors": {
    "background": "#0A0A0A",
    "onBackground": "#FFFFFF",
    "surface": "#141414",
    "onSurface": "#FFFFFF",
    "surfaceVariant": "#1F1F1F",
    "onSurfaceVariant": "#CCCCCC",
    "outline": "#505050",
    "primary": "#FFFFFF",
    "onPrimary": "#000000",
    "primaryContainer": "#1F1F1F",
    "onPrimaryContainer": "#FFFFFF",
    "secondary": "#FFFFFF",
    "onSecondary": "#000000",
    "secondaryContainer": "#2A2A2A",
    "onSecondaryContainer": "#FFFFFF",
    "tertiary": "#F5F5F5",
    "onTertiary": "#000000",
    "tertiaryContainer": "#3A3A3A",
    "onTertiaryContainer": "#FFFFFF",
    "error": "#FF6659",
    "onError": "#FFFFFF",
    "errorContainer": "#B00020",
    "onErrorContainer": "#FFFFFF",
    "success": "#00E676",
    "info": "#64B5F6",
    "warning": "#FFC107",
    "toggle": {
      "track": "#2A2A2A",
      "trackChecked": "#4CAF50",
      "thumb": "#FFFFFF",
      "thumbChecked": "#FFFFFF",
      "ripple": "#4CAF50"
    }
  }
}
```

### Example Usage
- `primary` → Buttons, highlights  
- `accent` → Secondary highlights or links  
- `background` → App background color  
- `textPrimary` → Main text color  
- `textSecondary` → Subtext, hints  

---

## 🔹 Notes
- For now, only `manifest.json` + `colors.json` are required.  
- You can expand the format later with `fonts/`, `drawables/`, or `sounds/`.  
- `.xtheme` is just a **zip file** renamed with `.xtheme`.  

---