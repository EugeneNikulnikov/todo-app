import React, { useState } from "react";

import TodoTable from "./components/Table";
import { ButtonsWrapper } from "./components/ButtonsWrapper";
import { TodoModal } from "./components/TodoModal";
import "./App.css";

export const MODAL_MODE = {
  CREATE: "create",
  EDIT: "edit",
};

function createData(title, description, deadline) {
  return {
    id:
      Math.floor(Math.random() * 10000) +
      title.toLowerCase().replaceAll(" ", "_"),
    title,
    description,
    deadline,
  };
}

const rows = [createData("Test title", "description", "10/10/2022")];

function App() {
  const [todos, setTodos] = useState(rows);
  const [selectedTodo, setSelectedTodo] = useState();
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("create");

  const addTodo = (todo) => {
    if (!todo) {
      return;
    }

    const newTodo = createData(todo.title, todo.description, todo.deadline);
    const newTodos = [newTodo, ...todos];

    setTodos(newTodos);
  };

  const removeTodo = (todo) => {
    if (!todo) {
      return;
    }

    const removedArr = [...todos].filter((item) => item.id !== todo.id);
    setTodos(removedArr);
  };

  const updateTodo = (todo, newTodo) => {
    if (!todo) {
      return;
    }

    setSelectedTodo(newTodo);
    setTodos((prev) =>
      prev.map((item) => (item.id === todo.id ? newTodo : item))
    );
  };

  const openEditModal = () => {
    if (!selectedTodo) {
      return;
    }
    setModalMode(MODAL_MODE.EDIT);
    setModalOpen(true);
  };

  const openCreateModal = () => {
    setModalMode(MODAL_MODE.CREATE);
    setModalOpen(true);
  };

  return (
    <div className="App">
      <TodoTable
        todos={todos}
        selectedTodo={selectedTodo}
        setSelectedTodo={setSelectedTodo}
      />
      <ButtonsWrapper
        createTodo={openCreateModal}
        editTodo={openEditModal}
        removeTodo={() => removeTodo(selectedTodo)}
      />
      <TodoModal
        isOpen={isModalOpen}
        setModalOpen={setModalOpen}
        addTodo={addTodo}
        updateTodo={updateTodo}
        selectedTodo={selectedTodo}
        modalMode={modalMode}
      />
    </div>
  );
}

export default App;
