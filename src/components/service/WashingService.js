import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import YoutubeEmbed from '../common/YoutubeEmbed';

function WashingService() {
    const [open, setOpen] = React.useState(false);
    const [embedId, setEmbedId] = React.useState(null)
    const handleOpen = (id) => {
        setOpen(true);
        setEmbedId(id)
    }
    const handleClose = () => setOpen(false);
    return (
    <div className="lyt-features-list">
        <ul className="list-wrap">
            <li className="item typ-odd">
                <div className="bs-features">
                    <div className="info-wrap">
                        <h3 className="title">Insta Gloss</h3>
                        <p className="desc">Get your car cleaned inside-out with this premium steam-wash service</p>
                        <div className="mod-list">
                            <ul className="details-list">
                                <li className="item">
                                    <p className="">High Pressure Foam/ Steam Wash</p>
                                    <ul className='sub-list-wrap'>
                                        <li className="sub-item">Engine bay steam clean</li>
                                        <li className="sub-item">Door jambs cleaning</li>
                                        <li className="sub-item">Wheel cleaning</li>
                                        <li className="sub-item">Floor mat cleaning</li>
                                    </ul>
                                </li>
                                <li className="item">
                                    <p className=""> Spray on wax application</p>
                                </li>
                            </ul>
                            <ul className="details-list">
                                <li className="item">
                                    <p className="">Dressing</p>
                                    <ul className="sub-list-wrap">
                                        <li className="sub-item">Plastic trim dressing</li>
                                        <li className="sub-item">Tyre dressing</li>
                                    </ul>
                                </li>
                                <li className="item">
                                    <p className="">Interior vacuum &amp; wet wipe,</p>
                                </li>
                                <li className="item">
                                    <p className="">Glass Cleaning,</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mod-video">
                        <div className="media-wrap">
                            <div className="video">
                                <img src="https://via.placeholder.com/846x476.png/1a1a1a/919191%20%20?text=Placeholder" alt="placeholder" />
                                <button className='btn btn-play' onClick={()=> handleOpen('35npVaFGHMY')}><span className="icon icon-play1"></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li className="item typ-even">
                <div className="bs-features">
                    <div className="info-wrap">
                        <h3 className="title">PRO WASH</h3>
                        <p className="desc">A Premium steam wash topped with tar-mark removal &amp; added protection for Interiors of your car.</p>
                        <div className="mod-list">
                            <ul className="details-list">
                                <li className="item">
                                    <p className="">All Services of INSTA-GLOSS</p>
                                </li>
                                <li className="item">
                                    <p className="">Tar Marks removal from body &amp; alloys </p>
                                </li>
                                <li className="item">
                                    <p className="">Bug stains removal</p>
                                </li>
                                <li className="item">
                                    <p className="">Claying on painted surface to reduce roughness</p>
                                </li>
                            </ul>   
                            <ul className="details-list">
                                <li className="item">
                                    <p className="">Premium Carnauba Wax application</p>
                                </li>
                                <li className="item">
                                    <p className="">Interior Plastic &amp; Dashboard premium dressing</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mod-video">
                        <div className="media-wrap">
                            <div className="video">
                                <img src="https://via.placeholder.com/846x476.png/1a1a1a/919191%20%20?text=Placeholder" alt="placeholder" />
                                <button className='btn btn-play' onClick={()=> handleOpen('35npVaFGHMY')}><span className="icon icon-play1"></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li className="item typ-odd">
                <div className="bs-features">
                    <div className="info-wrap">
                        <h3 className="title">CERAMIC WASH</h3>
                        <p className="desc">After a ceramic coating is done, you still have to take care of your vehicle. A regular Ceramic Wash prevents contamination build up, maximises gloss levels of the paint and maintains the existing coat</p>
                        <div className="mod-list">
                            <ul className="details-list">
                                <li className="item">
                                    <p className="">All services of PRO-WASH</p>
                                </li>
                                <li className="item">
                                    <p className="">Alkaline pre wash</p>
                                    <ul className="sub-list-wrap">
                                        <li className="sub-item">Removes organic dirt</li>
                                    </ul>
                                </li>
                                <li className="item">
                                    <p className="">Acidic foam wash</p>
                                    <ul className="sub-list-wrap">
                                        <li className="sub-item">Removes lime scale</li>
                                    </ul>
                                </li>
                                <li className="item">
                                    <p className="">Iron decontamination </p>
                                    <ul className="sub-list-wrap">
                                        <li className="sub-item"> Removes metal oxides,brake dust etc</li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="details-list">
                                <li className="item">
                                    <p className="">Tar and Bug stains removal</p>
                                </li>
                                <li className="item">
                                    <p className="">Neutralized foam wash</p>
                                    <ul className="sub-list-wrap">
                                        <li className="sub-item">Neutral maintenance wash with high lubrication action</li>
                                    </ul>
                                </li>
                                <li className="item">
                                    <p className="">Application of Nano Ceramic Sealant</p>
                                    <ul className="sub-list-wrap">
                                        <li className="sub-item">for uv protection and high gloss finish</li>
                                    </ul>
                                </li>
                                <li className="item">
                                    <p className="">Gloss enhancer application</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mod-video">
                        <div className="media-wrap">
                            <div className="video">
                                <img src="https://via.placeholder.com/846x476.png/1a1a1a/919191%20%20?text=Placeholder" alt="placeholder" />
                                <button className='btn btn-play' onClick={()=> handleOpen('35npVaFGHMY')}><span className="icon icon-play1"></span></button>
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
    </div>
  )
}

export default WashingService