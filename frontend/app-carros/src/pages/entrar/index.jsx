import React, { useState } from "react";
import Navbar from "../../components/navbar/index"
import "./index.css"
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { entrar } from "../../services/usuarioService";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Entrar = () => {

    const [usuario, setUsuario] = React.useState("");

    const handleChangeUsuario = (event) => {
        setUsuario(event.target.value);
    };

    const [senha, setSenha] = React.useState("");

    const handleChangeSenha = (event) => {
        setSenha(event.target.value);
    };

    const navigate = useNavigate()

    function logar(event) {
        event.preventDefault()
        entrar(usuario, senha).then(res => localStorage.setItem("token", res.headers.authorization)).catch(res => setErro(res.response.status)).finally(res => {
            if (localStorage.getItem("token") !== null) {
                navigate("/")
            }
            console.log(localStorage.getItem("token"))
        })
    }

    const [erro, setErro] = useState()

    return (
        <>
            <Navbar />
            <div className="cadastrar mt-5">
                <h3 className="mb-4">Iniciar sessão</h3>
                <div className="container">
                    <form onSubmit={logar}>
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
                                {erro >= 300 ? <p className="erro mt-3 mb-0">Digite a senha e o usuário corretos</p> : null}
                            </div>
                        </div>
                        <div className="row centralizar mt-4">
                            <div className="col-md-5 col-sm-12 col-12">
                                <Button type="submit" id="btnLogin" sx={{ width: "100%" }} variant="contained" size="large">Iniciar Sessão</Button>
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