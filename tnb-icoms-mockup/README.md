# TNB ICOMS 2.0 - Visual Mockup

A comprehensive visual mockup of the TNB Integrated Commissioning and Outage Management System (ICOMS) 2.0, built with Next.js and Tailwind CSS.

## Overview

This project demonstrates a professional, functional mockup of the TNB ICOMS 2.0 system based on the detailed User Requirements Specifications (URS) provided. The mockup showcases the system's key features and user interface design while incorporating TNB's corporate branding.

## Features Implemented

### 🏗️ Core System Architecture
- **Role-based Access Control**: Requestor, Planner, TOMS, GNC, System Admin, Project Engineer
- **Zone-based Security**: Geographic organization (KL, Selangor, Eastern, Northern, Perak, Johor)
- **Outage Types**: Planned, Unplanned, Emergency, and Forced outages
- **Workflow Management**: Complete outage lifecycle from creation to closure

### 🎨 Design & Branding
- **TNB Corporate Colors**: Primary blue (#014b7a), secondary blue (#7399e7), professional dark themes
- **Responsive Design**: Mobile-first approach with desktop optimization
- **Professional UI**: Clean, corporate interface with intuitive navigation
- **Accessibility**: High contrast, semantic HTML, keyboard navigation

### 📊 Key Pages & Components

#### 1. **Dashboard** (`/`)
- System overview with key statistics
- Recent activity feed
- Quick action buttons
- System status monitoring
- Real-time data visualization

#### 2. **Outage Creation** (`/outage-creation`)
- 3-step wizard interface
- Equipment selection and validation
- Date/time scheduling with conflict detection
- Information sidebar with SLD, history, and project data
- Form validation and progress tracking

#### 3. **Layout System**
- Responsive sidebar navigation
- Top navigation with user controls
- Consistent component library
- Mobile-responsive design

### 🔧 Technical Implementation

#### Frontend Technology Stack
- **Next.js 14+** with App Router
- **React 18** with modern hooks
- **Tailwind CSS** for styling
- **TypeScript** for type safety (ready for implementation)
- **Responsive Design** with mobile-first approach

#### Key Components
- **Layout**: Main layout with sidebar and navigation
- **Cards**: Reusable card components with consistent styling
- **Forms**: Multi-step forms with validation
- **Navigation**: Role-based menu system
- **Status Indicators**: Color-coded status badges

## Project Structure

```
tnb-icoms-mockup/
├── components/           # Reusable React components
│   ├── Layout.js        # Main layout with sidebar
│   └── [future components]
├── pages/               # Next.js pages
│   ├── index.js         # Dashboard
│   ├── outage-creation.js # Outage creation form
│   └── [future pages]
├── styles/              # CSS and styling
│   ├── globals.css      # Global styles and TNB branding
│   └── [component styles]
├── package.json         # Dependencies and scripts
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── postcss.config.js    # PostCSS configuration
```

## Installation & Setup

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation Steps

1. **Navigate to project directory:**
   ```bash
   cd tnb-icoms-mockup
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Visit `http://localhost:3000` to view the mockup

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run linting

## System Requirements Demonstrated

### User Roles & Permissions
- **Requestor**: Create outages, confirm outages, submit change requests
- **Planner**: Review and agree to outages, manage zone-specific outages
- **TOMS**: Study outages, approve/reject, manage system configuration
- **GNC**: Authorize outages, manage execution, extend/cancel outages
- **System Admin**: User management, role assignment, system configuration
- **Project Engineer**: Project creation and management

### Outage Workflow
1. **Creation**: Multi-step form with equipment selection
2. **Review**: Planner review and agreement
3. **Confirmation**: Requestor confirmation
4. **Approval**: TOMS study and approval
5. **Execution**: GNC authorization and monitoring
6. **Closure**: Outage completion and status updates

### Key Features
- Equipment database with history tracking
- Conflicting line detection and warnings
- Project-outage relationships
- Change request management
- Authorization tracking with time indicators
- Comprehensive reporting and analytics

## Design Principles

### TNB Branding
- **Primary Colors**: Deep corporate blue (#014b7a)
- **Secondary Colors**: Lighter blue (#7399e7), dark slate (#2a363f)
- **Typography**: Clean, professional fonts
- **Logo Integration**: TNB branding throughout

### User Experience
- **Intuitive Navigation**: Clear menu structure and breadcrumbs
- **Progressive Disclosure**: Step-by-step forms to reduce cognitive load
- **Visual Feedback**: Status indicators and progress bars
- **Responsive Design**: Works on desktop, tablet, and mobile

### Accessibility
- **High Contrast**: WCAG compliant color combinations
- **Keyboard Navigation**: Full keyboard accessibility
- **Semantic HTML**: Proper heading structure and ARIA labels
- **Screen Reader Support**: Accessible form labels and descriptions

## Future Development

### Additional Pages to Implement
- Outage Pending Review (`/pending-review`)
- Data Repository (`/data-repository`)
- Calendar View (`/calendar`)
- Authorization in Force (`/authorization`)
- Reports and Statistics (`/reports`)
- System Configuration (`/system-setup`)

### Enhanced Features
- **Real-time Updates**: WebSocket integration for live status updates
- **Advanced Search**: Filter and search across all outage data
- **Export Functionality**: PDF and Excel export capabilities
- **Audit Trail**: Complete change history and user activity logs
- **Integration Points**: API endpoints for backend integration

### Technical Enhancements
- **TypeScript Migration**: Full type safety implementation
- **State Management**: Redux or Zustand for complex state
- **Testing**: Jest and React Testing Library for comprehensive testing
- **Performance**: Image optimization and code splitting
- **Security**: Authentication and authorization middleware

## Documentation

- **URS Analysis**: Complete breakdown of user requirements in `tnb-icoms-analysis.md`
- **Component Documentation**: Inline code comments and JSDoc
- **API Documentation**: Ready for backend API integration
- **User Guides**: Contextual help and tooltips throughout

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile**: iOS Safari, Android Chrome
- **Accessibility**: Screen readers and assistive technologies

## Contributing

This is a demonstration project. For production implementation:

1. **Code Review**: Review all components for production readiness
2. **Testing**: Add comprehensive unit and integration tests
3. **Performance**: Optimize images and implement lazy loading
4. **Security**: Add input validation and security headers
5. **Accessibility**: Conduct accessibility audits and improvements

## License

This project is for demonstration purposes only. Contact TNB for production usage and licensing information.

## Support

For questions about the TNB ICOMS 2.0 system requirements or this mockup implementation, please refer to the URS documents or contact the development team.