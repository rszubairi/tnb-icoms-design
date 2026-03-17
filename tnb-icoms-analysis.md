# TNB ICOMS 2.0 - Comprehensive Analysis & Design Plan

## Executive Summary

TNB ICOMS (Integrated Commissioning and Outage Management System) 2.0 is a comprehensive system for managing planned, unplanned, emergency, and forced outages across TNB's transmission network. The system serves three primary user roles: Requestor/Planner, TOMS (Transmission Outage Management System), and GNC (Grid Network Control).

## User Roles & Permissions

### 1. Requestor
- **Responsibilities**: Create outage requests, confirm outages, submit change requests
- **Access**: Limited to their designated zone
- **Key Functions**: Outage creation, confirmation, change requests

### 2. Planner  
- **Responsibilities**: Review and agree to outage requests, manage zone-specific outages
- **Access**: Limited to their designated zone
- **Key Functions**: Outage review, agreement, monitoring

### 3. TOMS (Transmission Outage Management System)
- **Sub-roles**: TOMS Admin, TOMS Users
- **Responsibilities**: Study outages, approve/reject, manage system configuration
- **Access**: System-wide access
- **Key Functions**: Outage approval, system setup, configuration

### 4. GNC (Grid Network Control)
- **Responsibilities**: Authorize outages, manage execution, extend/cancel outages
- **Access**: System-wide access
- **Key Functions**: Outage authorization, execution monitoring

### 5. System Admin
- **Responsibilities**: User management, role assignment, system configuration
- **Access**: Full system access
- **Key Functions**: User setup, permission management

### 6. Project Engineer
- **Responsibilities**: Project creation and management
- **Access**: Limited to project-related functions
- **Key Functions**: Project setup, management

## System Architecture Overview

### Zones & Geography
- **KL Zone**: Kuala Lumpur
- **Selangor + Negri Sembilan**: Selangor, Negri Sembilan  
- **Eastern**: Terengganu, Kelantan, Pahang
- **Northern**: Perlis, Pulau Penang, Kedah
- **Perak + Melaka**: Perak, Melaka
- **Johor Baru**: Johor

### Outage Types & Workflow

#### 1. Planned Outages
- **Creation**: Requestor/Planner/TOMS
- **Workflow**: Draft → Pending → Agreed → Confirmed → Pending (TOMS) → Under-Study → Approved/Disapproved/KIV
- **Auto-assignment**: Based on duration and voltage level

#### 2. Unplanned Outages  
- **Creation**: Requestor/Planner/TOMS
- **Workflow**: Same as Planned
- **Auto-assignment**: Based on duration and voltage level

#### 3. Emergency Outages
- **Creation**: Requestor/Planner/TOMS
- **Workflow**: Auto-Agreed + Auto-Confirmed → Pending (TOMS)
- **Auto-assignment**: Based on duration and voltage level

#### 4. Forced Outages
- **Creation**: GNC only
- **Workflow**: Direct to execution phase

## Key Features Breakdown

### 1. Outage Management
- **Creation Interface**: Multi-step form with equipment selection
- **Status Tracking**: Real-time workflow progression
- **Change Requests**: Modification system for pending outages
- **History Tracking**: Complete audit trail of all changes

### 2. Equipment Management
- **Equipment Database**: Comprehensive equipment catalog
- **Off-Point Management**: Permanent and temporary off-points
- **Equipment History**: Outage history per equipment
- **Maintenance Tracking**: Last maintenance date tracking

### 3. System Configuration
- **User Management**: Role-based access control
- **Zone Management**: Geographic organization
- **Dropdown Management**: Configurable system values
- **Project Management**: Project-outage relationship

### 4. Reporting & Analytics
- **Custom Reports**: User-defined report generation
- **Statistics Dashboard**: System performance metrics
- **Calendar View**: 5-week outage calendar
- **Repository Access**: Historical data access

### 5. Authorization & Monitoring
- **Authorization Tracking**: Real-time authorization status
- **Long Authorization**: Extended outage monitoring
- **Status Monitoring**: Live system status updates

## Technical Requirements

### Frontend Technology Stack
- **Framework**: Next.js (React-based)
- **Styling**: HTML5 with CSS3
- **UI Components**: Custom component library
- **Responsive Design**: Mobile-first approach

### Backend Integration
- **API Architecture**: RESTful APIs
- **Database**: Relational database for structured data
- **Authentication**: Role-based authentication
- **Real-time Updates**: WebSocket for live status updates

## TNB GSO Branding Analysis

Based on the TNB GSO website analysis:

