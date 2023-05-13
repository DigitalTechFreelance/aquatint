import React, { useState } from 'react';
import WashingService from './WashingService';
import WashingServiceCompareList from './WashingServiceCompareList';
import Fade from 'react-reveal/Fade';

/* tab imports */
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography component={'span'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function DetailingServiceTabs({ data, setActiveTab, page }) {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        setActiveTab(newValue)
    };
    React.useEffect(() => {
        if (window.location.pathname === "/services/detailing-services/interior") {
            setValue(1);
            setActiveTab(1)
        }
        if (window.location.pathname === "/services/detailing-services/exterior") {
            setValue(0);
            setActiveTab(0)
        }
    }, [])
    return (
        <div className="bs-tabs">
            <Fade bottom distance="20px" delay={500} duration={800}>
                <div className="tab-nav">
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        {data.map((item, index) => {
                            return item.isActive && <Tab className='btn-tab' key={index} label={item.serviceName} {...a11yProps(index)} />
                        })}
                    </Tabs>
                </div>
            </Fade>
            <div className="tab-content">
                {data.map((item, index) => {
                    return item.isActive && (
                        <TabPanel value={value} index={index} key={index}>
                            {item.featureService && item.featureService.length > 0 && <WashingService data={item.featureService} type={item.serviceName} page={page} />}
                            {item.compareServices && item.compareServices.length > 0 && (
                                <section>
                                    <div className="bs-section typ-center">
                                        <div className="sec-head">
                                            <Fade bottom distance="20px" delay={500} duration={800}>
                                                <h2 className="sec-title">Compare Services</h2>
                                            </Fade>
                                        </div>
                                        <div className="sec-cont">
                                            <WashingServiceCompareList data={item.compareServices} />
                                        </div>
                                    </div>
                                </section>
                            )}
                        </TabPanel>
                    )
                })}
            </div>
        </div>
    )
}

export default DetailingServiceTabs