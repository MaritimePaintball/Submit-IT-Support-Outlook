# Outlook Ribbon Button Add-in - Deployment Guide

This add-in adds a custom button to the Outlook ribbon that opens your Microsoft Form.

## Prerequisites
- M365 Global Admin access
- GitHub account with a repository
- Your Microsoft Form URL

## Step 1: Customize the Files

### 1.1 Update manifest.xml
- **Line 12**: Replace `your-guid-here` with a new GUID. Generate one at https://guidgenerator.com/
- **Line 14**: Replace `Your Organization Name` with your company name
- **Lines 18-21**: Update URLs to match your GitHub Pages URL (format: `https://yourusername.github.io/repository-name/`)
- **Line 22**: Add your support URL

### 1.2 Update commands.js
- **Line 13**: Replace the `formUrl` with your actual Microsoft Form URL
  - Get this by opening your form and copying the full URL from the address bar

### 1.3 Create Icon Images
You need three icon sizes in PNG format:
- `icon-16.png` (16x16 pixels)
- `icon-32.png` (32x32 pixels)
- `icon-64.png` (64x64 pixels)
- `icon-80.png` (80x80 pixels)

Place these in an `assets` folder in your repository.

## Step 2: Set Up GitHub Pages

1. Create a new repository in GitHub (e.g., `outlook-addin`)
2. Upload these files:
   ```
   /manifest.xml
   /commands.js
   /commands.html
   /taskpane.html
   /assets/icon-16.png
   /assets/icon-32.png
   /assets/icon-64.png
   /assets/icon-80.png
   ```

3. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: main (or master) → / (root)
   - Click Save

4. Wait 2-3 minutes for deployment, then verify your files are accessible at:
   - `https://yourusername.github.io/repository-name/manifest.xml`
   - `https://yourusername.github.io/repository-name/commands.js`

## Step 3: Deploy Add-in to All Users

### 3.1 Access M365 Admin Center
1. Go to https://admin.microsoft.com
2. Navigate to **Settings** → **Integrated apps**

### 3.2 Upload Custom App
1. Click **Upload custom apps**
2. Select **Office Add-in**
3. Choose **Provide link to manifest file**
4. Enter: `https://yourusername.github.io/repository-name/manifest.xml`
5. Click **Validate**

### 3.3 Configure Deployment
1. After validation, click **Next**
2. **Assign users**: Select "Entire organization" or specific groups
3. **Deployment method**: Choose "Fixed" (automatically deployed, users cannot disable)
4. Click **Deploy**

### 3.4 Verify Deployment
- Deployment can take up to 12-24 hours to propagate
- Users will see the button appear in Outlook without any action required
- The button appears in both:
  - **Message Read mode** (when viewing emails)
  - **Message Compose mode** (when writing emails)

## Step 4: Testing

### Test the Add-in:
1. Open Outlook (web, desktop, or mobile)
2. Look for the "Forms" group in the ribbon with "Open Form" button
3. Click the button - it should open your Microsoft Form in a new window

## Troubleshooting

### Button doesn't appear
- Wait 24 hours for deployment propagation
- Check if deployment status is "Active" in admin center
- Verify manifest.xml is accessible at the public URL
- Check browser console for errors

### Button appears but doesn't work
- Verify the Form URL in commands.js is correct
- Ensure all files are accessible via HTTPS
- Check that GitHub Pages is enabled and working

### Icons don't display
- Verify icon files are in the correct location
- Ensure URLs in manifest.xml match your GitHub Pages structure
- Check that icons are PNG format and correct sizes

## Updating the Add-in

To update the form URL or other settings:
1. Edit the files in your GitHub repository
2. Commit and push changes
3. Changes will be live within a few minutes (GitHub Pages update)
4. Users will get the update automatically on next Outlook restart

## Security Notes

- The add-in uses minimal permissions (Restricted)
- Only opens URLs, doesn't access mailbox data
- All code is publicly visible on GitHub Pages
- Form URL should be your Microsoft Forms URL (forms.office.com)

## Support

If users report issues:
1. Check deployment status in M365 Admin Center
2. Verify manifest.xml is still accessible
3. Test the form URL directly in a browser
4. Check Microsoft 365 Service Health for any Outlook issues
