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

### GitHub Actions Deployment (Recommended)

This repository is configured to automatically deploy to GitHub Pages using GitHub Actions. When you push changes to the `main` branch, the site will automatically build and deploy.

To set up GitHub Pages with GitHub Actions:

1. Go to your repository Settings
2. Navigate to Pages
3. Under "Build and deployment", select "GitHub Actions" as the source
4. Your site will be deployed automatically when you push to the `main` branch

### Manual Deployment

You can also deploy manually using the gh-pages package:

```bash
# Install gh-pages package if not already installed
npm install --save-dev gh-pages

# Deploy to GitHub Pages
npm run deploy
```

This will build the project and deploy it to the `gh-pages` branch of your repository.

## Customization

Edit files in `src/components/` to modify the content and appearance.

To update your information, modify the data in the App.jsx file and component files.

## Project Structure

- `src/components/` - React components for different sections
- `src/assets/` - Static assets like images
- `src/index.css` - Global styles and Tailwind CSS configuration
- `tailwind.config.js` - Tailwind CSS configuration

## License

MIT License
