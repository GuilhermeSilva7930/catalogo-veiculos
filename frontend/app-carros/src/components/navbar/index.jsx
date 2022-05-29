import React, { useState } from "react"
import { VscAccount } from "react-icons/vsc";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { GrMenu } from "react-icons/gr";
import { GrClose } from "react-icons/gr";
import { MdOutlineSell } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AccordionDetails from '@mui/material/AccordionDetails';
import "./index.css"
import { Link } from "react-router-dom";

const Navbar = () => {

    const [conectar, setConectar] = useState(false)
    const [aberto, setAberto] = useState(false)
    const [menu, setMenu] = useState(false)

    return (
        <header className="header">
            <div className="container-md caixa-nav">
                <Link className="link" to="/">
                    <div id="logo">Silva</div>
                </Link>
                <nav className="nav">
                    <ul className="ul">
                        <li className="li">Comprar Carro</li>
                        <li className="li">Vender Carro</li>
                        <li className="li">App Silva</li>
                        <li className="li" onClick={() => setAberto(!aberto)}>
                            Sobre nós
                            {aberto ?
                                <React.Fragment>
                                    <MdOutlineKeyboardArrowUp className="svg"></MdOutlineKeyboardArrowUp>
                                    <div className="sobre" onMouseLeave={() => setAberto(false)} >
                                        <p>Onde estamos</p>
                                        <p>Guia de preços</p>
                                        <p>Blog</p>
                                    </div>
                                </React.Fragment>
                                :
                                <MdOutlineKeyboardArrowDown className="svg"></MdOutlineKeyboardArrowDown>
                            }

                        </li>
                        <div className="logoConta" onClick={() => setConectar(!conectar)}>
                            <VscAccount className="icone"></VscAccount>
                            <li className="li">Minha conta</li>
                        </div>
                        {conectar ?
                            <div className="aside" onMouseLeave={() => setConectar(false)}>
                                <Link className="link" to="/cadastrar">
                                    <p className="aside-p">Cadastre-se</p>
                                </Link>
                                <Link className="link" to="/entrar">
                                    <p className="aside-p">Iniciar sessão</p>
                                </Link>
                            </div>
                            :
                            ""
                        }
                    </ul>
                    <div className="caixa-hamburguer" onClick={() => setMenu(!menu)}>
                        {menu ?
                            <GrClose className="menu-hamburguer"></GrClose>
                            :
                            <GrMenu className="menu-hamburguer"></GrMenu>
                        }
                    </div>
                </nav>
            </div>
            {menu
                ?
                <div className="nav-mobile">
                    <div className="mt-4 nav-mobile-itens container-md">
                        <p>
                            <BsCashCoin className="svg-buy-sell"></BsCashCoin>
                            Comprar carro
                        </p>
                        <p>
                            <MdOutlineSell className="svg-buy-sell"></MdOutlineSell>
                            Vender carro
                        </p>
                        <hr />
                        <p>App Silva</p>
                        <p id="sobre-ajuda">
                            <Accordion sx={{ boxShadow: "none", width: "100%" }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: "var(--cor-primaria)", fontSize: "30px" }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{ padding: "0" }}
                                >
                                    <Typography>Sobre nós</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div id="sobre">
                                            <p>Onde estamos</p>
                                            <p>Guia de preços</p>
                                            <p>Blog</p>
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </p>
                        <p id="sobre-ajuda">
                            <Accordion sx={{ boxShadow: "none", width: "100%" }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: "var(--cor-primaria)", fontSize: "30px" }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    sx={{ padding: "0" }}
                                >
                                    <Typography>Ajuda</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div id="sobre">
                                            <p>Perguntas Frequentes</p>
                                            <p>Contato</p>
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </p>
                    </div>
                </div>
                :
                null}
        </header>
    )
}

export default Navbar