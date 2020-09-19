import React from 'react';
import ProfilPhoto from "./profile/ProfilPhoto.js";
import FullName from "./profile/FullName.js";
import Address from "./profile/Address.js";
import './Main.css'

function Main() {
    return (
        <div className="Main">
        <ProfilPhoto/>
        
        <FullName/>
        
        <Address/>
    
        </div>
    );
}


export default Main;