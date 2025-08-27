# Getting Started
## - For themes
> for themes you would need to first download the themes template from here: [template](https://github.com/Xelo-Client/Theme-template.git)  or clone it using
``
git clone https://github.com/Xelo-Client/Theme-template.git
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