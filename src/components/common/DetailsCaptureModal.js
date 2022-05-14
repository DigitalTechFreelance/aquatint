import React, {useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';

function DetailsCaptureModal() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
      <>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
                asd
            </Fade>
        </Modal>
    </>
  )
}

export default DetailsCaptureModal