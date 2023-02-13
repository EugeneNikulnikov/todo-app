import React from "react";

import { ButtonsWrapper } from "../ButtonsWrapper/ButtonsWrapper";
import { TableContainer } from "../../containers/TableContainer";
import { TodoModalContainer } from "../../containers/TodoModalContainer";

export const Layout = ({
  todos,
  selectedTodo,
  setSelectedTodo,
  removeTodo,
  openCreateModal,
  openEditModal,
  isModalOpen,
  setModalOpen,
  addTodo,
  updateTodo,
  modalMode,
}) => (
  <>
    <TableContainer todos={todos} selectedTodo={selectedTodo} setSelectedTodo={setSelectedTodo} />

    <ButtonsWrapper createTodo={openCreateModal} editTodo={openEditModal} removeTodo={() => removeTodo(selectedTodo)} />

    <TodoModalContainer
      isOpen={isModalOpen}
      setModalOpen={setModalOpen}
      addTodo={addTodo}
      updateTodo={updateTodo}
      selectedTodo={selectedTodo}
      modalMode={modalMode}
    />
  </>
);
