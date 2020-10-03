import React, { useState } from 'react'

import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';

import "components/MessagesPage/ChatsSearchBar/ChatsSearchBar.css"
import { Grid } from "@material-ui/core";
import { CardPanel } from "react-materialize";


export default function ChatsSearchBar() {
    const [showClear, setShowClear] = useState(false)
    const [value, setValue] = useState("")

    let input = React.createRef<HTMLInputElement>();

    const handleSearchBarOnChange = (e:any) => {
        setShowClear(e.target.value ? true : false)
        setValue(e.target.value)
        console.log(value)
    }
    
    const handleClearClick = (e: any) => {
        if (input.current?.value) {
            input.current.value = ""
            setValue("")
            setShowClear(false)
        }
    }

    return (
        <div className="chats__search__bar">
            {/* <InputBase         
                placeholder="Search in messages"
                inputProps={{ disableUnderline: true }}
                multiline
            /> */}

            <Grid container direction="row" justify="space-between" alignItems="center">
                <Grid item xs={1}>
                    <div className="search__icon">
                        <SearchIcon id="search_button"/>
                    </div>
                </Grid>
                <Grid item xs={10}>
                    <div className="search__bar">
                        <input id="search_bar" ref={input}type="text" placeholder="Search in messages" onChange={(e) => {handleSearchBarOnChange(e)}}/>
                    </div>

                </Grid>
                <Grid item xs={1}>
                    <div className="clear__icon">
                        {
                            showClear && <ClearIcon id="clear__button" onClick={(e) => handleClearClick(e)}/>
                        }
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}