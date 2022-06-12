import React from 'react'
import { Route, Switch } from 'react-router-dom';
// import Banner from '../components/Banner'
import './demo.css'

function ComponentModule(props) {
    return (
        <>
            <div className="left-panel">
                <a href="/">back to Pages</a>
                <h1>Component List</h1>
                <ul>
                    {/* <li><a href={`${props.match.path}/banner`}>Banner</a></li> */}
                </ul>
            </div>
            <div className="right-panel">
                <Switch>
                    {/* <Route path={`${props.match.path}/banner`} exact element={<Banner />} /> */}
                </Switch>
            </div>
        </>
    )
}

export default ComponentModule;
