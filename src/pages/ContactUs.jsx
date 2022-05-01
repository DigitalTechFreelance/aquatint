import React from 'react';
import axios from '../axios-common';
import GoogleMap from '../components/contactus/GoogleMap';
import CompanyInfo from '../components/contactus/CompanyInfo';
import CustomerDetails from '../components/contactus/CustomerDetails';

function ContactUs() {
    const [data, setData] = React.useState(null)

	React.useEffect(()=>{
		axios.get(`/api/contact-us?populate=*`)
		.then((res) => {
			setData(res.data.data.attributes)
		})
		.catch((error) => {
			// console.log("home error", error)
		})
	}, [])

    console.log("data contact", data)
  return (
      data !== null ?(
        <main>
            <div className="lyt-content">
                <div className="lyt-single-page">
                    <div className="sp-head">
                        <h2 className="sp-title">CONTACT us</h2>
                    </div>
                    <div className="sp-cont cm-container">
                        {data.googleMap && <GoogleMap/>}
                        {data.companyInfo.isActive && <CompanyInfo data={data.companyInfo}/>}
                        {data.contactDetails.isActive && data.contactDetails.customerDetailsForm && <CustomerDetails data={data.contactDetails}/>}
                    </div>
                </div>
            </div>
        </main>
      ): null
  )
}

export default ContactUs