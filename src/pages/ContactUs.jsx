import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import DetailsCaptureModal from '../components/common/DetailsCaptureModal';
import { useFormik } from 'formik';
import axios from 'axios';
import Canvas from "react-numeric-captcha";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
};

function ContactUs() {
    const [captchaSuccess, setCaptchaSuccess] = React.useState(false);

    React.useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
            setLeadFormOpen(true);
        }, 2000)
    }, [])

    const [leadFormOpen, setLeadFormOpen] = useState(false);
    const handleLeadFormClose = () => setLeadFormOpen(false);

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
                    console.log("response", response)
                    if (response.status === 200) {
                        setFormSuccess(true)
                        formikLead.resetForm()
                    }
                })
                .catch(function (error) {
                    console.log("error", error)
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
    const [formSuccess, setFormSuccess] = React.useState(false);

    return (
        <>
            <Header />
            <main>
                <div className="lyt-content">
                    <div className="lyt-single-page">
                        <div className="sp-head">
                            <h2 className="sp-title">CONTACT us</h2>
                        </div>
                        <div className="sp-cont cm-container">
                            <section>
                                <div className="bs-section">
                                    <div className="sec-cont">
                                        <div className="mod-map">
                                            <div style={{ width: "100%" }}><iframe width="100%" height="600" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Bus%20Stop,%20Sr.%20No%20237/2,%20Behind%20Ranjai%20Bunglow,%20Aloma%20County%20Road,%20near%20Medipoint%20Hospital,%20Aundh,%20Pune,%20Maharashtra%20411007+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/marine-gps/">navigation gps</a></iframe></div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <div className="bs-section">
                                    <div className="sec-head">
                                        <h2 className="sec-title">COMPANY INFO</h2>
                                    </div>
                                    <div className="sec-cont">
                                        <div className="bs-contact">
                                            <ul className="list-wrap">
                                                <li className="list-item">
                                                    <h3 className="title">Address</h3>
                                                    <ul className="list">
                                                        <li className="item">
                                                            <address>
                                                                <span className="title">pune</span>
                                                                <span className="address">AquaTint Auto Detailing Studio, Sr. no. 237/2, New DP road, Near Medipoint Hospital, Aundh, Pune: 411045. </span>
                                                            </address>
                                                        </li>
                                                        <li className="item">
                                                            <address>
                                                                <span className="title">KHARADI</span>
                                                                <span className="address">S.No. 52/A, Shree Ram Society, near Adi Corporation, near Chandan Nagar BRT stop, Nagar Road, Pune 411014. </span>
                                                            </address>
                                                        </li>
                                                        <li className="item">
                                                            <address>
                                                                <span className="title">BARAMATI</span>
                                                                <span className="address">Malegaon Road, Near Pandit Automotive, Kasba, Baramati, Pune - 413102.</span>
                                                            </address>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="list-item">
                                                    <h3 className="title">CONTACT DETAILS</h3>
                                                    <ul className="list">
                                                        <li className="item">
                                                            <h4 className="title">EMAIL</h4>
                                                            <a href="mailto:carcare@aquatintdetailing.com" className="link">carcare@aquatintdetailing.com</a>
                                                        </li>
                                                        <li className="item">
                                                            <h4 className="title">PHONE</h4>
                                                            <a href="tel:+917066457656" className="link">+91-7066457656</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <div className="bs-section">
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
                                                <div className="form-group typ-2col">
                                                    <Canvas
                                                        onChange={(e) => {
                                                            if (e === true) {
                                                                setCaptchaSuccess(true)
                                                            }
                                                        }}
                                                        placeholder="Verify"
                                                    />
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
                                                <button type="submit" disabled={!captchaSuccess} name="btnSubmit" className="btn btn-default"><span>submit</span></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <DetailsCaptureModal handleClose={handleLeadFormClose} leadFormOpen={leadFormOpen} />
            <Modal
                open={formSuccess}
                onClose={!formSuccess}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className="bs-message-card">
                    <div className="icon-wrap">
                        <span className="icon">
                            <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
                        </span>
                    </div>
                    <div className="content-wrap">
                        <p className="text">Thankyou for contecting Us!!!</p>
                        <p className="text text-sm">Our team will reach you shortly</p>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default ContactUs