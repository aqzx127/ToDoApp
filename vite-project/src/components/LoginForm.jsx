
import { Button, DialogContent, DialogTitle, Modal, ModalDialog, Textarea } from "@mui/joy"
import { useState } from "react"

export default function LoginForm({ open, setOpen }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState();

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    function handleFormSubmit() {
        console.log(username);
        console.log(password)
        setOpen(false);
    }

    return (
        <>
        <Modal open={open} onClose={() => {
            setOpen(false);
        }}>
            <ModalDialog>
                <DialogTitle>Login</DialogTitle>
                <DialogContent>
                    <Textarea minRows={2} size="sm" placeholder="Username" onChange={handleUsername}/>
                    <Textarea minRows={2} size="sm" placeholder="Password" onChange={handlePassword}/>
                    <Button variant="contained" onClick={handleFormSubmit}>Submit</Button>
                </DialogContent>
            </ModalDialog>
        </Modal>
        </>
    )
}