# Post Reader

A modern Angular application for reading and managing posts, built with standalone components and the latest Angular features.

## 📋 Features

- **Post Management**: View and interact with posts
- **History Tracking**: Track post reading history
- **Modern UI**: Clean and responsive design with Bootstrap-inspired styling
- **Standalone Components**: Uses Angular's modern standalone component architecture
- **SPA Routing**: Full Single Page Application with client-side routing

## 🏗️ Architecture

### Technology Stack
- **Framework**: Angular 17+
- **Styling**: CSS with modern flexbox/grid layouts
- **Routing**: Angular Router with standalone components
- **State Management**: Signal-based state management
- **Component Architecture**: Fully standalone components

### Key Components
- `App`: Root component with routing setup
- `Posts`: Main post listing component
- `History`: Post reading history tracker
- `NavBar`: Navigation component with active route highlighting
- `PostItem`: Individual post display component

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or later)
- npm (v9 or later)
- Angular CLI (v17 or later)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MohammedNafee/post-reader-angular-app.git
cd post-reader
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

## 💻 Development

### Development Server

Start the development server:
```bash
ng serve
```

The app will automatically reload when you change any source files.

### Code Generation

Generate new components:
```bash
ng generate component component-name
```

Other generation commands:
```bash
ng generate directive|pipe|service|class|guard|interface|enum|module
```

### Building for Production

Create a production build:
```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

### Running Tests

Execute unit tests:
```bash
ng test
```

Run end-to-end tests:
```bash
ng e2e
```

## 🌳 Project Structure

```
src/
├── app/
│   ├── app.ts                 # Root component
│   ├── app.html              # Root template
│   ├── app.css               # Root styles
│   ├── app.routes.ts         # Route definitions
│   ├── app.config.ts         # App configuration
│   ├── models/              
│   │   └── Post.ts           # Post interface
│   ├── posts/                # Posts feature
│   ├── history/              # History feature
│   └── nav-bar/             # Navigation component
├── assets/                   # Static assets
└── styles.css               # Global styles
```

## 🛠️ Configuration

The application uses several configuration files:
- `angular.json`: Angular CLI configuration
- `tsconfig.json`: TypeScript configuration
- `package.json`: Project dependencies and scripts

## 📚 Additional Resources

- [Angular Documentation](https://angular.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Angular CLI Documentation](https://angular.dev/tools/cli)

## 📝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -am 'Add YourFeature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## ✨ Acknowledgments

- Angular team for the excellent framework
- Contributors and maintainers
- The open-source community