### Color Palette
- **Primary Blue**: #014b7a (Deep corporate blue)
- **Secondary Blue**: #7399e7 (Lighter blue for accents)
- **Dark Background**: #2a363f (Dark slate for headers)
- **Light Background**: #404a53 (Medium gray for sections)
- **Text Colors**: #ffffff (White), #e1e1e1 (Light gray), #727272 (Dark gray)

### Typography
- **Font Family**: Custom corporate font (from stylesheet.css)
- **Logo**: TNB GSO logo with blue color scheme

### Design Principles
- **Corporate Professional**: Clean, professional appearance
- **Blue-Themed**: Consistent use of TNB blue colors
- **Grid-Based Layout**: Structured, organized interface
- **Accessibility**: High contrast for readability

## Design Pages for Visual Mockup

### 1. Dashboard / Home Page
**Purpose**: System overview and quick access
**Features**:
- Outage summary cards (Pending, Approved, Active)
- Quick action buttons
- Recent activity feed
- System status indicators

### 2. Outage Creation Form
**Purpose**: Primary interface for creating new outages
**Features**:
- Multi-step form wizard
- Equipment selection interface
- Date/time picker with validation
- Information sidebar with SLD, history, conflicts

### 3. Outage Pending Review
**Purpose**: Planner review of pending outages
**Features**:
- List view with checkboxes for bulk actions
- Status indicators
- Quick action buttons (Agree/Disagree)
- Filter and search functionality

### 4. Outage Confirmation Page
**Purpose**: Requestor confirmation of agreed outages
**Features**:
- List of outages requiring confirmation
- Bulk confirmation capability
- Reject option with reason
- Countdown to confirmation deadline

### 5. Outage Pending Approval
**Purpose**: TOMS review of confirmed outages
**Features**:
- Detailed outage information
- Study notes input fields
- Approval/Rejection buttons
- KIV (Keep in View) option

### 6. Data Repository
**Purpose**: Comprehensive outage listing and search
**Features**:
- Advanced filtering options
- Sortable columns
- Export functionality (PDF, Excel)
- Detailed view modal

### 7. Change Request Form
**Purpose**: Modification requests for pending outages
**Features**:
- Outage selection
- Change type selection
- Justification input
- Submission tracking

### 8. Calendar View
**Purpose**: Visual timeline of outages
**Features**:
- 5-week calendar display
- Color-coded status indicators
- Click-to-details functionality
- Custom date range selection

### 9. Authorization in Force
**Purpose**: Real-time authorization monitoring
**Features**:
- Live authorization status
- Color-coded time indicators (Green/Yellow/Red)
- Filter by region, status, time
- Authorization workplan view

### 10. System Configuration
**Purpose**: Administrative setup and management
**Features**:
- User management interface
- Zone and location setup
- Equipment database management
- Dropdown value configuration

### 11. Project Management
**Purpose**: Project creation and tracking
**Features**:
- Project creation form
- Project status tracking
- Outage-to-project assignment
- Project completion workflow

### 12. Reporting & Statistics
**Purpose**: Custom report generation and analytics
**Features**:
- Report template selection
- Custom filter configuration
- Chart and graph generation
- Export options

## Implementation Strategy

### Phase 1: Core Infrastructure
1. **Setup Next.js project structure**
2. **Implement authentication system**
3. **Create base component library**
4. **Establish routing and navigation**

### Phase 2: Core Modules
1. **Dashboard and navigation**
2. **Outage creation workflow**
3. **User management system**
4. **Basic listing and search**

### Phase 3: Advanced Features
1. **Change request system**
2. **Calendar and scheduling**
3. **Authorization tracking**
4. **Reporting and analytics**

### Phase 4: Polish & Integration
1. **Responsive design refinement**
2. **Performance optimization**
3. **Accessibility improvements**
4. **Final testing and validation**

## Next.js Implementation Plan

### Project Structure
```
/components/
  /auth/           # Authentication components
  /layout/         # Layout and navigation
  /outages/        # Outage-related components
  /admin/          # Administrative components
  /common/         # Shared components

/pages/
  /auth/           # Authentication pages
  /dashboard/      # Main dashboard
  /outages/        # Outage management pages
  /admin/          # Administrative pages
  /reports/        # Reporting pages

/styles/
  /globals.css     # Global styles
  /components/     # Component-specific styles
  /themes/         # Theme and color definitions

/lib/
  /api/            # API integration
  /utils/          # Utility functions
  /constants/      # System constants
```

### Key Technologies
- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React Query** for data fetching
- **Zod** for form validation
- **React Hook Form** for form management

This comprehensive analysis provides the foundation for creating a professional, functional mockup that accurately represents the TNB ICOMS 2.0 system requirements while incorporating TNB's corporate branding and design principles.