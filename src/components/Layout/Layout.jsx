import React from "react";

import { ButtonsWrapper } from "../ButtonsWrapper/ButtonsWrapper";
import { TodoModal } from "../TodoModal/TodoModal";
import { TableContainer } from "../../containers/TableContainer";

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

    <TodoModal
      isOpen={isModalOpen}
      setModalOpen={setModalOpen}
      addTodo={addTodo}
      updateTodo={updateTodo}
      selectedTodo={selectedTodo}
      modalMode={modalMode}
    />
  </>
);
