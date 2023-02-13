import React, { useCallback, useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import moment from "moment";

import { MODAL_MODE } from "../constants";
import { TodoModal } from "../components/TodoModal/TodoModal";

export const TodoModalContainer = ({ isOpen, setModalOpen, addTodo, updateTodo, selectedTodo, modalMode }) => {
  const [dateValue, setDateValue] = useState();
  const { reset, handleSubmit, register } = useForm();

  const closeModal = useCallback(() => setModalOpen(false), []);

  const formSubmitHandler = (formData) => {
    if (modalMode === MODAL_MODE.EDIT) {
      updateTodo(selectedTodo, { ...formData, deadline: dateValue });
    } else {
      addTodo({ ...formData, deadline: dateValue });
    }
    closeModal();
  };

  useEffect(() => {
    if (selectedTodo && modalMode === MODAL_MODE.EDIT) {
      reset(selectedTodo);
      setDateValue(selectedTodo.deadline);
    }
    if (modalMode === MODAL_MODE.CREATE) {
      reset({});
      setDateValue(moment().format("L"));
    }
  }, [modalMode, reset, selectedTodo, isOpen]);

  return (
    <TodoModal
      isOpen={isOpen}
      dateValue={dateValue}
      setDateValue={setDateValue}
      closeModal={closeModal}
      formSubmitHandler={formSubmitHandler}
      handleSubmit={handleSubmit}
      register={register}
    />
  );
};
