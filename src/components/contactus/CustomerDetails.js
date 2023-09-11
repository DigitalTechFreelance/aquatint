import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import Canvas from "react-numeric-captcha";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import successImg from '../../assets/images/success.gif';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
};

function CustomerDetails() {
    const [captchaSuccess, setCaptchaSuccess] = React.useState(false);
    const [captchaError, setCaptchaError] = React.useState(null);
    const [formSuccess, setFormSuccess] = React.useState(false);

    // React.useEffect(() => {
    //     window.scrollTo(0, 0);
    //     setTimeout(() => {
    //         setLeadFormOpen(true);
    //     }, 15000)

    // }, [])

    React.useEffect(() => {
        setTimeout(() => {
            setFormSuccess(false);
        }, 10000);
    },[formSuccess]);

    // const [leadFormOpen, setLeadFormOpen] = useState(false);
    // const handleLeadFormClose = () => setLeadFormOpen(false);

    const submitToLead = (values) => {
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
        let data = {
            "Date": date,
            "Name": values.name,
            "Email": values.emailId,
            "Phone No": values.contactNo,
            "Vehicle Name": values.vehicleName,
            "Message": values.message
        }
        
        if (captchaSuccess) {
            axios.post(
                'https://sheet.best/api/sheets/ca6fd7bd-056d-4c08-b61d-8a71e27f3a37',
                data
            )
                .then(function (response) {
                    if (response.status === 200) {
                        setFormSuccess(true)
                        document.getElementsByClassName('rnc-input')[0].value= ''
                        formikLead.resetForm()
                    }
                })
                .catch(function (error) {
                    // console.log("error", error)
                });
        }
    }

    const formikLead = useFormik({
        initialValues: {
            name: '',
            emailId: '',
            contactNo: '',
            vehicleName: '',
            message: ''
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
            if (!values.vehicleName) {
                errors.vehicleName = 'Vehicle Name is required';
            }
            if (!values.message) {
                errors.message = 'Message is required';
            }


            return errors;
        }
    });

  return (
    <>
    <section>
        <div className="bs-section">
            <div className="sec-head">
                <h2 className="sec-title">CUSTOMER DETAILS</h2>
            </div>
            <div className="sec-cont">
                <div className="sec-cont">
                    <form className="bs-form" onSubmit={formikLead.handleSubmit}>
                        <div className="form-wrap">
                            <div className={`form-group ${formikLead.touched.name && formikLead.errors.name ? "error" : ""}`}>
                                <input
                                    type="text"
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
                                <input
                                    type="text"
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
                            <div className={`form-group ${formikLead.touched.vehicleName && formikLead.errors.vehicleName ? "error" : ""}`}>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="vehicle"
                                    name="vehicleName"
                                    id="vehicleName"
                                    maxLength={10}
                                    value={formikLead.values.vehicleName}
                                    onChange={formikLead.handleChange}
                                    onBlur={formikLead.handleBlur}
                                />
                                {formikLead.touched.vehicleName && formikLead.errors.vehicleName ? (
                                    <span className="error">{formikLead.errors.vehicleName}</span>
                                ) : null}
                            </div>
                            <div className={`form-group typ-2col ${captchaError!==null && captchaError ? "error" : ""}`}>
                                <Canvas
                                    onChange={(e) => {
                                        if (e === true) {
                                            setCaptchaSuccess(true)
                                            setCaptchaError(null)
                                        }else {
                                            setCaptchaError("Invalid")
                                        }
                                    }}
                                    placeholder="Verifsy"
                                />
                                {captchaError !== null && captchaError ? (
                                    <span className="error">{captchaError}</span>
                                ) : null}
                            </div>
                            <div className={`form-group typ-full ${formikLead.touched.message && formikLead.errors.message ? "error" : ""}`}>
                                <textarea
                                    rows="8"
                                    cols="50"
                                    className="form-control"
                                    placeholder="message"
                                    name="message"
                                    id="message"
                                    maxLength={250}
                                    value={formikLead.values.message}
                                    onChange={formikLead.handleChange}
                                    onBlur={formikLead.handleBlur} >
                                </textarea>
                                {formikLead.touched.message && formikLead.errors.message ? (
                                    <span className="error">{formikLead.errors.message}</span>
                                ) : null}
                            </div>
                        </div>
                        <div className="form-action">
                            <button type="submit" name="btnSubmit" className={`btn btn-default`}><span>submit</span></button>
                            {/* <button type="submit" disabled={!captchaSuccess} name="btnSubmit" className={`btn btn-default ${!captchaSuccess?'btn-disabled': ''}`}><span>submit</span></button> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
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

export default CustomerDetails