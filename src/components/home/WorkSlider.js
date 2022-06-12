import React, { useRef, useState } from 'react';
import useSetBgImage from '../../hooks/useSetBgImage';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

//assets
import tileImg1 from '../../assets/images/recent-work/1.webp';
import tileImg2 from '../../assets/images/recent-work/2.webp';
import tileImg3 from '../../assets/images/recent-work/3.webp';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import YoutubeEmbed from '../common/YoutubeEmbed';

function WorkSlider() {

    useSetBgImage(".setBgSrc", ".getBgSrc");
    const [open, setOpen] = React.useState(false);
    const [embedId, setEmbedId] = React.useState(null)
    const handleOpen = (id) => {
        setOpen(true);
        setEmbedId(id)
    }
    const handleClose = () => setOpen(false);
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                loop={true}
                navigation={true}
                pagination={true}
                modules={[Navigation, Pagination]}
                breakpoints={{
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    }
                }}
                className="mySwiper bs-swiper typ-tile"
            >
                <SwiperSlide>
                    <div className="bs-tile typ-video setBgSrc">
                        <div className="img-wrap">
                            <img src={tileImg1} alt="recent work 1" title="recent work 1" className="getBgSrc" />
                        </div>
                        <div className="action-wrap">
                            <button type="button" className="link" data-video-src="" onClick={() => handleOpen("KdGhneBElgQ")}>
                                <span className="icon icon-play2"></span>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bs-tile typ-video setBgSrc">
                        <div className="img-wrap">
                            <img src={tileImg2} alt="recent work 2" title="recent work 2" className="getBgSrc" />
                        </div>
                        <div className="action-wrap">
                            <button type="button" className="link" data-video-src="" onClick={() => handleOpen("u_Cfe2f_HW8")}>
                                <span className="icon icon-play2"></span>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bs-tile typ-video setBgSrc">
                        <div className="img-wrap">
                            <img src={tileImg3} alt="recent work 3" title="recent work 3" className="getBgSrc" />
                        </div>
                        <div className="action-wrap">
                            <button type="button" className="link" data-video-src="" onClick={() => handleOpen("6J5SZzJd5bk")}>
                                <span className="icon icon-play2"></span>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className="bs-modal"
                open={open}
                // onClose={handleClose}
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
        </>
    )
}

export default WorkSlider