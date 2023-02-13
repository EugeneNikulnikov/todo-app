import React from "react";

import { Box, FormLabel, Modal, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import { CustomButton } from "../CustomButton/CustomButton";
import { todoModalStyles } from "./TodoModal.styles";

export const TodoModal = ({
  isOpen,
  dateValue,
  setDateValue,
  closeModal,

  handleSubmit,
  formSubmitHandler,
  register,
}) => (
  <Modal
    open={isOpen}
    onClose={closeModal}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={todoModalStyles.modalStyle}>
      <form style={todoModalStyles.formStyle} onSubmit={handleSubmit(formSubmitHandler)}>
        <div style={todoModalStyles.fieldStyle}>
          <TextField
            id="title"
            style={todoModalStyles.inputStyle}
            type="text"
            variant="outlined"
            required
            fullWidth
            {...register("title")}
          />

          <FormLabel htmlFor="title">Title</FormLabel>
        </div>

        <div style={todoModalStyles.fieldStyle}>
          <TextField
            id="description"
            style={todoModalStyles.inputStyle}
            minRows={4}
            multiline
            required
            {...register("description")}
          />

          <FormLabel htmlFor="description">Description</FormLabel>
        </div>

        <div style={todoModalStyles.fieldStyle}>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              id="deadline"
              value={dateValue}
              {...register("deadline")}
              onChange={(newValue) => setDateValue(newValue.format("L"))}
              renderInput={(params) => <TextField required style={todoModalStyles.inputStyle} {...params} />}
            />
          </LocalizationProvider>

          <FormLabel htmlFor="deadline">Deadline</FormLabel>
        </div>

        <div style={todoModalStyles.buttonWrapper}>
          <CustomButton text="Save" type="submit" />
          <CustomButton text="Cancel" clickHandler={closeModal} />
        </div>
      </form>
    </Box>
  </Modal>
);
