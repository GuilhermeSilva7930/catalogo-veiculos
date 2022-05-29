import React from "react";
import Navbar from "../../components/navbar/index"
import TextField from '@mui/material/TextField';
import "./index.css"
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Cadastrar = () => {

    const [usuario, setUsuario] = React.useState("");

    const handleChangeUsuario = (event) => {
        setUsuario(event.target.value);
    };

    const [senha, setSenha] = React.useState("");

    const handleChangeSenha = (event) => {
        setSenha(event.target.value);
    };


    return (
        <>
            <Navbar />
            <div className="cadastrar mt-5">
                <h3 className="mb-4">Cadastre-se</h3>
                <div className="container">
                    <div className="row centralizar">
                        <div className="col-md-5 col-sm-12 col-12">
                            <TextField
                                sx={{ width: "100%" }}
                                label="Usuário"
                                onChange={handleChangeUsuario}
                                value={usuario}
                                required="true"
                            />
                        </div>
                    </div>
                    <div className="row centralizar mt-4">
                        <div className="col-md-5 col-sm-12 col-12">
                            <TextField
                                sx={{ width: "100%" }}
                                label="Senha"
                                onChange={handleChangeSenha}
                                value={senha}
                                required="true"
                            />
                        </div>
                    </div>
                    <div className="row centralizar mt-4">
                        <div className="col-md-5 col-sm-12 col-12">
                            <Button sx={{ width: "100%" }} variant="contained" size="large">Seguinte</Button>
                        </div>
                    </div>
                    <div className="centralizar mt-4">
                        <p style={{ fontWeight: "bold" }}>Você já tem conta?
                            <Link className="link" to="/entrar">
                                <span className="svg entrar"> Iniciar Sessão</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cadastrar