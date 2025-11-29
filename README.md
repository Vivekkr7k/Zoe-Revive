# Zoe Revive - Rehabilitation & Recovery Website

A modern, pixel-perfect multi-page website built with cutting-edge web technologies, following Apple-inspired UI/UX principles.

## Tech Stack

- **Vite** - Next-generation frontend build tool
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for UI/micro-interactions
- **GSAP (ScrollTrigger)** - High-performance scroll-based animations
- **React Router** - Client-side routing

## Features

- 🎨 **Apple-Inspired Design** - Clean, minimalist aesthetic with generous whitespace
- 📱 **Fully Responsive** - Mobile-first design that adapts to all screen sizes
- ✨ **Smooth Animations** - Framer Motion for micro-interactions, GSAP for scroll narratives
- 🎯 **Glassmorphism Header** - Sticky navigation with backdrop blur effect
- 📜 **Scroll-Driven Storytelling** - GSAP ScrollTrigger for immersive narrative sections
- ♿ **Accessible** - WCAG AA compliant with proper semantic HTML

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.tsx      # Sticky navigation with glassmorphism
│   ├── Hero.tsx        # Hero section with animations
│   └── Commitment.tsx  # GSAP ScrollTrigger narrative section
├── pages/
│   ├── HomePage.tsx    # Homepage
│   ├── OurApproach.tsx # Services/Methodology page
│   ├── Staff.tsx       # Team/Credentials page
│   └── Contact.tsx     # Contact & Admissions page
├── App.tsx             # Main app with routing
├── main.tsx            # Entry point
└── index.css           # Global styles with Tailwind
```

## Design Principles

- **Trust & Compassion** - Conveys professional authority while remaining approachable
- **Minimal Cognitive Load** - Clear visual hierarchy and intuitive navigation
- **Smooth Transitions** - Ultra-smooth animations that enhance rather than distract
- **High Contrast** - WCAG AA compliant color palette for accessibility

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge) with ES2020 support.

