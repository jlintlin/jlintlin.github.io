# Jie Lin - Academic Portfolio

A modern, Japanese-inspired academic portfolio website built with React and Tailwind CSS.

## Features

- Clean, minimalist Japanese-inspired design
- Light/dark mode toggle
- Mobile responsive
- Animations and hover effects
- Glassmorphism elements
- Email address protection against spam bots
- Easy to customize and extend

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

1. Build the site:
   ```bash
   npm run build
   ```

2. Create a branch named `gh-pages`:
   ```bash
   git checkout -b gh-pages
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

To update your information, modify the data in each component file.

## License

MIT License
