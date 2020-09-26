import React from 'react'
import 'materialize-css';

import {Search, ExpandMore, Language} from "@material-ui/icons"

import "components/navbar/nav.css"
import { Avatar } from '@material-ui/core';

export default function Nav() {
    return (
        <div className="header">
            <img className="header_icon" src="https://www.pngitem.com/pimgs/m/167-1676821_wall-e-and-eva-quotes-png-download-robot.png" alt=""/>
        
            <div className="header_center">
                <input type="text"/>
                <Search />
            </div>

            <div className="header_right">
                <p>Become a Doctor</p>
                <Language />
                <ExpandMore />
                <Avatar />
            </div>
        </div>

    )
}
