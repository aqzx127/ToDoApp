// Show Logged in user or login button

import Breadcrumbs from '@mui/joy/Breadcrumbs';
import { Link, Avatar, Button, Box } from '@mui/joy';
import '../style.css'
import LoginForm from './LoginForm.jsx';
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react';
import AddTaskForm from './AddTodoForm.jsx';

export default function TopNav() {

    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showAddTodoForm, setShowAddTodoForm] = useState(false);
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

    function handleLogin() {
        console.log("Triggered handleLogin()")
        loginWithRedirect();

        //setShowLoginForm(true);
    }

    function handleLogout() {
        logout({ logoutParams: { returnTo: window.location.origin } })
    }

    function handleAddTodo() {
        setShowAddTodoForm(true);
    }

    const breadcrumbItems = isAuthenticated ? ["Welcome, " + user.name, 'Add Todo', 'Logout'] : ['Login'];

    return (
        <>
        <Breadcrumbs aria-label="breadcrumbs" sx={{
            display: 'flex',
            backgroundColor: '#FBB88E',
            justifyContent: 'right',
        }}>
            {breadcrumbItems.map((item) => (
                <Link key={item} color="black" sx={{display: 'flex', justifyContent: 'right'}}  onClick={() => {
                    if (item == "Login") {
                        handleLogin();
                    } else if (item == "Logout") {
                        handleLogout();
                    } else if (item == "Add Todo") {
                        handleAddTodo();
                    }
                  }}>
                    {item}
                </Link>
            ))}
            {/* <Typography>{loggedInUsername}</Typography> */}
        </Breadcrumbs>
        {showLoginForm && <LoginForm open={showLoginForm} setOpen={setShowLoginForm} />}
        {showAddTodoForm && <AddTaskForm open={showAddTodoForm} setOpen={setShowAddTodoForm} />}
        </>
        
    );
}

// Color Hex Codes for Site Theme
// Background - RGB(9, 20, 38)
// Text - RGB(251, 184, 142)
// Secondary Background - RGB(241, 119, 84)