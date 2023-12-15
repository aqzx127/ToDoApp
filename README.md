# ToDo/Study Web App
 - Allows users to securely create an account and login/logout.
 - Users are able to create, edit, and delete todos
 - Users are able to view their todos and mark them as complete in a dashboard like view

# Getting Started
 - git clone https://github.com/aqzx127/ToDoApp
 - cd "vite-project"
 - npm install
 - npm run dev

# Github
 - https://github.com/aqzx127/ToDoApp

# Tech Stack
 - Frontend
    - Vite (Bundler)
    - React
    - Npm
    - Material UI or Chakra UI
 - Backend
    - Express
    - NodeJS (JS Runtime Engine)
    - MongoDB (Database)
    - Auth0 (Authentication/Authorization)

# Utilities Used
    - Visual Studio Code (Development IDE)
    - Postman (API Testing)
    - Github (Version Control)
    - DayJS (React Library)
    - Prettier (VSCode Formatting Extension)
    - Docker (Containerization)

# Project Structure / Flow
 - Frontend
    - App.js is the main parent file that renders the different pages (ex: HomeView)
    - The different pages are composed of components that help make up that page (ex: Sidebar, TopNav)
    - Components/Pages use various react hooks and custom hooks (ex: useTasks)
    - Global Variables via AuthContext

 - Backend
    - Uses Model, Routes, and Controller architecture
    - Database used is mongoDB for document based storage (Non-Relational Database)
    - User login, authentication and authorization is done by Auth0
    - Sessions implemented via JWT (JSON Web Tokens)

# App Features
 - CRUD Operations on Todos/Tasks (Create, Read, Update, Delete)
 - Specify Priority on Todos
 - Mark Todos/Tasks as Complete
 - Togglable Light and Dark Themes
 - Secure Storage of User Data (User Profile, User Tasks)
 - Session Persistance
 - Basic Timer with Pomodoro Option

