# ProVital Healthcare Platform

## Overview
ProVital is a modern healthcare platform connecting patients with medical professionals while offering comprehensive wellness resources. This frontend implementation showcases a responsive, user-friendly interface built with React and modern web technologies.

## 🚀 Features

### For Patients
- **Healthcare Professional Search**
  - Find doctors by specialty and location
  - View detailed professional profiles
  - Easy appointment booking system

### For Healthcare Providers
- **Professional Profile Management**
  - Custom practice listing
  - Appointment management
  - Professional credentials display

### Core Components
- Responsive header with authentication
- Interactive service carousels
- Medical facility showcase
- Educational health resources
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
│   ├── Header/          # Navigation & auth components
│   ├── Carousels/       # Interactive carousel components
│   ├── Auth/            # Authentication related components
│   └── Common/          # Reusable UI components
├── styles/
│   ├── variables.scss   # Global SCSS variables
│   ├── mixins.scss     # SCSS mixins
│   └── global.scss     # Global styles
└── assets/
    ├── images/         # Image assets
    └── icons/          # Icon assets
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

```bash
# Clone repository
git clone https://github.com/your-username/provital-frontend.git

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
  'mobile': 320px,
  'tablet': 768px,
  'desktop': 1024px,
  'wide': 1440px
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
- Deployed Link: [https://your-documentation-url.com](https://your-documentation-url.com)