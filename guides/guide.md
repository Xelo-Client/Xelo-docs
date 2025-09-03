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