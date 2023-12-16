// useState for managing local form input fields
// draggable component that is popup
import { Button, DialogContent, DialogTitle, Modal, ModalDialog, Textarea } from "@mui/joy"

export default function AddTaskForm({ open, setOpen }) {



    return (
        <>
            <Modal open={open} onClose={() => {
                setOpen(false);
            }}>
                <ModalDialog>
                    <DialogTitle>Add Todo!</DialogTitle>
                    <DialogContent>
                        <Textarea minRows={2} size="sm" placeholder="Name"/>
                        <Textarea minRows={4} size="md" placeholder="Description"/>
                        <Button variant="contained">Add</Button>
                    </DialogContent>
                </ModalDialog>
            </Modal>
        </>
    );
}