# ToDo Web App
 - Allows users to securely create an account and login/logout
 - Users are able to create to-do's and edit them
 - Users are able to view their to-do' and mark them as complete in a dashboard like view

# Getting Started
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
    - Postman (API Testing)
    - Github (Version Control)
    - React Big Calendar (React Library)
    - DayJS (React Library)
    - Prettier (VSCode Formatting Extension)
    - Docker (Containerization)

# Project Structure / Flow
 - Frontend
    - App.js is the main parent file that renders the different pages
    - The different pages are composed of components that help make up that page
    - Components/Pages use various react hooks and custom hooks
    - Global Variables via AuthContext

 - Backend
    - Uses Model, Routes, and Controller architecture
    - Database used is mongoDB for document based storage
    - User login, authentication and authorization is done by Auth0
    - Sessions implemented via JWT (JSON Web Tokens)

# App Features
 - CRUD Operations on Todos/Tasks (Create, Read, Update, Delete)
 - Mark Todos/Tasks as Priority