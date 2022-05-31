import React, { useContext, useEffect, useReducer, useRef, useState } from "react";
import "./index.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BiFilter } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { findAll, findAllByMarca } from "../../services/carrosService";
import { Link } from "react-router-dom";
import { CarroContext } from "../../context/CarroContext";

const Catalogo = () => {

    function mostrarOcultar() {
        const filtros = document.querySelector(".mostrar-ocultar")
        const carros = document.querySelector(".carros")

        if (filtros.style.display === "none") {
            filtros.style.display = "block"
            carros.classList.remove("col-md-12")
        } else {
            filtros.style.display = "none"
            carros.classList.add("col-md-12")
        }
    }

    function filtrosTelaToda() {
        const filtro = document.querySelector(".filtros-tela-toda")

        if (filtro.style.display === "block") {
            filtro.style.display = "none"
        } else {
            filtro.style.display = "block"
        }
    }

    const [mudar, setMudar] = useState(false)

    function mudarNome() {
        setMudar(!mudar)
        console.log(carros)
    }

    const [carros, setCarros] = useState([])

    const { carrosContext, setCarrosContext } = useContext(CarroContext)

    useEffect(() => {
        findAll().then(res => setCarros(res)).catch(res => console.log(res))
    }, [])

    function pesquisar(marca) {
        console.log("teste")
        if (marca === "") {
            setCarrosContext([])
        } else {
            findAllByMarca(marca).then(res => setCarrosContext(res)).catch(res => console.log(res))
            filtrosTelaToda()
        }
    }

    const pesquisaInput = useRef()

    return (
        <div className="container-md">
            <div className="mt-4">
                <h1 className="usados">Carros Usados</h1>

                <Button onClick={filtrosTelaToda} className="btn-filtros" variant="outlined">Filtros</Button>
                <div className="filtros-tela-toda">
                    <div className="filtros-celular">
                        <GrClose className="menu-hamburguer" onClick={filtrosTelaToda}></GrClose>
                        <span className="">Filtros</span>
                        <Link className="link" to="/"><button className="remover-filtros">Remover filtros</button></Link>
                    </div>
                    <Accordion sx={{ boxShadow: "none", marginTop: "25px" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "var(--cor-primaria)", fontSize: "30px" }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Promoção</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <Button variant="outlined">Promoção</Button>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ boxShadow: "none" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "var(--cor-primaria)", fontSize: "30px" }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Marca Modelo</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <input className="filtro-input" ref={pesquisaInput} placeholder="Busca por marca..." type="text" />
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Button className="mostrar-resultados mt-3" onClick={e => pesquisar(pesquisaInput.current.value)} variant="outlined">Mostrar Resultados</Button>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-3 filtros filtros-ocultar mb-2">
                    <button onClick={mostrarOcultar} className="ocultar-filtros">
                        <BiFilter className="svg-filtro"></BiFilter>
                        {mudar
                            ?
                            <span onClick={mudarNome}>Mostrar Filtros</span>
                            :
                            <span onClick={mudarNome}>Ocultar Filtros</span>}
                    </button>
                    <Link className="link" to="/"><button className="remover-filtros">Remover filtros</button></Link>
                </div>
                <div className="col-9 filtros resultados mb-2">
                    <p className="numero-resultados">5.864 Resultados</p>
                    <button className="btn-relevancia">
                        <span className="relevancia">Ordenar: </span>
                        <span className="svg relevancia">Relevancia</span>
                    </button>
                </div>
                <div className="col-md-3 mostrar-ocultar">
                    <hr className="linha-filtros" />
                    <Accordion sx={{ boxShadow: "none" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "var(--cor-primaria)", fontSize: "30px" }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Promoção</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <Button variant="outlined">Promoção</Button>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ boxShadow: "none" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "var(--cor-primaria)", fontSize: "30px" }} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Marca Modelo</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <input className="filtro-input" onChange={e => pesquisar(e.target.value)} placeholder="Busca por marca..." type="text" />
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="col-md-9 col-sm-12 col-12 carros">
                    {carrosContext.length === 0 ?
                        <>
                            {carros.map(carro => (
                                <Card key={carro.id} className="cardPequeno" sx={{ margin: "5px" }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={carro.foto}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {carro.modelo}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {carro.marca}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="large">R$: {carro.preco}</Button>
                                    </CardActions>
                                </Card>
                            ))}
                        </> :
                        <>
                            {carrosContext.map(carro => (
                                <Card key={carro.id} className="cardPequeno" sx={{ margin: "5px" }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={carro.foto}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {carro.modelo}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {carro.marca}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="large">R$: {carro.preco}</Button>
                                    </CardActions>
                                </Card>
                            ))}
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Catalogo