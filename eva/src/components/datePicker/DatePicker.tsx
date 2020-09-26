import React, { useState } from 'react'

import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { DateRangePicker } from "react-date-range";

import "components/datePicker/datePicker.css"
import { People } from '@material-ui/icons';
import { Button } from '@material-ui/core';

export default function DatePicker() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    }

    function handleSelect(ranges:any) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className="datePicker">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            
            <h2> 
                Number of participants
                 <People/>
            </h2>
            <input min={0} defaultValue={2} type="number" />
            <Button>
                Search EVA
            </Button>
        </div>
    )
}
