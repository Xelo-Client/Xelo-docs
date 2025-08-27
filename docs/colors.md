## 🔹 `colors/colors.json`

This file defines all the theme’s colors.  
Keep naming consistent so your app can map them correctly.

```json
{
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
- i will soon expand the format later with `fonts/`, `drawables/`, or `sounds/`.  
- `.xtheme` is just a **zip file** renamed with `.xtheme`.  

---