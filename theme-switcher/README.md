# FocusSpace – Theme Switcher

A responsive dashboard built with React and Tailwind CSS, featuring a light and dark mode toggle.

## Overview

FocusSpace is a dashboard interface designed to help users visualize their workspace, track project progress, and view recent activities. It includes a theme switcher that allows users to switch between light and dark appearances.

## Features

- **Light and Dark Mode:** Switch between two themes using the navbar toggle.
- **Responsive Layout:** Dashboard layout adapts to different screen sizes.
- **Sidebar Navigation:** Navigation links for dashboard, tasks, calendar, messages, and settings.
- **Dashboard Overview:** Displays project statistics and productivity information.
- **Recent Projects:** Shows projects and their progress.
- **Recent Activities:** Displays recent workspace activities.
- **Reusable Components:** Interface organized into separate React components.

## Technologies Used

- React
- JavaScript (JSX)
- Tailwind CSS
- Vite

## Project Structure

```text
theme-switcher/
├── public/
├── src/
│   ├── components/
│   │   ├── Activity.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Navbar.jsx
│   │   └── Sidebar.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Melala-9716/react-projects.git
```

### 2. Navigate to the project folder

```bash
cd react-projects/theme-switcher
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## What I Practiced

Through this project, I practiced:

- React `useState` for managing theme state.
- Props for sharing state between parent and child components.
- Event handling with `onClick`.
- Conditional rendering and conditional CSS classes.
- Tailwind CSS utility classes.
- Component-based architecture.
- Responsive dashboard layouts.

## Author

**Melala Muleta**

Software Engineering Student | Frontend Developer

---

Built as part of my React learning journey.