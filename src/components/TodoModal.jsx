import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import moment from "moment";

import { Box, FormLabel, Modal, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import { CustomButton } from "./CustomButton";
import { MODAL_MODE } from "../App";

const styles = {
  modalStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: 600,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
  },
  formStyle: {
    display: "flex",
    flexFlow: "wrap column",
  },
  fieldStyle: {
    display: "flex",
    flexFlow: "wrap row",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: "15px",
  },
  inputStyle: {
    marginRight: "15px",
    width: "50%",
  },
  buttonWrapper: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    flex: "1 0 auto",
  },
};

export const TodoModal = ({
  isOpen,
  setModalOpen,
  addTodo,
  updateTodo,
  selectedTodo,
  modalMode,
}) => {
  const [dateValue, setDateValue] = useState();
  const { register, handleSubmit, reset } = useForm();

  const formSubmitHandler = (formData) => {
    if (modalMode === MODAL_MODE.EDIT) {
      updateTodo(selectedTodo, { ...formData, deadline: dateValue });
    } else {
      addTodo({ ...formData, deadline: dateValue });
    }
    setModalOpen(false);
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
    <Modal
      open={isOpen}
      onClose={() => setModalOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles.modalStyle}>
        <form
          style={styles.formStyle}
          onSubmit={handleSubmit(formSubmitHandler)}
        >
          <div style={styles.fieldStyle}>
            <TextField
              id="title"
              style={styles.inputStyle}
              type="text"
              variant="outlined"
              required
              fullWidth
              {...register("title")}
            />
            <FormLabel htmlFor="title">Title</FormLabel>
          </div>
          <div style={styles.fieldStyle}>
            <TextField
              id="description"
              style={styles.inputStyle}
              minRows={4}
              multiline
              required
              {...register("description")}
            />
            <FormLabel htmlFor="description">Description</FormLabel>
          </div>
          <div style={styles.fieldStyle}>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker
                id="deadline"
                value={dateValue}
                {...register("deadline")}
                onChange={(newValue) => setDateValue(newValue.format("L"))}
                renderInput={(params) => (
                  <TextField required style={styles.inputStyle} {...params} />
                )}
              />
            </LocalizationProvider>
            <FormLabel htmlFor="deadline">Deadline</FormLabel>
          </div>
          <div style={styles.buttonWrapper}>
            <CustomButton text="Save" type="submit" />
            <CustomButton
              text="Cancel"
              clickHandler={() => setModalOpen(false)}
            />
          </div>
        </form>
      </Box>
    </Modal>
  );
};
