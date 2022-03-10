import React from 'react';
import ExteriorDetailingService from './ExteriorDetailingService';
import InteriorDetailingService from './InteriorDetailingService';
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
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="bs-tabs">
            <div className="tab-nav">
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Exterior Detailing" {...a11yProps(0)} />
                    <Tab label="Interior Detailing" {...a11yProps(1)} />
                </Tabs>
            </div>
            <div className="tab-content">
                <TabPanel value={value} index={0}>
                    <ExteriorDetailingService/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <InteriorDetailingService/>
                </TabPanel>
            </div>
        </div>
    )
}

export default DetailingServiceTabs