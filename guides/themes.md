# Getting Started
> themes are very good way to customise your xelo client ui, xelo themes are highly customisable, learning to make themes for xelo client is super easy and beginner friendly! xelo themes currently use the ``.xtheme`` format which is just rename of .zip files. You can also have your theme published on our website, https://themes.xeloclient.in
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