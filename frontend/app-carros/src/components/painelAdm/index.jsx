import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deletar, findAll } from "../../services/carrosService";
import Navbar from "../navbar";

const PainelAdm = () => {

    const [carros, setCarros] = useState([])

    useEffect(() => {
        findAll().then(res => setCarros(res)).catch(res => console.log(res))
    }, [])

    function del(id) {
        deletar(id, localStorage.getItem("token")).then(res => console.log(res)).catch(res => console.log(res))
        alert("Veiculo apagado")
        window.location.reload()
    }

    const navigate = useNavigate()

    function atualizar(carro) {
        localStorage.setItem("marca", carro.marca)
        localStorage.setItem("modelo", carro.modelo)
        localStorage.setItem("modelo", carro.modelo)
        localStorage.setItem("foto", carro.foto)
        localStorage.setItem("preco", carro.preco)
        localStorage.setItem("id", carro.id)
        navigate("/admin/atualizar")
    }

    return (
        <React.Fragment>
            <Navbar></Navbar>
            <div className="container">
                <table className="table mt-5" border="1">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Marca</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Modelo</th>
                            <th scope="col">Foto</th>
                            <th scope="col">Preco</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carros.map(carro => (
                            <tr key={carro.id}>
                                <th scope="row">{carro.id}</th>
                                <td>{carro.marca}</td>
                                <td>{carro.nome}</td>
                                <td>{carro.modelo}</td>
                                <td><a target={"_blank"} href={carro.foto}>{carro.foto}</a></td>
                                <td>R$: {carro.preco}</td>
                                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                    <button onClick={() => del(carro.id)} type="button" className="btn btn-danger">Deletar</button>
                                    <button type="button" onClick={() => atualizar(carro)} className="btn btn-warning">Editar</button>
                                </div>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Link to="/admin/cadastrar">
                    <button type="button" className="btn btn-success">Adicionar carros</button>
                </Link>
            </div>
        </React.Fragment>
    )
}

export default PainelAdm