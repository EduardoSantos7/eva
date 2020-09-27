import React, { useState } from 'react';
import 'components/banner/banner.css';
import { Button } from '@material-ui/core';
import DatePicker from 'components/datePicker/DatePicker';

export default function Banner() {
	const [ showSearch, setshowSearch ] = useState(false);
	return (
		<div className="banner">
			<div className="banner_search">
				{showSearch && <DatePicker />}
				<Button onClick={() => setshowSearch(!showSearch)} className="banner_searchButton" variant="outlined">
					Search Dates
				</Button>
			</div>
			<div className="banner_info">
				<h1>Be Safe</h1>
				<h5>Take care of you</h5>
				<Button variant="outlined">Explore Doctors Nearby</Button>
			</div>
		</div>
	);
}
