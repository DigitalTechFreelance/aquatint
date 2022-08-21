import React, {useState} from 'react';
import ExteriorDetailingService from './ExteriorDetailingService';
import InteriorDetailingService from './InteriorDetailingService';
import ExteriorDetailingServiceCompareList from './ExteriorDetailingServiceCompareList';
import InteriorDetailingServiceCompareList from './InteriorDetailingServiceCompareList';
import WashingService from './WashingService';
import WashingServiceCompareList from './WashingServiceCompareList';

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

function DetailingServiceTabs({data, setActiveTab, page}) {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        setActiveTab(newValue)
    };
    React.useEffect(()=>{
        if(window.location.pathname === "/services/detailing-services/interior"){
            setValue(1);
            setActiveTab(1)
        }
        if(window.location.pathname === "/services/detailing-services/exterior"){
            setValue(0);
            setActiveTab(0)
        }
    }, [])
    return (
        <div className="bs-tabs">
            <div className="tab-nav">
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    {data.map((item, index)=>{
                        return item.isActive && <Tab className='btn-tab' key={index} label={item.serviceName} {...a11yProps(index)} />
                    })}
                </Tabs>
            </div>
            <div className="tab-content">
                {data.map((item, index)=>{
                    return item.isActive && (
                        <TabPanel value={value} index={index} key={index}>
                           {item.featureService && item.featureService.length>0 && <WashingService data={item.featureService} type={item.serviceName} page={page}/>} 
                            {item.compareServices && item.compareServices.length>0 && (
                            <section>
                                <div className="bs-section typ-center">
                                    <div className="sec-head">
                                        <h2 className="sec-title">Compare Services</h2>
                                    </div>
                                    <div className="sec-cont">
                                        <WashingServiceCompareList data={item.compareServices}/>
                                    </div>
                                </div>
                            </section>
                            )}
                        </TabPanel>
                    )
                })}
                {/* <TabPanel value={value} index={0}>
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
                </TabPanel> */}
            </div>
        </div>
    )
}

export default DetailingServiceTabs