import React, { useState } from "react";
import { Container, Row, Col, Form, Button, ListGroup, InputGroup } from "react-bootstrap";
import "./App.css"; // Import custom CSS for animations and additional styling

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // Add a task to the list
  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };
  document.getElementById("blip").addEventListener("change", function() {
    var paragraph = document.getElementById("jj");
    if (this.checked) {
      paragraph.classList.add("strike");
    } else {
      paragraph.classList.remove("strike");
    }
  });

  // Delete a task from the list
  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // Toggle the completion status of a task
  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <Container fluid className="app-container">
      <Row className="justify-content-center align-items-center min-vh-100">
        <Col md={6} lg={4} className="text-center">
          <h1 className="app-title mb-4">To-Do List</h1>
          <InputGroup className="mb-4">
            <Form.Control
              type="text"
              placeholder="Enter a task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="task-input"
            />
            <Button variant="primary" onClick={handleAddTask} className="add-button">
              Add
            </Button>
          </InputGroup>
          {tasks.length > 0 ? (
            <ListGroup className="task-list hh">
              {tasks.map((task, index) => (
                <ListGroup.Item
                  key={index}
                  className={`task-item ${task.completed ? "completed" : ""}`}
                >
                  <div className="d-flex align-items-center gg">
                    <Form.Check
                      type="checkbox"
                      id="blip"
                      className="me-3"
                      checked={task.completed}
                      onChange={() => toggleTaskCompletion(index)}
                    />
                    <span id="jj">{task.text}</span>
                  </div>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => handleDeleteTask(index)}
                    className="delete-button"
                  >
                    Delete
                  </Button>
                  
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <p className="empty-state">No tasks yet. Start adding some!</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
