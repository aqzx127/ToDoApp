
import { Button, DialogContent, DialogTitle, Modal, ModalDialog, Textarea } from "@mui/joy"
import { useState } from "react"

export default function LoginForm({ open, setOpen }) {

    const [loginAttempt, setLoginAttempt] = useState({ username: '', password: '' })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginAttempt(prevAttempt => ({
            ...prevAttempt,
            [name]: value
        }));
    };

    const handleSubmitLogin = async (event) => {
        console.log("Login Attempt: ", loginAttempt)
        event.preventDefault();
        // await submitTodo(todo);
        // Additional actions post submission, like resetting form
        setLoginAttempt({ name: '', description: '' });
        setOpen(false);
    };

    return (
        <>
        <Modal open={open} onClose={() => {
            setOpen(false);
        }}>
            <ModalDialog>
                <DialogTitle>Login</DialogTitle>
                <DialogContent>
                    <Textarea minRows={2} size="sm" placeholder="Username" name="username" onChange={handleInputChange}/>
                    <Textarea minRows={2} size="sm" placeholder="Password" name="password" onChange={handleInputChange}/>
                    <Button variant="contained" onClick={handleSubmitLogin}>Submit</Button>
                </DialogContent>
            </ModalDialog>
        </Modal>
        </>
    )
}