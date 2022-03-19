import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import YoutubeEmbed from '../common/YoutubeEmbed';

function ExteriorDetailingService() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div className="lyt-features-list typ-orange">
        <ul className="list-wrap">
            <li className="item typ-odd">
                <div className="bs-features">
                    <div className="info-wrap">
                        <h3 className="title">GLOW TREATMENT</h3>
                        <p className="desc">A single stage polish treatment for your car, topped with a layer of Carnauba Wax Coat for added shine &amp; protection.</p>
                        <div className="mod-list">
                            <ul className="details-list">
                                <li className="item">
                                    <p>High Pressure Steam Wash</p>
                                    <ul className='sub-list-wrap'>
                                        <li className="sub-item">Complete Outer Body</li>
                                        <li className="sub-item">Engine Bay</li>
                                    </ul>
                                </li>
                                <li className="item">
                                    <p>Single stage compounding for scratch removal</p>
                                </li>
                                <li className="item">
                                    <p>Interior Vacuuming &amp; wipe down</p>
                                </li>
                            </ul>
                            <ul className="details-list">
                                <li className="item">
                                    <p>Glass cleaning inside out</p>
                                </li>
                                <li className="item">
                                    <p>Premium Carnauba Wax application for protection, shine &amp; gloss</p>
                                </li>
                                <li className="item">
                                    <p>Dressing</p>
                                    <ul className="sub-list-wrap">
                                        <li className="sub-item">Premium Tyre Dressing</li>
                                        <li className="sub-item">Exterior Plastic Body</li>
                                        <li className="sub-item">Engine</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mod-video">
                        <div className="media-wrap">
                            <div className="video">
                                <img src="https://via.placeholder.com/846x476.png/1a1a1a/919191%20%20?text=Placeholder" alt="placeholder" />
                                <button className='btn btn-play' onClick={handleOpen}><span className="icon icon-play1"></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li className="item typ-even">
                <div className="bs-features">
                    <div className="info-wrap">
                    <h3 className="title">Paint sealant</h3>
                    <p className="desc">Paint Sealant restores the showroom finish of your car. Expect enhanced Gloss with an added durable protective shield</p>
                        <div className="mod-list">
                        <ul className="details-list">
                            <li className="item"><p>High Pressure Steam wash</p></li>
                            <li className="item"><p>Engine bay de-scaling &amp; carbon clean up</p></li>
                            <li className="item"><p>Full Body tar and water mark removal, cleansing exterior plastic trims</p></li>
                            <li className="item"><p>Scratch and Swirl mark removal</p></li>
                            <li className="item"><p>Polymer Paint Sealant application for better UV protection</p></li>
                        </ul>
                        <ul className="details-list">
                            <li className="item"><p>Machine buffing Headlamps/Tail Lamps</p></li>
                            <li className="item"><p>Alloy wheel detailing</p></li>
                            <li className="item"><p>Premium exterior Plastic Sealant + Trim Rejuvenator</p></li>
                            <li className="item"><p>Interior Vacuuming &amp; wipe down</p></li>
                            <li className="item"><p>Premium Tire dressing</p></li>
                            <li className="item"><p>Glass cleaning inside &amp; out</p></li>
                        </ul>
                        </div>
                    </div>
                    <div className="mod-video">
                        <div className="media-wrap">
                            <div className="video">
                                <img src="https://via.placeholder.com/846x476.png/1a1a1a/919191%20%20?text=Placeholder" alt="placeholder" />
                                <button className='btn btn-play' onClick={handleOpen}><span className="icon icon-play1"></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li className="item typ-odd">
                <div className="bs-features">
                    <div className="info-wrap">
                        <h3 className="title">nano CERAMIC coating</h3>
                        <p className="desc">Nano Coating gives your car a better than showroom gloss. Adds MULTI-LAYER PROTECTIVE SHIELD for impeccable performance all year round!</p>
                        <div className="mod-list">
                            <ul className="details-list">
                                <li className="item"><p>3 Types of Foam Wash - (Alkaline, Acidic and Neutralised)</p></li>
                                <li className="item"><p>Iron Decontamination and Engine bay detailing</p></li>
                                <li className="item"><p>Full Body tar and water mark removal, cleansing exterior plastic trims</p></li>
                                <li className="item"><p>Scratch and Swirl mark removal</p></li>
                                <li className="item"><p>Revive Headlamps / Tail Lamps</p></li>
                                <li className="item"><p>Prep the car for Nano Coating application</p></li>
                            </ul>
                            <ul className="details-list">
                                <li className="item">
                                    <p>Application of :</p>
                                    <ul className="sub-list-wrap">
                                        <li className="sub-item">Metal polish to chrome trims</li>
                                        <li className="sub-item">Primer polish to highlight mirror like effects of metallic colours</li>
                                        <li className="sub-item">Polymer sealant for super Hydrophobic effects</li>
                                        <li className="sub-item">Nano ceramic sealant for UV protection and high gloss finish</li>
                                        <li className="sub-item">Gloss enhancer</li>
                                    </ul>
                                </li>
                                <li className="item"><p>Interior vacumm, Dashboard, Plastic &amp;  leather dressing</p></li>
                                <li className="item"><p>Premium Tire &amp; Engine bay dressing</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mod-video">
                        <div className="media-wrap">
                            <div className="video">
                                <img src="https://via.placeholder.com/846x476.png/1a1a1a/919191%20%20?text=Placeholder" alt="placeholder" />
                                <button className='btn btn-play' onClick={handleOpen}><span className="icon icon-play1"></span></button>
                            </div>
                            <div className="mod-warranty typ-detailing-services">
                                <span className="count">1</span>
                                <span className="text">years warranty</span>
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
                <YoutubeEmbed embedId="35npVaFGHMY" />
            </Box>
        </Fade>
      </Modal>
    </div>
  )
}

export default ExteriorDetailingService