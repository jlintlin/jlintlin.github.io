# Jie Lin - Academic Portfolio

A modern, clean academic portfolio website built with React and Tailwind CSS.

## Features

- Clean, minimalist design
- Light/dark mode toggle
- Mobile responsive
- Uniform date formatting
- Clean card-based layout
- GitHub Pages compatibility

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to GitHub Pages

### Automatic Deployment

```bash
# Install gh-pages package if not already installed
npm install --save-dev gh-pages

# Deploy to GitHub Pages
npm run deploy
```

This will automatically build the project and deploy it to the `gh-pages` branch of your repository.

### Manual Deployment

If you prefer to deploy manually:

1. Build the site:
   ```bash
   npm run build
   ```

2. Create or switch to the `gh-pages` branch:
   ```bash
   git checkout gh-pages # if the branch exists
   # or
   git checkout -b gh-pages # to create new branch
   ```

3. Move build files to root:
   ```bash
   cp -r dist/* .
   ```

4. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

5. Configure GitHub repository settings to use the `gh-pages` branch for GitHub Pages.

## Customization

Edit files in `src/components/` to modify the content and appearance.

To update your information, modify the data in the App.jsx file and component files.

## License

MIT License
