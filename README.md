# 🚀 Programming School Platform

A modern, responsive web application built with Next.js 15 for delivering comprehensive programming courses and educational content. This platform features stunning animations, interactive UI components, and a professional design optimized for both desktop and mobile devices.

## ✨ Features

### 🎯 Core Functionality
- **Interactive Course Catalog** - Browse and explore programming courses
- **Instructor Profiles** - Learn about expert instructors and their expertise
- **Upcoming Webinars** - Stay updated with scheduled educational events
- **Responsive Design** - Optimized for all device sizes and screen resolutions
- **Dark Theme** - Modern dark UI with excellent contrast and readability

### 🎨 Advanced UI Components
- **3D Card Effects** - Immersive card interactions with depth
- **Spotlight Effects** - Dynamic lighting and focus elements
- **Moving Borders** - Animated button and card borders
- **Infinite Scrolling Cards** - Smooth, continuous content flow
- **Animated Modals** - Interactive popup dialogs with smooth transitions
- **Sticky Scroll Reveal** - Progressive content disclosure on scroll
- **Wavy Backgrounds** - Dynamic, animated background elements
- **Meteor Effects** - Particle-based visual enhancements

### 🛠️ Technical Features
- **TypeScript** - Full type safety and better development experience
- **Tailwind CSS v4** - Modern utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Turbopack** - Fast development server with Next.js 15
- **ESLint** - Code quality and consistency
- **PostCSS** - Advanced CSS processing

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js 15 App Router
│   ├── contact/           # Contact page
│   ├── courses/           # Courses page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   │   ├── 3d-card.tsx   # 3D card effects
│   │   ├── Spotlight.tsx # Spotlight lighting effects
│   │   ├── moving-border.tsx # Animated borders
│   │   ├── infinite-moving-cards.tsx # Scrolling cards
│   │   ├── animated-modal.tsx # Interactive modals
│   │   ├── sticky-scroll-reveal.tsx # Scroll animations
│   │   ├── wavy-background.tsx # Wave animations
│   │   ├── meteors.tsx   # Particle effects
│   │   └── ...           # Additional UI components
│   ├── Courses.tsx       # Course catalog component
│   ├── Footer.tsx        # Site footer
│   ├── HeroSection.tsx   # Main hero section
│   ├── Instructor.tsx    # Instructor profiles
│   ├── MovingCards.tsx   # Animated card carousel
│   ├── Navbar.tsx        # Navigation component
│   ├── ThreeDCard.tsx    # 3D card component
│   ├── UpcomingWebinars.tsx # Webinar listings
│   └── WhyUs.tsx         # Value proposition section
├── data/                 # Static data and content
└── lib/                  # Utility functions and helpers
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm**, **yarn**, **pnpm**, or **bun** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd school
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## 🎨 Customization

### Styling
The application uses Tailwind CSS v4 with custom animations and effects. Key styling files:
- `src/app/globals.css` - Global styles and CSS variables
- Component-specific styles using Tailwind utility classes

### Components
All UI components are modular and can be easily customized:
- Modify component props in `src/components/`
- Update UI components in `src/components/ui/`
- Adjust animations and effects in individual component files

### Content
Update content by modifying:
- Component text and descriptions
- Course information in `src/components/Courses.tsx`
- Instructor details in `src/components/Instructor.tsx`
- Webinar information in `src/components/UpcomingWebinars.tsx`

## 🧰 Tech Stack

### Frontend Framework
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React version with new features
- **TypeScript 5** - Type-safe JavaScript development

### Styling & Animation
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **CSS-in-JS** - Component-scoped styling

### Development Tools
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing and optimization
- **Turbopack** - Fast bundler for development

### UI Libraries
- **Lucide React** - Beautiful icon library
- **Class Variance Authority** - Component variant management
- **CLSX** - Conditional CSS class names
- **Tailwind Merge** - Intelligent Tailwind class merging

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop** - Full-featured experience with all animations
- **Tablet** - Optimized layout for medium screens
- **Mobile** - Touch-friendly interface with simplified animations

## 🚀 Performance Features

- **Next.js 15** - Latest performance optimizations
- **Turbopack** - Fast development builds
- **Image Optimization** - Automatic image optimization with Next.js
- **Code Splitting** - Automatic code splitting for better performance
- **Static Generation** - Pre-rendered pages for faster loading

## 🔧 Configuration Files

### TypeScript Configuration
- `tsconfig.json` - TypeScript compiler options and path mapping
- Path aliases configured for clean imports (`@/*` → `src/*`)

### Next.js Configuration
- `next.config.ts` - Next.js framework configuration
- Optimized for modern web standards

### ESLint Configuration
- `eslint.config.mjs` - Code quality and style rules
- Next.js-specific linting rules

### PostCSS Configuration
- `postcss.config.mjs` - CSS processing pipeline
- Tailwind CSS integration

## 📁 File Organization

### Components
- **Page Components** - Main page sections and layouts
- **UI Components** - Reusable, atomic UI elements
- **Layout Components** - Navigation, footer, and structural elements

### Styling
- **Global Styles** - Base styles, CSS variables, and utilities
- **Component Styles** - Scoped styling using Tailwind classes
- **Animation Styles** - Motion and transition definitions

### Data Management
- **Static Data** - Course information, instructor details, etc.
- **Dynamic Content** - User-generated or API-fetched content

## 🎯 Key Components Explained

### HeroSection
The main landing section featuring:
- Animated spotlight effects
- Gradient text with modern typography
- Call-to-action buttons with moving borders
- Responsive design for all screen sizes

### Courses
Interactive course catalog with:
- 3D card effects for course items
- Hover animations and transitions
- Responsive grid layout
- Course information display

### MovingCards
Dynamic card carousel featuring:
- Infinite scrolling animation
- Smooth transitions between cards
- Responsive design considerations
- Performance-optimized animations

### UI Components
Advanced UI elements including:
- **3D Cards** - Depth and perspective effects
- **Spotlight** - Dynamic lighting and focus
- **Moving Borders** - Animated element boundaries
- **Animated Modals** - Interactive dialog systems

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
3. Deploy automatically on every push

### Other Platforms
The application can be deployed to any platform that supports Node.js:
- **Netlify** - Static site hosting
- **AWS Amplify** - Full-stack hosting
- **Railway** - Simple deployment
- **DigitalOcean App Platform** - Scalable hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain component reusability
- Add proper TypeScript types
- Test responsive design across devices

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Vercel** - For hosting and deployment solutions
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations
- **Lucide** - For beautiful icons

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation for common solutions

---

**Built with ❤️ using Next.js 15, React 19, and modern web technologies**
