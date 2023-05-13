/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { useFormik } from 'formik';
import axios from 'axios';
import Box from '@mui/material/Box';
import successImg from '../../assets/images/success.gif';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
};
function DetailsCaptureModal(props) {
    const [formSuccess, setFormSuccess] = React.useState(false);
    React.useEffect(() => {
        setTimeout(() => {
            setFormSuccess(false);
        }, 6000);
    }, [formSuccess]);

    const submitToLead = (values) => {
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

        let data = {
            "Date": date,
            "Name": values.name,
            "Email": values.emailId,
            "Phone No": values.contactNo
        }
        axios.post(
            'https://sheet.best/api/sheets/9d05fb91-8418-4ed3-97dc-4f71c489608f',
            data
        )
            .then(function (response) {
                if (response.status === 200) {
                    setFormSuccess(true)
                    formikLead.resetForm()
                }
            })
            .catch(function (error) {
                // console.log("error", error)
            });

    }

    const formikLead = useFormik({
        initialValues: {
            name: '',
            emailId: '',
            contactNo: ''
        },
        onSubmit: (values, { resetForm }) => {
            submitToLead(values);
            props.handleClose()
        },
        validate: values => {
            const errors = {};

            if (!values.name) {
                errors.name = 'Name is required';
            }

            if (!values.emailId) {
                errors.emailId = 'Email is required';
            } else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.emailId)) {
                errors.emailId = 'Please enter valid email address.';
            }

            if (!values.contactNo) {
                errors.contactNo = 'Mobile no required';
            } else if (!/^([0-9]){10}?$/.test(values.contactNo)) {
                errors.contactNo = 'Please enter valid 10 digit mobile no.';
            }


            return errors;
        }
    });

    return (
        <>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className="bs-modal typ-modal-form"
                open={props.leadFormOpen}
                // onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.leadFormOpen}>
                    <div className="modal-body">
                        <button className="modal-close" onClick={props.handleClose}>
                            <span className="icon-close"></span>
                        </button>
                        <div className="modal-title">
                            <h3 className="title">Get in touch with us</h3>
                            <p className="sub-title">To know more about our services and packages, please feel free to get in touch with us. Fill in your contact details below.</p>
                        </div>
                        <div className="modal-main">
                            <form className="bs-form" onSubmit={formikLead.handleSubmit}>
                                <div className="form-wrap">
                                    <div className={`form-group ${formikLead.touched.name && formikLead.errors.name ? "error" : ""}`}>
                                        <input type="text"
                                            className="form-control"
                                            placeholder="name"
                                            name="name"
                                            id="name"
                                            value={formikLead.values.name}
                                            onChange={formikLead.handleChange}
                                            onBlur={formikLead.handleBlur}
                                        />
                                        {formikLead.touched.name && formikLead.errors.name ? (
                                            <span className="error">{formikLead.errors.name}</span>
                                        ) : null}
                                    </div>
                                    <div className={`form-group ${formikLead.touched.emailId && formikLead.errors.emailId ? "error" : ""}`}>
                                        <input type="text"
                                            className="form-control"
                                            placeholder="email-id"
                                            name="emailId"
                                            id="emailId"
                                            value={formikLead.values.emailId}
                                            onChange={formikLead.handleChange}
                                            onBlur={formikLead.handleBlur}
                                        />
                                        {formikLead.touched.emailId && formikLead.errors.emailId ? (
                                            <span className="error">{formikLead.errors.emailId}</span>
                                        ) : null}
                                    </div>
                                    <div className={`form-group ${formikLead.touched.contactNo && formikLead.errors.contactNo ? "error" : ""}`}>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            placeholder="contact no."
                                            name="contactNo"
                                            id="contactNo"
                                            maxLength={10}
                                            value={formikLead.values.contactNo}
                                            onChange={formikLead.handleChange}
                                            onBlur={formikLead.handleBlur}
                                        />
                                        {formikLead.touched.contactNo && formikLead.errors.contactNo ? (
                                            <span className="error">{formikLead.errors.contactNo}</span>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="form-action">
                                    <button type="submit" name="btnSubmit" className="btn btn-default"><span>submit</span></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Fade>
            </Modal>
            <Modal
                open={formSuccess}
                // onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="bs-message-card">
                    <div className="icon-wrap">
                        <span className="icon">
                            <img src={successImg} alt="success" title="success" />
                        </span>
                    </div>
                    <div className="content-wrap">
                        <p className="text">Thank you for contecting Us!!!</p>
                        <p className="text text-sm">Our team will reach you shortly</p>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default DetailsCaptureModal