# Cole's Design Showcase

A modern portfolio website showcasing UI/UX design work and frontend development projects.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📦 Tech Stack

This project is built with:

- **Vite** - Next-generation frontend tooling
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **React Router** - Client-side routing
- **React Query** - Data fetching and caching

## 📁 Project Structure

```
├── public/          # Static assets
├── src/
│   ├── assets/     # Images and media files
│   ├── components/ # React components
│   │   └── ui/     # shadcn/ui components
│   ├── hooks/      # Custom React hooks
│   ├── lib/        # Utility functions
│   └── pages/      # Page components
└── ...
```

## 🎨 Features

- Responsive design
- Modern UI components
- Dark mode support
- Optimized performance
- Type-safe development

## 🚀 Deployment

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Automatic Deployment

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:
- Builds the project on every push to the `main` branch
- Deploys to GitHub Pages automatically

### Setup GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to **Pages** in the left sidebar
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy on the next push to `main`

### Access Your Site

After deployment, your site will be available at:
- `https://techieSingh.github.io/cole-s-design-showcase/`

### Manual Deployment

You can also trigger the workflow manually:
1. Go to the **Actions** tab in your repository
2. Select the **Build and Deploy** workflow
3. Click **Run workflow**

## 📝 License

This project is private and proprietary.
