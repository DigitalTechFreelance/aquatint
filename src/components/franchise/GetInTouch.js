import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import successImg from '../../assets/images/success.gif';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
};

function GetInTouch({data}) {

	// const [leadFormOpen, setLeadFormOpen] = useState(false);
    const [formSuccess, setFormSuccess] = React.useState(false);

    // React.useEffect(()=>{
    //     window.scrollTo(0, 0);
	// 	setTimeout(()=>{
	// 		setLeadFormOpen(true);
	// 	},15000)
    // },[]);

    React.useEffect(() => {
        setTimeout(() => {
            setFormSuccess(false);
        }, 10000);
    },[formSuccess]);


    // const handleLeadFormClose = () => setLeadFormOpen(false);
    const submitToLead = (values) => {
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
            
        let data = {
            "Date": date,
            "Name": values.name,
            "Email": values.emailId,
            "Phone No": values.contactNo
        }
        console.log("date", date, data)
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

  return (
    <>
    <section>
        <div className="bs-section">
            <div className="cm-container">
                <div className="wrapper-content">
                    <div className="sec-head">
                        <h2 className="sec-title">GET IN TOUCH WITH US</h2>
                    </div>
                    <div className="sec-cont">
                        <div className="sec-desc">
                            <p>{data.info}</p>
                        </div>
                        {data.getInTouchForm && 
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
                            </div>
                            <div className="form-action">
                                <button type="submit" name="btnSubmit" className="btn btn-default"><span>submit</span></button>
                            </div>
                        </form>
                        }
                    </div>
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

export default GetInTouch