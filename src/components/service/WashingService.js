import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import YoutubeEmbed from '../common/YoutubeEmbed';
import ReactMarkdown from 'react-markdown';

//thumb images

import thumb1 from '../../assets/images/thumb/1.webp';

function chunkArray(arr,n){
    var chunkLength = Math.max(arr.length/n ,1);
    var chunks = [];
    for (var i = 0; i < n; i++) {
        if(chunkLength*(i+1)<=arr.length)chunks.push(arr.slice(chunkLength*i, chunkLength*(i+1)));
    }
    return chunks; 
}
function WashingService({data, type, page}) {
    const [open, setOpen] = React.useState(false);
    const [embedId, setEmbedId] = React.useState(null)
    const handleOpen = (id) => {
        setOpen(true);
        setEmbedId(id)
    }
    const handleClose = () => setOpen(false);
    return (
        <div className={`lyt-features-list ${page==='detailing-services'? 'typ-orange': ''}`}>
            <ul className="list-wrap">
                {data.map((item, index)=>{
                    return (
                        <li className={`item ${index % 2 === 0? 'typ-odd': 'typ-even'}`} key={index}>
                            <div className="bs-features">
                                <div className="info-wrap">
                                    <h3 className="title">{item.title}</h3>
                                    <ReactMarkdown className="desc rich-text" children={item.description} />
                                    <div className="mod-list">
                                    {chunkArray(item.featurePoints, type === 'Interior Detailing'? 1: 2).map((itemData, i)=>{
                                        return (
                                            <ul className="details-list" key={i} >
                                                {itemData.map((point, ind)=>{
                                                    return (
                                                            <li className="item" key={ind}>
                                                                <p className="">{point.point}</p>
                                                                {point.subPoints.length > 0 && (
                                                                    <ul className='sub-list-wrap'>
                                                                        {point.subPoints.map((ele, i)=>(
                                                                            <li className="sub-item" key={i}>{ele.point}</li>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </li>
                                                    )
                                                })}
                                            </ul>
                                        )
                                    })}
                                    </div>
                                </div>
                                <div className="mod-video">
                                    <div className="media-wrap">
                                        <div className="video">
                                            {item.videoPosterImage !== null && <img src={item.videoPosterImage.url} alt={item.videoPosterImage.alternativeText} />}
                                            <button className='btn btn-play' onClick={() => handleOpen(item.videoLink)}><span className="icon icon-play1"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
            {/* modal popup */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className="bs-modal"
                open={open}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box className='modal-body'>
                        <button className="modal-close" onClick={handleClose}>
                            <span className="icon-close"></span>
                        </button>
                        <YoutubeEmbed embedId={embedId} />
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}

export default WashingService