import Banner from 'components/banner/Banner'
import React from 'react'

import "components/landingPage/landingPage.css"
import Card from 'components/card/Card';
import Footer from 'components/footer/Footer';

export default function LandingPage() {
    return (
        <div className="Home">
            <Banner />

            <div className="home_section">
                <Card src={"https://sportafolio.com/wp-content/uploads/2018/08/nutricion-blog.jpg"} title={"Nutrition"} description={"Take care"} price={0}/>
                <Card src={"https://abilita.com.mx/wp-content/uploads/2015/09/ortopedia.jpg"} title={"Orthopedy"} description={"bones"} price={0}/>
                <Card src={"https://www.hospitalcardiologica.com.mx/wp-content/uploads/2014/11/Pediatria.jpg"} title={"Pediathry"} description={"Babies"} price={0}/>
            </div>

            <div className="home_section">
                <Card src={"https://www.hospitallasalud.es/wp-content/uploads/2018/04/cardiologia.jpg"} title={"Cardiology"} description={"KOKORO"} price={0}/>
                <Card src={"https://okdiario.com/img/2018/05/18/otorrino-1-655x368.jpg"} title={"Otorrinolaringología"} description={"oidos"} price={0}/>
                <Card src={"https://www.eldentistamoderno.com/wp-content/uploads/2019/07/salud-bucodental-640x427.jpg"} title={"Dentist"} description={"dientes"} price={0}/>
            </div>

            <Footer />
        </div>
    )
}
