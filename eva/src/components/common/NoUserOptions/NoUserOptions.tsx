import React, { useState } from 'react'
import "components/common/NoUserOptions/NoUserOptions.css"
import { ExpandMore } from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar";
import Dropdown from "components/common/Dropdown/Dropdown";

export default function NoUserOptions() {
    const [open, setOpen] = useState(false);

    return (
        <div className="no__user__options" onClick={() => setOpen(!open)}>
            <Avatar className="no__user__icon" /> 
            <ExpandMore />
            {open && <Dropdown />}
        </div>
    )
}
