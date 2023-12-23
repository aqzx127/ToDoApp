// Manage Task State: It maintains the overall state of tasks, like the list of tasks, current task details, etc.

// Handle Task Operations: Functions for adding, deleting, updating, and fetching tasks are implemented here.

// Interaction with API Services: If your app has a backend, useTasks would handle API calls to save, retrieve, update, or delete tasks from the server.

// Business Logic: Any logic specific to how tasks are handled, like sorting, filtering, or categorizing tasks, would be part of this hook.

// Return Values: It returns the tasks' state and the functions to manipulate them, which can be used by any component that needs to interact with tasks.

const submitTodo = async (todoData, token) => {
  try {
    const response = await fetch('http://localhost:8080/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Include the JWT token here
      },
      body: JSON.stringify(todoData)
    });
    console.log(token);
    return response.json();
  } catch (error) {
    console.error("Error submitting todo:", error);
  }
};



export default submitTodo;