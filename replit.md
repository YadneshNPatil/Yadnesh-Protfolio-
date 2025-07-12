# Yadnesh Patil Portfolio Website

## Overview

This is a professional portfolio website for Yadnesh Patil, an ERP Finance & Operations Consultant specializing in Microsoft Dynamics 365 F&O. The application is built as a full-stack web application with a React frontend and Express backend, designed to showcase professional experience, skills, and provide a contact form for potential clients.

## User Preferences

Preferred communication style: Simple, everyday language.
Location: Mumbai, India
Profile Image: Professional headshot integrated into hero section

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for development and build processes
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth animations and transitions

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful API endpoints
- **Session Management**: Express sessions with PostgreSQL storage

### Data Storage
- **Primary Database**: PostgreSQL hosted on Neon
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Database Storage**: PostgreSQL database with Drizzle ORM for persistent data storage

## Key Components

### Frontend Components
1. **Landing Page Sections**:
   - Navigation with smooth scrolling
   - Hero section with professional introduction and profile image
   - About section highlighting expertise
   - Experience timeline with detailed work history
   - Skills showcase with categorized technical abilities
   - Education background
   - Professional achievements
   - Blog section with ERP insights and articles
   - Contact form with validation

2. **UI Infrastructure**:
   - Comprehensive design system using shadcn/ui
   - Responsive layout with mobile-first approach
   - Dark/light theme support via CSS variables
   - Toast notifications for user feedback
   - Modal dialogs and form components

### Backend Components
1. **API Routes**:
   - `/api/contacts` - Contact form submission endpoint
   - `/api/resume/download` - Resume download endpoint (placeholder)

2. **Data Models**:
   - Users table for potential authentication
   - Contacts table for storing contact form submissions
   - Zod schemas for input validation

3. **Development Tools**:
   - Vite integration for SSR-like development experience
   - Hot module replacement in development
   - Request logging middleware

## Data Flow

### Contact Form Submission
1. User fills out contact form on frontend
2. Form data validated using Zod schema
3. POST request sent to `/api/contacts` endpoint
4. Server validates data and stores in PostgreSQL
5. Success/error response sent back to client
6. Toast notification displayed to user

### Resume Download
1. User clicks download button
2. GET request sent to `/api/resume/download`
3. Server responds with download URL (currently placeholder)
4. Browser initiates file download

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18+ with hooks and modern patterns
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Query**: Server state management
- **React Hook Form**: Form handling with validation
- **Zod**: Runtime type validation

### Backend Dependencies
- **Express.js**: Web framework
- **Drizzle ORM**: Database toolkit
- **PostgreSQL**: Database driver (@neondatabase/serverless)
- **Zod**: Schema validation
- **Connect-pg-simple**: PostgreSQL session store

### Development Dependencies
- **Vite**: Build tool and development server
- **TypeScript**: Static type checking
- **ESBuild**: JavaScript bundler for production builds
- **Replit Plugins**: Development environment integration

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with Express backend
- **Hot Reload**: Automatic reloading for both frontend and backend changes
- **Environment Variables**: DATABASE_URL for PostgreSQL connection
- **Asset Serving**: Vite handles static assets and HMR

### Production Build
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Static Serving**: Express serves built frontend files
4. **Database**: Production PostgreSQL database via Neon

### Environment Configuration
- **Development**: `NODE_ENV=development` with Vite dev server
- **Production**: `NODE_ENV=production` with built assets
- **Database**: Requires `DATABASE_URL` environment variable
- **Replit Integration**: Special handling for Replit environment

### Key Architectural Decisions

1. **Monorepo Structure**: Single repository with `client/`, `server/`, and `shared/` directories for better code organization and type sharing

2. **TypeScript Throughout**: Full TypeScript implementation for type safety across frontend, backend, and shared schemas

3. **Drizzle ORM**: Chosen for type-safe database operations and better developer experience compared to raw SQL

4. **Vite + Express Integration**: Custom Vite setup allows for seamless SSR-like development while maintaining SPA architecture

5. **Zod Validation**: Shared validation schemas between frontend and backend ensure consistency

6. **Component-Based Architecture**: Modular React components for maintainability and reusability

7. **Modern CSS Approach**: Tailwind CSS with CSS variables for dynamic theming support

## Recent Changes

### January 2025
- **Profile Integration**: Added professional headshot to hero section with circular frame and blur effects
- **Location Update**: Changed location from specific address to Mumbai, India for broader professional appeal
- **Blog Section**: Created comprehensive ERP blog section with 6 sample articles covering:
  - Career transition from logistics to ERP
  - Technical deep-dives on D365 F&O modules
  - Best practices and implementation insights
  - Industry trends and predictions
  - Common challenges and solutions
- **Navigation Enhancement**: Added blog navigation item to main menu
- **Database Integration**: Migrated from in-memory storage to PostgreSQL database using Drizzle ORM
- **Storage Fix**: Implemented missing createContact method and replaced MemStorage with DatabaseStorage
- **Content Styling**: Added CSS utilities for text truncation and improved blog post layouts