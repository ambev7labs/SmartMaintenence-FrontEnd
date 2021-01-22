import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import EquipsGraphs from "../Modal/EquipsGraphs";
import UserData from "../../contexts/UserData";
import { Container} from "@material-ui/core";

const ModalEquipaments = (props: any) => {
  const userData = React.useContext(UserData);
  return (
  <Container>  
    <Dialog
      open={props.open}
      onClose={props.close}
      disableBackdropClick={true}
      aria-labelledby="modal-equipaments"
      fullScreen={true}
      scroll={'paper'}
    >
      <DialogTitle id="modal-equipaments" style={{display:'flex', justifyContent:'center'}}>
        <span style={{textAlignLast:'center'}}> Máquinas {userData.user.field}</span>
          <IconButton aria-label="close" size='medium' onClick={props.close}>
            <CloseIcon />
          </IconButton>
      </DialogTitle>
      <EquipsGraphs data={props.data}/>
    </Dialog>
    </Container>
  );
};

export default ModalEquipaments;
