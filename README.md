# Test Landing Page PWA

## Project Overview
This project is an experimental Progressive Web Application (PWA) that serves as a landing page template. It's built using Next.js and implements Anthropic's Model Context Protocols for autonomous development. The goal is to create a template that can be easily adapted for client dashboard onboarding.

### What makes this project special?
- Built as a Progressive Web App (PWA) for optimal performance and offline capabilities
- Uses Anthropic's Model Context Protocols for AI-assisted development
- Implements modern tech stack with TypeScript and Next.js
- Includes shadcn/ui components for consistent design
- Follows best practices for accessibility and SEO

## Tech Stack
- Node.js (20.x)
- Next.js (15.1.3)
- TypeScript (5.6.2)
- Tailwind CSS (3.3.6)
- shadcn/ui (0.9.4)
- React & React DOM (19.x)
- next-pwa (5.6.0)
- ESLint (8.58.0)
- Prettier (3.6.0)
- Jest (29.7.1)

## Getting Started

### Prerequisites
```bash
# Check if you have Node.js installed
node --version  # Should be 20.x or higher

# Check npm version
npm --version  # Should be 10.x or higher
```

### Installation
1. Clone the repository:
```bash
git clone https://github.com/Detroit-ish/test-landing-page-pwa.git
cd test-landing-page-pwa
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure
```
test-landing-page-pwa/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # Reusable UI components
│   ├── lib/             # Utility functions and helpers
│   ├── styles/          # Global styles and Tailwind config
│   └── types/           # TypeScript type definitions
├── public/              # Static files and PWA assets
├── tests/              # Test files
└── package.json        # Project dependencies and scripts
```

## Development Approach
This project uses Anthropic's Model Context Protocols to assist in development. This means:
- AI-assisted code generation and optimization
- Automated documentation updates
- Intelligent component suggestions
- Context-aware code completion

## Features to be Implemented
- [ ] Responsive landing page design
- [ ] PWA configuration and offline support
- [ ] Authentication system
- [ ] Dashboard template
- [ ] Dark/Light mode support
- [ ] Performance optimization
- [ ] Accessibility features
- [ ] SEO optimization

## Contributing
This is a test project for exploring AI-assisted development. Feel free to fork and experiment!

## License
MIT

## Notes for Novice Developers
- A PWA (Progressive Web App) is a website that can work offline and feel like a native app
- The tech stack used here represents modern web development best practices
- TypeScript adds type safety to JavaScript, helping catch errors early
- Tailwind CSS provides utility classes for styling
- shadcn/ui gives us pre-built, customizable components
- The Next.js framework simplifies React development and provides server-side rendering