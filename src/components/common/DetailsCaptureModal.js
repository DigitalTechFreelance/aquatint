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
            className="bs-modal typ-modal-form"
            open={open}
            // onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
               <div class="modal-body">    
                    <button className="modal-close" onClick={handleClose}>
                        <span className="icon-close"></span>
                    </button>
                    <div className="modal-title">
                        <h3 className="title">Get in touch with us</h3>
                        <p className="sub-title">To know more about our services and packages, please feel free to get in touch with us. Fill in your contact details below.</p>
                    </div>
                    <div className="modal-main">
                        <form className="bs-form">
                            <div className="form-wrap">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="email-id" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="contact no." />
                                </div>
                            </div>
                            <div className="form-action">
                                <button type="button" className="btn btn-default"><span>submit</span></button>
                            </div>
                        </form>
                    </div>
               </div>
            </Fade>
        </Modal>
    </>
  )
}

export default DetailsCaptureModal