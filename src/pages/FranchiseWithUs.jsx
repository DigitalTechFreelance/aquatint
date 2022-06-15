import React, {useState} from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import colab1Img from '../assets/images/colab1.webp';
import colab2Img from '../assets/images/colab2.webp';
import TextField from '@mui/material/TextField';
import DetailsCaptureModal from '../components/common/DetailsCaptureModal';
import { useFormik } from 'formik';
import axios from 'axios';

function FranchiseWithUs() {
    React.useEffect(()=>{
        window.scrollTo(0, 0);
		setTimeout(()=>{
			setLeadFormOpen(true);
		},15000)
    },[])

	const [leadFormOpen, setLeadFormOpen] = useState(false);
    const handleLeadFormClose = () => setLeadFormOpen(false);
    const submitToLead = (values) => {
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
            
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
        <Header/>
        <main>
            <div className="lyt-content">
                <div className="lyt-single-page lyt-franchise">
                    <div className="sp-head">
                        <h2 className="sp-title">Franchise with us</h2>
                    </div>
                    <div className="sp-cont">
                        <section>
                            <div className="bs-section">
                                <div className="cm-container">
                                    <div className="wrapper-content">
                                        <div className="sec-head">
                                            <h2 className="sec-title">Why us?</h2>
                                        </div>
                                        <div className="sec-cont">
                                            <ul className="mod-list typ-icon">
                                                <li className="list-item"><p>Aquatint is a premium detailing studio for cars and bikes. We use state of art technology &amp; choicest products for a finest detailing experience.</p></li>
                                                <li className="list-item"><p>We deploy International standards for detailing which allows us to deliver a top notch experience to our clients.</p></li>
                                                <li className="list-item"><p>With Aquatint Detailing you can expect up to 60% return on investment in the first year itself. Training module and marketing strategy are well designed for your profitability.</p></li>
                                                <li className="list-item"><p>Based on partner requirements, we design the initial Start-up kit. This allows our partners to introduce all services at one go.</p></li>
                                                <li className="list-item"><p>We provide a POS Software for ease of transactions and for tracking business.</p></li>
                                                <li className="list-item"><p>All services offered are eco-friendly. We use high pressure steam to wash the cars which minimises water consumption.</p></li>
                                                <li className="list-item"><p>We provide Technical and Sales training support to our partners which saves time and efforts in learning a new business.</p></li>
                                                <li className="list-item"><p>Digital marketing support is provided in the form of Google Adwords, Facebook & Instagram Creatives, and promotional offers.</p></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="bs-section">
                                <div className="cm-container">
                                    <div className="wrapper-content">
                                        <div className="sec-head">
                                            <h2 className="sec-title">COLLABORATIONS</h2>
                                        </div>
                                        <div className="sec-cont">
                                            <div className="bs-infography typ-vertical">
                                                <div className="info-wrap">
                                                    <div className="desc">
                                                        <p>We are the authorised installers for Opti-Coat and Labcosmetica; which are renowned brands of ceramic coating all over the globe.</p>
                                                    </div>
                                                </div>
                                                <div className="img-wrap">
                                                    <ul className="mod-logo-list">
                                                        <li className="logo-item">
                                                            <img className="m-logo" src={colab1Img} alt=" image will come here" />
                                                        </li>
                                                        <li className="logo-item">
                                                            <img className="m-logo" src={colab2Img} alt=" image will come here" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="bs-section">
                                <div className="cm-container">
                                    <div className="wrapper-content">
                                        <div className="sec-head">
                                            <h2 className="sec-title">GET IN TOUCH WITH US</h2>
                                        </div>
                                        <div className="sec-cont">
                                            <div className="sec-desc">
                                                <p>To know more about the Franchise Prerequisites, Project Cost, Franchise Fees and other details, please feel free to get in touch with us. Fill in your contact details below.</p>
                                            </div>
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
                                                {formSuccess ? (
                                                    <span className="success success-msg">Succesfully Sent!!</span>
                                                ) : null}
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
		<DetailsCaptureModal handleClose={handleLeadFormClose} leadFormOpen={leadFormOpen}/>
    </>
  )
}

export default FranchiseWithUs
