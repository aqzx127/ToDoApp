// Render the main Home Page content to allow users to view their current tasks (using Components)
// Users are able to view, create, edit, delete and check off tasks here

import Sidebar from '../components/Sidebar'
import TopNav from '../components/TopNav'

export default function HomeView() {


    return (
        <>
        <TopNav />
        <Sidebar />
        </>
    )
}
