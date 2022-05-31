import React from "react";
import Navbar from "../../components/navbar/index"
import "./index.css"
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { cadastrar } from "../../services/usuarioService";


const Cadastrar = () => {

    const [usuario, setUsuario] = React.useState("");

    const handleChangeUsuario = (event) => {
        setUsuario(event.target.value);
    };

    const [senha, setSenha] = React.useState("");

    const handleChangeSenha = (event) => {
        setSenha(event.target.value);
    };

    const navigate = useNavigate()

    function registrar() {
        cadastrar(usuario, senha)
        navigate("/entrar")
    }

    return (
        <>
            <Navbar />
            <div className="cadastrar mt-5">
                <h3 className="mb-4">Cadastre-se</h3>
                <form onSubmit={registrar} className="container">
                    <div className="row centralizar">
                        <div className="col-md-5 col-sm-12 col-12">
                            <FormControl variant="standard" sx={{ width: "100%" }}>
                                <InputLabel htmlFor="input-with-icon-adornment">
                                    Usuario
                                </InputLabel>
                                <Input
                                    value={usuario}
                                    onChange={handleChangeUsuario}
                                    required
                                    placeholder="Usuario"
                                    id="input-with-icon-adornment"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>
                    </div>
                    <div className="row centralizar mt-4">
                        <div className="col-md-5 col-sm-12 col-12">
                            <FormControl variant="standard" sx={{ width: "100%" }}>
                                <InputLabel htmlFor="input-with-icon-adornment">
                                    Senha
                                </InputLabel>
                                <Input
                                    onChange={handleChangeSenha}
                                    type="password"
                                    value={senha}
                                    required
                                    sx={{ width: "100%" }}
                                    label="Senha"
                                />
                            </FormControl>
                        </div>
                    </div>
                    <div className="row centralizar mt-4">
                        <div className="col-md-5 col-sm-12 col-12">
                            <Button type="submit" sx={{ width: "100%" }} variant="contained" size="large">Seguinte</Button>
                        </div>
                    </div>
                    <div className="centralizar mt-4">
                        <p style={{ fontWeight: "bold" }}>Você já tem conta?
                            <Link className="link" to="/entrar">
                                <span className="svg entrar"> Iniciar Sessão</span>
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Cadastrar