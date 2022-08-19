import React from 'react';
import Infography from '../components/service/PPF/Infography';
import VideoBanner from '../components/common/VideoBanner';
import axios from '../axios-common';
import About from '../components/home/About';
import Service from '../components/common/TilesServices';

function PaintProtectionFilm() {
    const [data, setData] = React.useState(null)

	React.useEffect(()=>{
		axios.get(`/ppf`)
		.then((res) => {
			setData(res.data)
		})
		.catch((error) => {
            // console.log("error", error)
		})
	}, [])
    // console.log("daata", data)

  return (
		data!==null? (
            <main>
                <div className="lyt-content">
                    <VideoBanner data={data}/>
                    <About data={data}/>
                    <div className="lyt-single-page typ-2">
                        <div className="sp-cont">
                           {data.features.isActive && <Infography data={data.features}/>}
                           {data.benefits.isActive && <Service data={data.benefits.services} title="Benefits Of ppf" page="ppf"/>}
                        </div>
                    </div>
                </div>
            </main>
		) : null

  )
}

export default PaintProtectionFilm