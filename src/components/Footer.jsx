import React from "react";

const today = new Date();
const year = today.getFullYear();

const Footer = ()=>{
    return <footer>
        <p>Copyright &copy; {year}</p>
    </footer>
}

export default Footer;