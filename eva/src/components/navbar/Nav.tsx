import React from 'react'
import 'materialize-css';

import {Search, ExpandMore, Language} from "@material-ui/icons"

import "components/navbar/nav.css"
import { Avatar, InputBase } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header_icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
            </Link>
           
            <div className='header_center'>
                <InputBase
                    placeholder="Search in Eva"
                    inputProps={{ disableUnderline: true }}
                    multiline
                />
                <Search />
            </div>

            <div className='header_right'>
                <p>Become a Doctor</p>
                <Language />
                <ExpandMore />
                <Avatar />
            </div>
        </div>
    )
}
