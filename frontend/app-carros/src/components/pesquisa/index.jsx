import React from "react";
import "./index.css"

const Pesquisa = () => {
    return (
        <div className="barra-pesquisa">
            <div className="container">
                <input className="pesquisa" placeholder="Busque por marca, modelo, ano, cor..." type="text" />
            </div>
        </div>
    )
}

export default Pesquisa