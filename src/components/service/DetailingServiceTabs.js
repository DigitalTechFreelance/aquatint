import React, {useState} from 'react';
import ExteriorDetailingService from './ExteriorDetailingService';
import InteriorDetailingService from './InteriorDetailingService';
import ExteriorDetailingServiceCompareList from './ExteriorDetailingServiceCompareList';
import InteriorDetailingServiceCompareList from './InteriorDetailingServiceCompareList';

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
                <Typography>{children}</Typography>
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

function DetailingServiceTabs() {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="bs-tabs">
            <div className="tab-nav">
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab className='btn-tab' label="Exterior Detailing" {...a11yProps(0)} />
                    <Tab className='btn-tab' label="Interior Detailing" {...a11yProps(1)} />
                </Tabs>
            </div>
            <div className="tab-content">
                <TabPanel value={value} index={0}>
                    <ExteriorDetailingService/>
                    <section>
                        <div className="bs-section typ-center">
                            <div className="sec-head">
                                <h2 className="sec-title">Compare Services</h2>
                            </div>
                            <div className="sec-cont">
                                <ExteriorDetailingServiceCompareList/>
                            </div>
                        </div>
                    </section>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <InteriorDetailingService/>
                    <section>
                        <div className="bs-section typ-center">
                            <div className="sec-head">
                                <h2 className="sec-title">Compare Services</h2>
                            </div>
                            <div className="sec-cont">
                                <InteriorDetailingServiceCompareList/>
                            </div>
                        </div>
                    </section>
                </TabPanel>
            </div>
        </div>
    )
}

export default DetailingServiceTabs