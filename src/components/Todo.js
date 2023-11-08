import React,{ useState } from "react";
import { useDispatch } from "react-redux";
import{ useTodo} from "./useTodo";
import {addTodo,deleteTodo,updateTodo} from '../reducers/todosSlice';



import {
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CardActions,
  Radio,
  RadioGroup,
  FormControlLabel,
  Box,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";

export const Todo = () => {
  const dispatch = useDispatch();
const  {
  todoInput,
  setTodoInput,
  authorInput,
  setAuthorInput,
  todos,
  isCompleted,
  setIsCompleted,
} = useTodo();

// State to manage the update dialog/form
const [openUpdateDialog, setOpenUpdateDialog] = useState(false);
const [updatedTodo, setUpdatedTodo] = useState({
  todo: "",
  author: "",
  completed: "no",
});

// Function to open the update dialog and pre-fill with todo values
const openUpdateForm = (todo) => {
  setOpenUpdateDialog(true);
  setUpdatedTodo(todo);
};

// Function to handle updating a todo
const handleUpdateTodo = () => {
  dispatch(updateTodo({ id: updatedTodo.id, updatedTodo }));
  setOpenUpdateDialog(false);
};

 // Function to handle todo deletion
 const handleDeleteTodo = (todoId) => {
  dispatch(deleteTodo(todoId));
};

  return (
    <div >
<Grid container  style={{ marginLeft: 20 }}>
        <Grid item xs={4} >
      <Box >
        <h4>What is the todo name?</h4>
        <TextField
          variant="filled"
          id="filled-basic"
          label="Filled"
          value={todoInput}
          onChange={(event) => {
            setTodoInput(event.target.value);
          }}
        />

        <h4>Who created this todo?</h4>
        <TextField
          variant="filled"
          id="filled-basic"
          label="Filled"
          value={authorInput}
          onChange={(event) => {
            setAuthorInput(event.target.value);
          }}
        />
      </Box>
      <h4>Is Todo completed?</h4>
      <RadioGroup
        value={isCompleted}
        onChange={(event) => setIsCompleted(event.target.value)}
      >
        <FormControlLabel value="yes" control={<Radio />} label="yes" />
        <FormControlLabel value="no" control={<Radio />} label="no" />
      </RadioGroup>
      <Button
        variant="contained"
        color="primary"
        style={{  marginTop: 5 }}
        onClick={() => {
          const todo = {
            todo: todoInput,
            author: authorInput,
            completed: isCompleted === "yes",
          };
          dispatch(addTodo(todo));
          setTodoInput("");
          setAuthorInput("");
        }}
      >
        Add Todo
      </Button>
      </Grid>
      <Grid item xs={8}>
<Grid container spacing={3} >
      {todos.length === 0 ? (
        <h4>There is no todos yet.</h4>
      ) : (
        todos.map((todo, index) => {
          return (
            <Card
              key={index}
              sx={{ widtWidth: 345 }}
              style={{ backgroundColor: "white", marginBottom: 5 }}
            >
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  Todo: {todo.todo[0].toUpperCase()+ todo.todo.slice(1)}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  {/* Author: {todo.author[0].toUpperCase() + todo.author.slice(1)} */}
                  Author: {todo.author ? todo.author[0].toUpperCase() + todo.author.slice(1) : ''}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  Completed: {String(todo.completed)}
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                size="small"
                onClick={() => handleDeleteTodo(todo.id)} // Call handleDeleteTodo with the todo's id
                >Delete</Button>
                <Button 
                size="small"
                onClick={() => openUpdateForm(todo)}
                >Update</Button>
              </CardActions>
            </Card>
          );
        })
      )}
      </Grid>
      </Grid>
      </Grid>
         {/* Add a dialog or form for updating todos */}
         <Dialog open={openUpdateDialog} onClose={() => setOpenUpdateDialog(false)}>
  <DialogTitle>Update Todo</DialogTitle>
  <DialogContent>
    <TextField
      label="Todo"
      value={updatedTodo.todo}
      onChange={(e) =>
        setUpdatedTodo({ ...updatedTodo, todo: e.target.value })
      }
    />
    <TextField
      label="Author"
      value={updatedTodo.author}
      onChange={(e) =>
        setUpdatedTodo({ ...updatedTodo, author: e.target.value })
      }
    />
    <RadioGroup
      value={updatedTodo.completed}
      onChange={(e) =>
        setUpdatedTodo({ ...updatedTodo, completed: e.target.value })
      }
    >
      <FormControlLabel value="yes" control={<Radio />} label="Yes" />
      <FormControlLabel value="no" control={<Radio />} label="No" />
    </RadioGroup>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleUpdateTodo} color="primary">
      Save
    </Button>
    <Button onClick={() => setOpenUpdateDialog(false)} color="primary">
      Cancel
    </Button>
  </DialogActions>
</Dialog>

    </div>
  );
};

export default Todo;
