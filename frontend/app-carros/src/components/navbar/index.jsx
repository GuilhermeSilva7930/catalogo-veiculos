import React, { useState } from "react"
import { VscAccount } from "react-icons/vsc";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { GrMenu } from "react-icons/gr";
import { GrClose } from "react-icons/gr";
import { MdOutlineSell } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import "./index.css"

const Navbar = () => {

    const [conectar, setConectar] = useState(false)
    const [aberto, setAberto] = useState(false)
    const [menu, setMenu] = useState(false)

    return (
        <header className="header">
            <div className="container caixa-nav">
                <div id="logo">Silva</div>
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
                                <p>Cadastre-se</p>
                                <p>Iniciar sessão</p>
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
                    <div className="mt-4 nav-mobile-itens container">
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
                            Sobre nós
                            <MdOutlineKeyboardArrowDown className="svg"></MdOutlineKeyboardArrowDown>
                        </p>
                        <p id="sobre-ajuda">
                            Ajuda
                            <MdOutlineKeyboardArrowDown className="svg"></MdOutlineKeyboardArrowDown>
                        </p>
                    </div>
                </div>
                :
                null}
        </header>
    )
}

export default Navbar