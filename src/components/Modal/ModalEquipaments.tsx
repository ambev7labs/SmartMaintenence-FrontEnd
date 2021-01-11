import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const ModalEquipaments = (props: any) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.close}
      disableBackdropClick={true}
      aria-labelledby="simple-dialog-title"
    >
      <DialogTitle id="customized-dialog-title">
        Modal title
        <IconButton aria-label="close" onClick={props.close}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
    </Dialog>
  );
};

export default ModalEquipaments;
