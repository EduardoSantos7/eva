import React from 'react'
import "components/common/Dropdown/Dropdown.css"

export default function Dropdown() {
    return (
        <div className="dropdown">
            <DropdownItem>Iniciar Sesión</DropdownItem>
            <DropdownItem>Registrarme</DropdownItem>
        </div>
    )
}

function DropdownItem(props:any) {
    return (
      <div className="menu__item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </div>
    );
  }
