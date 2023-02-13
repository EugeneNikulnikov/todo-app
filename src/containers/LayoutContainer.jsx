import React, { useState } from "react";

import { MODAL_MODE } from "../constants";
import { Layout } from "../components/Layout/Layout";
import { createTodoData } from "../halpers/createTodoData";

const rows = [createTodoData("Test title", "description", "10/10/2022")];

export function LayoutContainer() {
  const [todos, setTodos] = useState(rows);
  const [selectedTodo, setSelectedTodo] = useState();
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState();

  const addTodo = (todo) => {
    if (!todo) {
      return;
    }

    const newTodo = createTodoData(todo.title, todo.description, todo.deadline);
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
    setTodos((prev) => prev.map((item) => (item.id === todo.id ? newTodo : item)));
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
    <Layout
      todos={todos}
      selectedTodo={selectedTodo}
      setSelectedTodo={setSelectedTodo}
      removeTodo={removeTodo}
      openCreateModal={openCreateModal}
      openEditModal={openEditModal}
      isModalOpen={isModalOpen}
      setModalOpen={setModalOpen}
      addTodo={addTodo}
      updateTodo={updateTodo}
      modalMode={modalMode}
    />
  );
}
