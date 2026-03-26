# Deployment Checklist

## Pre-Deployment
- [ ] Get your Microsoft Form URL (open the form and copy the full URL)
- [ ] Generate a GUID: 1cc6f490-34ad-4931-ac57-8a4a685fdd63 (or generate a new one)
- [ ] Create icon images (16x16, 32x32, 64x64, 80x80 PNG files)
- [ ] Have your GitHub username ready

## File Customization
- [ ] Update manifest.xml:
  - [ ] Line 12: Replace GUID
  - [ ] Line 14: Replace organization name
  - [ ] Lines 18-21: Replace GitHub URLs (https://YOURUSERNAME.github.io/REPONAME/)
  - [ ] Line 22: Add support URL
- [ ] Update commands.js:
  - [ ] Line 13: Replace form URL with your actual Microsoft Form URL
- [ ] Update all other files that reference GitHub URLs

## GitHub Setup
- [ ] Create repository (e.g., "outlook-addin")
- [ ] Upload all files:
  - [ ] manifest.xml
  - [ ] commands.js
  - [ ] commands.html
  - [ ] taskpane.html
  - [ ] assets/icon-16.png
  - [ ] assets/icon-32.png
  - [ ] assets/icon-64.png
  - [ ] assets/icon-80.png
- [ ] Enable GitHub Pages (Settings → Pages → Deploy from main branch)
- [ ] Wait 2-3 minutes for deployment
- [ ] Test manifest URL is accessible: https://YOURUSERNAME.github.io/REPONAME/manifest.xml

## M365 Admin Deployment
- [ ] Go to https://admin.microsoft.com
- [ ] Navigate to Settings → Integrated apps
- [ ] Click "Upload custom apps"
- [ ] Select "Office Add-in"
- [ ] Choose "Provide link to manifest file"
- [ ] Enter manifest URL
- [ ] Click "Validate" (must succeed)
- [ ] Click "Next"
- [ ] Assign to: Entire organization (or specific groups)
- [ ] Deployment method: Fixed (mandatory)
- [ ] Click "Deploy"
- [ ] Note: Deployment takes 12-24 hours to propagate

## Testing (after 24 hours)
- [ ] Open Outlook (web or desktop)
- [ ] Look for "Forms" group in ribbon
- [ ] Click "Open Form" button
- [ ] Verify form opens in new window
- [ ] Test in both reading and composing email modes

## Post-Deployment
- [ ] Document the form URL for future reference
- [ ] Inform users about the new button
- [ ] Monitor for any issues
- [ ] Keep GitHub repository accessible (don't delete or make private)

## Notes
- Generated GUID: 1cc6f490-34ad-4931-ac57-8a4a685fdd63
- GitHub Pages must remain public and active
- Any updates to files will auto-deploy to users
