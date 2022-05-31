import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { save, update } from "../../services/carrosService";
import "./index.css"
import Navbar from "../navbar";

export const PainelAdmCadastrar = () => {

    const marca = useRef()
    const nome = useRef()
    const modelo = useRef()
    const foto = useRef()
    const preco = useRef()


    function salvarCarro(event) {
        event.preventDefault()
        const carros = {
            nome: nome.current.value,
            marca: marca.current.value,
            modelo: modelo.current.value,
            foto: foto.current.value,
            preco: preco.current.value
        }
        save(carros, localStorage.getItem("token")).then(res => console.log(res)).catch(res => console.log(res))
        window.location.reload()
    }

    return (
        <React.Fragment>
            <Navbar></Navbar>
            <div className="container mt-5">
                <h1>Cadastrar carros</h1>
                <form onSubmit={salvarCarro} >
                    <label className="mt-2">Nome do Carro</label>
                    <input ref={nome} required className="pesquisa svg" style={{ border: "solid 1px black" }} type="text" />
                    <label className="mt-2">Marca do Carro</label>
                    <input ref={marca} required className="pesquisa svg" style={{ border: "solid 1px black" }} type="text" />
                    <label className="mt-2">Modelo do Carro</label>
                    <input ref={modelo} required className="pesquisa svg" style={{ border: "solid 1px black" }} type="text" />
                    <label className="mt-2">Link da foto do Carro</label>
                    <input ref={foto} required className="pesquisa svg" style={{ border: "solid 1px black" }} type="text" />
                    <label className="mt-2">Preco do Carro</label>
                    <input ref={preco} required className="pesquisa svg" style={{ border: "solid 1px black" }} type="text" />

                    <div className="mt-3">
                        <button type="submit" className="btn btn-success me-3">Salvar carros</button>
                        <Link to="/admin">
                            <button type="button" className="btn btn-primary">Voltar carros</button>
                        </Link>
                    </div>
                </form>
            </div>
        </React.Fragment >
    )
}

export const PainelAdmAtualizar = () => {

    const marca = useRef()
    const nome = useRef()
    const modelo = useRef()
    const foto = useRef()
    const preco = useRef()
    const id = useRef()

    const navigate = useNavigate()

    function salvarCarro(event) {
        event.preventDefault()
        const carros = {
            id: id.current.value,
            nome: nome.current.value,
            marca: marca.current.value,
            modelo: modelo.current.value,
            foto: foto.current.value,
            preco: preco.current.value
        }
        update(carros, localStorage.getItem("token")).then(res => console.log(res)).catch(res => console.log(res))
        navigate("/admin")
    }

    return (
        <React.Fragment>
            <Navbar></Navbar>
            <div className="container mt-5">
                <h1>Atualizar carros</h1>
                <form onSubmit={salvarCarro} >
                    <label className="mt-2">Id do Carro</label>
                    <input ref={id} value={localStorage.getItem("id")} disabled required className="pesquisa svg" style={{ border: "solid 1px black" }} type="text" />
                    <label className="mt-2">Nome do Carro</label>
                    <input ref={nome} defaultValue={localStorage.getItem("nome")} required className="pesquisa svg" style={{ border: "solid 1px black" }} type="text" />
                    <label className="mt-2">Marca do Carro</label>
                    <input ref={marca} defaultValue={localStorage.getItem("marca")} required className="pesquisa svg" style={{ border: "solid 1px black" }} type="text" />
                    <label className="mt-2">Modelo do Carro</label>
                    <input ref={modelo} defaultValue={localStorage.getItem("modelo")} required className="pesquisa svg" style={{ border: "solid 1px black" }} type="text" />
                    <label className="mt-2">Link da foto do Carro</label>
                    <input ref={foto} defaultValue={localStorage.getItem("foto")} required className="pesquisa svg" style={{ border: "solid 1px black" }} type="text" />
                    <label className="mt-2">Preco do Carro</label>
                    <input ref={preco} defaultValue={localStorage.getItem("preco")} required className="pesquisa svg" style={{ border: "solid 1px black" }} type="text" />

                    <div className="mt-3">
                        <button type="submit" className="btn btn-success me-3">Salvar carros</button>
                        <Link to="/admin">
                            <button type="button" className="btn btn-primary">Voltar carros</button>
                        </Link>
                    </div>
                </form>
            </div>
        </React.Fragment >
    )
}