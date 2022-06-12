import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import YoutubeEmbed from '../common/YoutubeEmbed';

function InteriorDetailingService() {
    const [open, setOpen] = React.useState(false);
    const [embedId, setEmbedId] = React.useState(null)
    const handleOpen = (id) => {
        setOpen(true);
        setEmbedId(id)
    }
    const handleClose = () => setOpen(false);
    return (
        <div className="lyt-features-list typ-orange">
            <ul className="list-wrap">
                <li className="item typ-odd">
                    <div className="bs-features">
                        <div className="info-wrap">
                            <h3 className="title">EXPRESS INTERIOR CLEANING</h3>
                            <p className="desc">A maintenance interior cleaning package to keep your car spotless, fresh &amp; new from inside!</p>
                            <div className="mod-list">
                                <ul className="details-list">
                                    <li className="item">
                                        <p>Car interior dry vaccumed</p>
                                    </li>
                                    <li className="item">
                                        <p>Antibacterial Foam cleaning of the complete Interior</p>
                                    </li>
                                    <li className="item">
                                        <p>Carpet cleaning with shampoo</p>
                                    </li>
                                    <li className="item">
                                        <p>Dashboard &amp; plastic rejuvenating with plastic sealant</p>
                                    </li>
                                    <li className="item">
                                        <p>Windows cleaning inside &amp; out</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mod-video">
                            <div className="media-wrap">
                                <div className="video">
                                    <img src="https://via.placeholder.com/846x476.png/1a1a1a/919191%20%20?text=Placeholder" alt="placeholder" />
                                    <button className='btn btn-play' onClick={() => handleOpen('JSH9ZarMeL4')}><span className="icon icon-play1"></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="item typ-even">
                    <div className="bs-features">
                        <div className="info-wrap">
                            <h3 className="title">INTERIOR DETAILING ADVANCE</h3>
                            <p className="desc">Get spotless and hygienic car interiors!</p>
                            <div className="mod-list">
                                <ul className="details-list">
                                    <li className="item">
                                        <p> All services of EXPRESS INTERIOR</p>
                                    </li>
                                    <li className="item">
                                        <p>Steam Cleaning of-</p>
                                        <ul className="sub-list-wrap">
                                            <li className="sub-item">All human-contact points for 99% germ cleaning</li>
                                            <li className="sub-item">A/C Duct with Disinfectant treatment</li>
                                            <li className="sub-item">Door Jambs with degreasing</li>
                                        </ul>
                                    </li>
                                    <li className="item">
                                        <p>Deep Cleaning of-</p>
                                        <ul className="sub-list-wrap">
                                            <li className="sub-item">The boot area &amp; Spare Wheel</li>
                                            <li className="sub-item">Seat cracks &amp; other crevices with brushes</li>
                                        </ul>
                                    </li>
                                    <li className="item">
                                        <p>Conditioning leather seats &amp; trims with Leather Cream</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mod-video">
                            <div className="media-wrap">
                                <div className="video">
                                    <img src="https://via.placeholder.com/846x476.png/1a1a1a/919191%20%20?text=Placeholder" alt="placeholder" />
                                    <button className='btn btn-play' onClick={() => handleOpen('JSH9ZarMeL4')}><span className="icon icon-play1"></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            {/* modal popup */}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className="bs-modal"
                open={open}
                onClose={handleClose}
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

export default InteriorDetailingService