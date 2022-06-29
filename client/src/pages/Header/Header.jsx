import React from 'react';
import style from "./index.module.css"
import Nav from "../../components/nav/Nav";
const Header = ({Links,headerText}) => {
    const InlineStyle = {
        alignItems: "center",
        justifyContent: "space-evenly"
    }
    return (
           <header className={style.header} style={Links ? InlineStyle : undefined}>
               { Links ? <div className={style.HeaderText}>
                   {headerText.header}
               </div> : undefined }
               { Links ?
                       <Nav links={Links}/>
                   :
               <div className={style.XIpEib + ' ' + style.QRiHXd}>
                   <h1 className={style.Hwv4mb}>
                       <div className="s7ovNb"><img
                           src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
                           alt="Google" height="24px" width="74px"/>&nbsp;<span className={style.IqJTee}>Класс</span>
                       </div>
                   </h1>
               </div>}
               { Links ? <div className={style.HeaderText}>
                   {headerText.group}
               </div> : undefined }
           </header>
    );
};

export default Header;
