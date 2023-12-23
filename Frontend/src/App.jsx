// Render Home Page {ex: /HomeView }
// This is the Parent App Component
// Will most likely use react router for page rendering
// Need to wrap with correct Auth0 details
// Establish Light Mode and Dark Mode themes

import HomeView from "./pages/HomeView";



export default function App() {


  return (
    <HomeView />
  )
}

// Color Hex Codes for Site Theme
// Background - RGB(9, 20, 38)
// Text - RGB(251, 184, 142)
// Secondary Background - RGB(241, 119, 84)