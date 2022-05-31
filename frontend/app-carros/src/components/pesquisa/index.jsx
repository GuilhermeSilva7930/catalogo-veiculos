import React, { useContext } from "react";
import { CarroContext } from "../../context/CarroContext";
import { findAllByMarca } from "../../services/carrosService";
import "./index.css"

const Pesquisa = () => {

    const { setCarrosContext } = useContext(CarroContext)

    function pesquisar(marca) {
        if (marca === "") {
            setCarrosContext([])
        } else {
            findAllByMarca(marca).then(res => setCarrosContext(res)).catch(res => console.log(res))
        }
    }

    return (
        <div className="barra-pesquisa">
            <div className="container-md">
                <input className="pesquisa" onChange={(e) => pesquisar(e.target.value)} placeholder="Busque por marca e modelo..." type="text" />
            </div>
        </div>
    )
}

export default Pesquisa