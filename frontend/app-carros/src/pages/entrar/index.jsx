import React from "react";
import Navbar from "../../components/navbar/index"
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Entrar = () => {

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
                <h3 className="mb-4">Iniciar sessão</h3>
                <div className="container">
                    <form>
                        <div className="row centralizar">
                            <div className="col-md-5 col-sm-12 col-12">
                                <TextField
                                    value={usuario}
                                    onChange={handleChangeUsuario}
                                    required="true"
                                    sx={{ width: "100%" }}
                                    label="Usuário"
                                />
                            </div>
                        </div>
                        <div className="row centralizar mt-4">
                            <div className="col-md-5 col-sm-12 col-12">
                                <TextField
                                    value={senha}
                                    onChange={handleChangeSenha}
                                    required="true"
                                    sx={{ width: "100%" }}
                                    label="Senha"
                                />
                            </div>
                        </div>
                        <div className="row centralizar mt-4">
                            <div className="col-md-5 col-sm-12 col-12">
                                <Button id="btnLogin" sx={{ width: "100%" }} variant="contained" size="large">Iniciar Sessão</Button>
                            </div>
                        </div>
                    </form>
                    <div className="centralizar mt-4">
                        <p style={{ fontWeight: "bold" }}>Não possui conta?
                            <Link className="link" to="/cadastrar">
                                <span className="svg entrar"> Cadastre-se</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Entrar