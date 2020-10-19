import React from 'react';
import './style.css';

import Header from '../../components/Header';
import SideMenu from '../../components/Sidemenu';
import DataContainer from '../../components/Datacontainer';







//pagina de renderização
export default function GraphPage(){
    return(
        <>
      <Header/>
      <div className = 'main-container'>
      <SideMenu/>
      <DataContainer/>
        </div>

        </>
    );

}
