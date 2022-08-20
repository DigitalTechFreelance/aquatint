import React from 'react';
import Infography from '../components/service/PPF/Infography';
import VideoBanner from '../components/common/VideoBanner';
import axios from '../axios-common';
import About from '../components/home/About';
import Service from '../components/common/TilesServices';
import VideoSection from '../components/common/VideoSection';
import PpfCompareList from '../components/service/PpfCompareList';
import RecentWork from '../components/home/RecentWork'

function PaintProtectionFilm() {
    const [data, setData] = React.useState(null)

    const [playState, setPlayState] = React.useState({
        playing: false,
        buttonClose: false,
    });

    const handleVideoStatus = (videoPlayStatus) => {
        setPlayState({ ...playState, playing: videoPlayStatus.playing, buttonClose: videoPlayStatus.buttonClose })
    }
	React.useEffect(()=>{
		axios.get(`/ppf`)
		.then((res) => {
			setData(res.data)
		})
		.catch((error) => {
            // console.log("error", error)
		})
	}, [])

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
                    {data.videoSection.isActive && <VideoSection handleVideoStatus={handleVideoStatus} data={data.videoSection}/>}
                    {data.ppfTypes.isActive && <PpfCompareList data={data.ppfTypes}/>}
					{data?.recentWorkSection && <RecentWork data={data.recentWorkSection}/>}
                </div>
            </main>
		) : null
  )
}

export default PaintProtectionFilm