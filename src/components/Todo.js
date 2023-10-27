import React, { useState } from "react";
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
} from "@material-ui/core";

export const Todo = () => {
  const [todoInput, setTodoInput] = useState("");
  const [authorInput, setAuthorInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [isCompleted, setIsCompleted] = useState("yes");

  return (
    <div >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{marginLeft: 20}}>
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
          const newTodoState = [...todos, todo];
          setTodos(newTodoState);
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
                  Todo: {todo.todo[0].toUpperCase() + todo.todo.slice(1)}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  Author: {todo.author[0].toUpperCase() + todo.author.slice(1)}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                  Completed: {String(todo.completed)}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Delete</Button>
                <Button size="small">Update</Button>
              </CardActions>
            </Card>
          );
        })
      )}
      </Grid>
      </Grid>
      </Grid>
    </div>
  );
};

export default Todo;
