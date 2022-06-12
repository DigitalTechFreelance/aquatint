import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { useFormik } from 'formik';
import axios from 'axios';

function DetailsCaptureModal(props) {

    // const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    const submitToLead = (values) => {
        let data = {
            "Name": values.name,
            "Email": values.emailId,
            "Phone No": values.contactNo
        }
        axios.post(
            'https://sheet.best/api/sheets/1559c773-9061-4fad-93aa-88a979220541',
            data
        )
            .then(function (response) {
                if (response.status === 200) {
                    setFormSuccess(true)
                    formikLead.resetForm()
                }
            })
            .catch(function (error) {
                console.log("error", error)
            });

    }

    const formikLead = useFormik({
        initialValues: {
            name: '',
            emailId: '',
            contactNo: ''
        },
        onSubmit: (values, { resetForm }) => {
            submitToLead(values)
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
    const [formSuccess, setFormSuccess] = React.useState(false);

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
                                {formSuccess ? (
                                    <span className="success success-msg">Succesfully Sent!!</span>
                                ) : null}
                            </form>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </>
    )
}

export default DetailsCaptureModal