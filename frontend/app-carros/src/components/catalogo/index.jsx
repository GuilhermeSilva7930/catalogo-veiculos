import React, { useState } from "react";
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
    }

    return (
        <div className="container-md">
            <div className="mt-4">
                <h1 className="usados">Carros Usados</h1>

                <Button onClick={filtrosTelaToda} className="btn-filtros" variant="outlined">Filtros</Button>
                <div className="filtros-tela-toda">
                    <div className="filtros-celular">
                        <GrClose className="menu-hamburguer" onClick={filtrosTelaToda}></GrClose>
                        <span className="">Filtros</span>
                        <button className="remover-filtros">Remover filtros</button>
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
                                <input className="filtro-input" placeholder="Busca por marca..." type="text" />
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Button className="mostrar-resultados mt-3" variant="outlined">Mostrar Resultados</Button>
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
                    <button className="remover-filtros">Remover filtros</button>
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
                                <input className="filtro-input" placeholder="Busca por marca..." type="text" />
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="col-md-9 col-sm-12 col-12 carros">
                    <Card className="cardPequeno" sx={{ margin: "5px" }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://images.kavak.services/images/150363/EXTERIOR-frontSidePilotNear-1640185821388.jpeg?d=540x310"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Bmw 328i SPORT GP
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                2014 • 93.320 km • São Paulo
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="large">R$ 115.999</Button>
                        </CardActions>
                    </Card>
                    <Card className="cardPequeno" sx={{ minWidth: 200, margin: "5px" }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://images.kavak.services/images/150363/EXTERIOR-frontSidePilotNear-1640185821388.jpeg?d=540x310"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Bmw 328i SPORT GP
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                2014 • 93.320 km • São Paulo
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="large">R$ 115.999</Button>
                        </CardActions>
                    </Card>
                    <Card className="cardPequeno" sx={{ minWidth: 200, margin: "5px" }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://images.kavak.services/images/150363/EXTERIOR-frontSidePilotNear-1640185821388.jpeg?d=540x310"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Bmw 328i SPORT GP
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                2014 • 93.320 km • São Paulo
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="large">R$ 115.999</Button>
                        </CardActions>
                    </Card>
                    <Card className="cardPequeno" sx={{ minWidth: 200, margin: "5px" }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://images.kavak.services/images/150363/EXTERIOR-frontSidePilotNear-1640185821388.jpeg?d=540x310"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Bmw 328i SPORT GP
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                2014 • 93.320 km • São Paulo
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="large">R$ 115.999</Button>
                        </CardActions>
                    </Card>
                    <Card className="cardPequeno" sx={{ minWidth: 200, margin: "5px" }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://images.kavak.services/images/150363/EXTERIOR-frontSidePilotNear-1640185821388.jpeg?d=540x310"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Bmw 328i SPORT GP
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                2014 • 93.320 km • São Paulo
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="large">R$ 115.999</Button>
                        </CardActions>
                    </Card>
                    <Card className="cardPequeno" sx={{ minWidth: 200, margin: "5px" }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://images.kavak.services/images/150363/EXTERIOR-frontSidePilotNear-1640185821388.jpeg?d=540x310"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Bmw 328i SPORT GP
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                2014 • 93.320 km • São Paulo
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="large">R$ 115.999</Button>
                        </CardActions>
                    </Card>
                    <Card className="cardPequeno" sx={{ minWidth: 200, margin: "5px" }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://images.kavak.services/images/150363/EXTERIOR-frontSidePilotNear-1640185821388.jpeg?d=540x310"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Bmw 328i SPORT GP
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                2014 • 93.320 km • São Paulo
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="large">R$ 115.999</Button>
                        </CardActions>
                    </Card>
                    <Card className="cardPequeno" sx={{ minWidth: 200, margin: "5px" }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://images.kavak.services/images/150363/EXTERIOR-frontSidePilotNear-1640185821388.jpeg?d=540x310"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Bmw 328i SPORT GP
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                2014 • 93.320 km • São Paulo
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="large">R$ 115.999</Button>
                        </CardActions>
                    </Card>
                    <Card className="cardPequeno" sx={{ minWidth: 200, margin: "5px" }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://images.kavak.services/images/150363/EXTERIOR-frontSidePilotNear-1640185821388.jpeg?d=540x310"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Bmw 328i SPORT GP
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                2014 • 93.320 km • São Paulo
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="large">R$ 115.999</Button>
                        </CardActions>
                    </Card>
                    <Card className="cardPequeno" sx={{ minWidth: 200, margin: "5px" }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://images.kavak.services/images/150363/EXTERIOR-frontSidePilotNear-1640185821388.jpeg?d=540x310"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Bmw 328i SPORT GP
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                2014 • 93.320 km • São Paulo
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="large">R$ 115.999</Button>
                        </CardActions>
                    </Card>
                    <Card className="cardPequeno" sx={{ minWidth: 200, margin: "5px" }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://images.kavak.services/images/150363/EXTERIOR-frontSidePilotNear-1640185821388.jpeg?d=540x310"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Bmw 328i SPORT GP
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                2014 • 93.320 km • São Paulo
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="large">R$ 115.999</Button>
                        </CardActions>
                    </Card>
                    <Card className="cardPequeno" sx={{ minWidth: 200, margin: "5px" }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://images.kavak.services/images/150363/EXTERIOR-frontSidePilotNear-1640185821388.jpeg?d=540x310"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Bmw 328i SPORT GP
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                2014 • 93.320 km • São Paulo
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="large">R$ 115.999</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Catalogo