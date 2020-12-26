import React from 'react'
import "components/LandingPage/card/card.css"


interface CardProps {
    src: any, title: any, description: any, price: any
}

export default function Card(props:CardProps) {
    return (
        <div className='card'>
            <img src={props.src} alt="" />
            <div className="card_info">
                <h2>{props.title}</h2>
                <h3>{props.description}</h3>
                <h3>{props.price}</h3>
            </div>
        </div>
    )
}
