import React from 'react'
import 'materialize-css';

import {Search, ExpandMore, Language} from "@material-ui/icons"

import "components/common/navbar/nav.css"
import { Avatar, InputBase } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MainSearchBar from "components/common/MainSearchBar/MainSearchBar";

export default function Nav() {
    return (
        <div className='header'>
            <div className="header__left">
                <Link to='/'>
                    <img
                        className="header_icon"
                        src="https://cdn.pixabay.com/photo/2018/05/08/21/28/airbnb-3384008_640.png"
                        alt=""
                    />
                </Link>
                <MainSearchBar />
            </div>
           
            <div className='header_center'>
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
