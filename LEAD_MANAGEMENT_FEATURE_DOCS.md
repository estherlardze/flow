# Lead Management Feature Documentation

## Overview
The Lead Management module is a comprehensive CRM system for managing leads through the sales pipeline. It includes features for creating, viewing, editing, filtering, and managing leads with various states and assignments.

## Core Features

### 1. **Lead Display & Table Management**
- **Lead Table** (`/components/lead-table/`)
  - TanStack Table implementation with sorting, filtering, pagination
  - Row selection with checkboxes
  - Responsive design with column visibility controls
  - Real-time updates and optimistic UI
  - Columns: Name, Email, Phone, Source, Status, Budget, Location, Agent, Created/Updated dates
  - Actions column with dropdown menu for each lead

### 2. **Lead CRUD Operations**
- **Create Lead** (`/components/add-lead-sheet/`, `/hooks/useCreateLead.ts`)
  - Sheet-based form for adding new leads
  - Form validation and error handling
  - Success/error toast notifications
  - Automatic table refresh after creation

- **View Lead Details** (`/components/lead-sheet/`)
  - Detailed view of lead information
  - Read-only display in sheet format

- **Edit Lead** (`/components/edit-lead-sheet/`, `/hooks/useUpdateLead.ts`)
  - Update lead information
  - Form pre-populated with existing data
  - Validation and error handling

- **Delete Lead** (`/hooks/useDeleteLead.ts`)
  - Soft/hard delete functionality
  - Confirmation dialogs
  - Bulk delete operations

### 3. **Lead Status Management**
- **Status Updates** (`/components/status-popover/`, `/hooks/useUpdateLeadStatus.ts`)
  - Quick status changes via popover
  - Predefined status options
  - Visual status indicators with badges
  - Status history tracking

### 4. **Lead Filtering & Search**
- **Filter Toolbar** (`/components/lead-filters/`)
  - Search by name, email, phone
  - Filter by status, source, location, budget
  - Clear all filters functionality
  - Real-time filtering with debounced search

- **Advanced Filters** (`/stores/lead-store/lead-management.store.ts`)
  - Zustand-based filter state management
  - Persistent filter selections
  - Multiple filter combinations

### 5. **Bulk Operations**
- **Bulk Actions Toolbar** (`/components/bulk-actions-toolbar/`)
  - Select all/none functionality
  - Bulk status updates
  - Bulk agent assignment
  - Bulk delete operations
  - Export selected leads

### 6. **Agent Assignment**
- **Agent Assignment Modal** (`/components/agent-assignment-modal/`)
  - Assign leads to sales agents
  - Bulk assignment capabilities
  - Agent workload distribution
  - Assignment history tracking

### 7. **Follow-up Management**
- **Follow-up Modal** (`/components/followup-modal/`)
  - Schedule follow-up activities
  - Multiple follow-up types (Call, Email, WhatsApp, SMS)
  - Template-based messaging
  - Reminder system

### 8. **Notes & Communication**
- **Note Modal** (`/components/note-modal/`)
  - Add notes to leads
  - Note history and timeline
  - Rich text formatting
  - Bulk note addition

### 9. **Tags Management**
- **Manage Tags Modal** (`/components/manage-tags-modal/`)
  - Tag leads for organization
  - Custom tag creation
  - Bulk tag management
  - Tag-based filtering

### 10. **Import/Export**
- **Import Leads** (`/components/import-leads-modal/`)
  - CSV/Excel file import
  - Data validation and mapping
  - Duplicate detection
  - Import progress tracking

- **Export Leads** (`/components/export-button/`)
  - Export to CSV/Excel
  - Filtered export options
  - Custom column selection

## Technical Architecture

### Hooks & State Management
- **useLeadsManagement** - Main management hook
- **useGetLeads** - Lead fetching with pagination
- **useCreateLead** - Lead creation
- **useUpdateLead** - Lead updates
- **useDeleteLead** - Lead deletion
- **useUpdateLeadStatus** - Status management
- **Zustand Store** - Global state for filters and selections

### Services & API
- **services-handlers.ts** - API integration functions
- **services-types.ts** - TypeScript interfaces
- **query-keys.ts** - React Query cache keys
- **services-utils.ts** - Data transformation utilities

### Components Architecture
- Modular component structure
- Reusable UI components
- Type-safe props interfaces
- Error boundary implementation
- Loading states and skeletons

### Key Files & Directories
```
/modules/lead-management/
├── components/           # All UI components
│   ├── add-lead-form/
│   ├── add-lead-menu/
│   ├── add-lead-sheet/
│   ├── agent-assignment/
│   ├── agent-assignment-modal/
│   ├── bulk-actions-toolbar/
│   ├── edit-lead-sheet/
│   ├── empty-state-card/
│   ├── export-button/
│   ├── followup-modal/
│   ├── import-leads-modal/
│   ├── lead-filters/
│   ├── lead-sheet/
│   ├── lead-table/
│   ├── leads-management-page/
│   ├── manage-tags-modal/
│   ├── note-modal/
│   ├── request-access-form/
│   ├── row-actions-menu/
│   └── status-popover/
├── hooks/               # Custom React hooks
├── services/           # API services
├── stores/            # State management
├── types/             # TypeScript types
├── utils/             # Utility functions
└── index.ts           # Module exports
```

## Integration Points
- **Dashboard Integration**: `/app/(dashboard)/dashboard/leads/page.tsx`
- **Navigation**: Integrated with sidebar navigation
- **Authentication**: Protected routes and permissions
- **Notifications**: Toast notifications for all operations
- **Analytics**: Lead conversion tracking

## Dependencies
- TanStack Table for table functionality
- TanStack Query for data fetching
- Zustand for state management
- React Hook Form for form handling
- Zod for validation
- Framer Motion for animations
- Sonner for notifications

This feature represents a complete CRM lead management system with modern React patterns, comprehensive CRUD operations, and professional UX/UI design.