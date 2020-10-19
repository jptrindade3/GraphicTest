import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";
import './style.css'


export default function SideMenu(){
    return(
        <div className='side-menu-box'>
            <div className='side-menu-title'>
                <h2>Menu</h2>
            </div>
            <div className='side-menu-item-box'>
            <a href="/">
                item 1
            </a>
                
            </div>
            <div className='side-menu-item-box'>
            <a href="/">
                item 2
            </a>
            </div>
            <div className='side-menu-item-box'>
            <a href="/">
                item 3
            </a>
            </div>
            <div className='side-menu-item-box'>
            <a href="/">
                item 4
            </a>
            </div>

        </div>
    );
}