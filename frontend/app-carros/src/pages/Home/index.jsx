import React from "react";
import Catalogo from "../../components/catalogo";
import Navbar from "../../components/navbar";
import Pesquisa from "../../components/pesquisa";

const Home = () => {
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <Pesquisa></Pesquisa>
            <Catalogo></Catalogo>
        </React.Fragment>
    )
}

export default Home