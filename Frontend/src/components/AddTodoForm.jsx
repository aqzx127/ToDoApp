// useState for managing local form input fields
// draggable component that is popup
import { Button, DialogContent, DialogTitle, Modal, ModalDialog, Textarea } from "@mui/joy"
import { useState } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import submitTodo from "../hooks/useTasks";

export default function AddTodoForm({ open, setOpen }) {

    const { user } = useAuth0();
    const [todo, setTodo] = useState({ name: '', description: '' });

    const { getAccessTokenSilently } = useAuth0();

    // When a user types something into an input field, handleInputChange is called.
    // The function figures out which piece of state to update based on the name of the input field, 
    // and sets that state to the new value the user has entered. 
    // This approach is useful for handling multiple inputs with just one function.
    const handleInputChange = (e) => {
        const { name, value } = e.target; 
        setTodo(prevTodo => ({
          ...prevTodo,
          [name]: value // Name of Textarea component and its value when typed into (description: "Go for a Walk")
        }));
    };

    const handleSubmitTodo = async (event) => {
        console.log("Todo: ", todo)
        event.preventDefault();

        // Save the users current ID to the todoData
        const todoData = {
            userId: user.sub,
            content: todo
        }

        const token = await getAccessTokenSilently({
            audience: 'https://mytodosapi.com/',
            scope: "write:todos"
        });

        console.log("Full Todo Data: ", todoData);
        console.log(token);
        await submitTodo(todoData, token); // customHook to create POST request to backend
        // Additional actions post submission
        setTodo({ name: '', description: '' }); //Reset the Form
    };
      
    return (
        <>
            <Modal open={open} onClose={() => {
                setOpen(false);
            }}>
                <ModalDialog>
                    <DialogTitle>Add Todo!</DialogTitle>
                    <DialogContent>
                        <Textarea minRows={2} size="sm" placeholder="Name" name="name" value={todo.name} onChange={handleInputChange}/>
                        <Textarea minRows={4} size="md" placeholder="Description" name="description" value={todo.description} onChange={handleInputChange}/>
                        <Button variant="contained" onClick={handleSubmitTodo}>Add</Button>
                    </DialogContent>
                </ModalDialog>
            </Modal>
        </>
    );
}