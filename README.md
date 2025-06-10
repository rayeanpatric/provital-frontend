# ProVital Healthcare Platform

## Overview

ProVital is a modern healthcare platform connecting patients with medical professionals while offering comprehensive wellness resources. This frontend implementation showcases a responsive, user-friendly interface built with React and modern web technologies.

## 🚀 Features

### Implemented Features

- **Responsive Header**

  - Desktop and mobile navigation
  - Login/Signup functionality
  - Hamburger menu for mobile view

- **Interactive Carousels**

  - Horizontal carousel for medical services
  - Vertical carousel for healthcare facilities
  - Smooth transitions and animations

- **Lifestyle Pillars Section**

  - Educational health cards
  - Image galleries with descriptions
  - Responsive grid layout

- **UI Components**
  - Hero section with search
  - Gradient bars for visual appeal
  - Image cards with descriptions
  - Responsive footer
- Mobile-optimized navigation

## 🛠 Technical Stack

- **Frontend Framework:** React 18+
- **Styling:** SCSS/Sass with BEM methodology
- **State Management:** React Hooks
- **Build Tool:** Create React App
- **Package Manager:** npm
- **Version Control:** Git

## 📁 Project Structure

```
src/
├── components/
│   ├── Header/              # Navigation & auth components
│   ├── Hero/               # Hero section with search
│   ├── HorizontalCarousel/ # Medical services carousel
│   ├── VerticalCarousel/   # Healthcare facilities carousel
│   ├── LifestylePillars/   # Health education section
│   ├── ImageCard/          # Reusable image card component
│   ├── ImageGallery/       # Gallery component
│   ├── GradientBar/        # Visual separator component
│   ├── SearchSection/      # Search functionality
│   └── Footer/             # Site footer
├── styles/
│   ├── App.scss           # App-level styles
│   └── variables.scss     # Global SCSS variables
└── components/images/     # Image assets for all components
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

```bash
# Clone repository
git clone https://github.com/rayeanpatric/provital-frontend.git

# Navigate to project directory
cd provital-frontend

# Install dependencies
npm install
```

### Development Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## 🎨 Styling Guidelines

- BEM methodology for CSS class naming
- Mobile-first responsive design
- Consistent color scheme and spacing
- Accessibility compliance

## 🔧 Configuration

### Environment Variables

```env
REACT_APP_API_URL=your_api_url
REACT_APP_ENV=development
```

### Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## 📱 Responsive Breakpoints

```scss
$breakpoints: (
  "mobile": 320px,
  "tablet": 768px,
  "desktop": 1024px,
  "wide": 1440px,
);
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👥 Contact

- Project Link: [https://github.com/rayeanpatric/provital-frontend](https://github.com/your-username/provital-frontend)
