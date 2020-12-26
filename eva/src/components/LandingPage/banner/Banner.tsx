import React from 'react';
import 'components/LandingPage/banner/banner.css';
import { Button } from '@material-ui/core';

export default function Banner() {

	return (
		<div className="banner">
			<div className="banner_info">
				<h1>Be Safe</h1>
				<h5>Take care of you</h5>
				<Button variant="outlined">Explore Doctors Nearby</Button>
			</div>
		</div>
	);
}
