# Personal Task Tracker

A modern, responsive task management application built with React.js. This app helps you organize, track, and manage your daily tasks with an intuitive interface and powerful features.

## 📖 Description

Personal Task Tracker is a comprehensive task management solution that allows users to create, edit, delete, and organize their tasks efficiently. With features like priority levels, categories, due dates, and a dark mode toggle, it provides everything you need to stay organized and productive.

## 🚀 Features

* **User Authentication** - Simple username-based login system
* **Task Management** - Create, edit, delete, and mark tasks as complete
* **Priority Levels** - Organize tasks by Low, Medium, and High priority
* **Categories** - Classify tasks into Work, Personal, Shopping, Health, and Other
* **Due Dates** - Set deadlines with visual indicators for overdue tasks
* **Search & Filter** - Find tasks quickly with search and filter options
* **Dark Mode** - Toggle between light and dark themes
* **Data Persistence** - All data saved locally using localStorage
* **Responsive Design** - Works seamlessly on desktop and mobile devices
* **Visual Feedback** - Color-coded priorities and status indicators
* **Sample Data** - Pre-loaded tasks for new users to explore features

## 🛠️ Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/PraTham-Patill/task-tracker.git
   cd task-tracker
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🧰 Technologies Used

* **React.js** - Frontend framework for building user interfaces
* **JavaScript (ES6+)** - Modern JavaScript features and syntax
* **CSS3** - Styling with custom properties and animations
* **HTML5** - Semantic markup structure
* **localStorage** - Client-side data persistence
* **React Hooks** - State management and side effects

## 📱 Usage

1. **Login** - Enter any username to access your personal dashboard
2. **Add Tasks** - Click "Add New Task" to create tasks with title, description, priority, category, and due date
3. **Manage Tasks** - Edit tasks inline, mark as complete, or delete with confirmation
4. **Filter Tasks** - Use filter tabs to view All, Pending, or Completed tasks
5. **Search** - Use the search bar to find specific tasks by title
6. **Dark Mode** - Toggle between light and dark themes using the theme button

## 🔗 Live Demo

🌐 **[View Live Demo](https://taskk-trackerr.vercel.app/)**

## 🖼️ Screenshots

### Dark Mode Dashboard

![Dark Mode Dashboard](Dark.png)

### Light Mode with Task Form

![Light Mode with Task Form](Light.png)

## 🎨 Features Showcase

* **Intuitive Interface** - Clean, modern design with smooth interactions
* **Visual Feedback** - Color-coded priorities and status indicators
* **Mobile Responsive** - Optimized for all screen sizes
* **Accessibility** - Proper focus management and keyboard navigation
* **Performance** - Efficient rendering and state management

## 🔧 Project Structure

```
src/
├── components/
│   ├── Login.js              # User authentication component
│   ├── TaskDashboard.js      # Main dashboard container
│   ├── TaskForm.js           # Task creation/editing form
│   ├── TaskItem.js           # Individual task display
│   ├── TaskList.js           # Task list container
│   └── TaskFilter.js         # Filter controls
├── utils/
│   ├── localStorage.js       # Local storage utilities
│   └── sampleData.js         # Sample tasks for demo
├── styles/
│   └── App.css              # Main stylesheet
├── App.js                   # Root component
└── index.js                 # Application entry point
```

## 🌟 Key Highlights

* **Component-Based Architecture** - Well-organized, reusable React components
* **State Management** - Efficient use of React hooks (useState, useEffect)
* **Error Handling** - Proper validation and user feedback
* **Code Quality** - Clean, readable, and maintainable code
* **User Experience** - Intuitive design with helpful animations
* **Data Persistence** - Reliable localStorage implementation

## 🚀 Deployment

### Deploy to Vercel

1. **Install Vercel CLI**

   ```bash
   npm install -g vercel
   ```

2. **Build the project**

   ```bash
   npm run build
   ```

3. **Deploy**

   ```bash
   vercel
   ```

## 💡 Technical Implementation

* **React Hooks** for state management and lifecycle methods
* **CSS Grid & Flexbox** for responsive layouts
* **CSS Custom Properties** for theme management
* **Local Storage API** for data persistence
* **Event Handling** for user interactions
* **Form Validation** with real-time feedback

---
