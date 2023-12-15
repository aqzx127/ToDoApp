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