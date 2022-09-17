import React from 'react';
import axios from '../axios-common';
import WhyUs from '../components/franchise/WhyUs';
import Collaborations from '../components/franchise/Collaborations';
import GetInTouch from '../components/franchise/GetInTouch';
import SEO from '../components/common/Seo';
import Loader from '../components/common/LoaderRounded';

function FranchiseWithUs() {

    const [data, setData] = React.useState(null)

    React.useEffect(() => {
        axios.get(`/franchise`)
            .then((res) => {
                setData(res.data)
            })
            .catch((error) => {
                // console.log("home error", error)
            })
    }, [])
    return (
        data !== null ? (
            <>
                {data.seo !== null && <SEO data={data?.seo} />}
                <main>
                    <div className="lyt-content">
                        <div className="lyt-single-page lyt-franchise">
                            <div className="sp-head">
                                <h2 className="sp-title">Franchise with us</h2>
                            </div>
                            <div className="sp-cont">
                                <WhyUs data={data} />
                                {data.collaboration.isActive && <Collaborations data={data.collaboration} />}
                                {data.getInTouch.isActive && <GetInTouch data={data.getInTouch} />}
                            </div>
                        </div>
                    </div>
                </main>
            </>
        ) : <Loader />
    )
}

export default FranchiseWithUs
