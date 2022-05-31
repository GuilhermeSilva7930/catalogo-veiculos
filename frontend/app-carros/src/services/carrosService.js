import api from "./api/index"

export async function findAll() {
    return (
        await api.get("/veiculos")
    ).data.content
}

export async function findAllByMarca(marca) {
    return (
        await api.get(`/veiculos/marca/${marca}`)
    ).data
}

export async function save(veiculo, token) {
    return (
        await api.post("/veiculos/admin/save", {
            nome: veiculo.nome,
            marca: veiculo.marca,
            modelo: veiculo.modelo,
            foto: veiculo.foto,
            preco: veiculo.preco
        }, {
            headers: {
                "Authorization": token
            }
        })
    ).data
}

export async function update(veiculo, token) {
    return (
        await api.put("/veiculos/admin/update", {
            id: veiculo.id,
            nome: veiculo.nome,
            marca: veiculo.marca,
            modelo: veiculo.modelo,
            foto: veiculo.foto,
            preco: veiculo.preco
        }, {
            headers: {
                "Authorization": token
            }
        })
    ).data
}

export async function deletar(id, token) {
    await api.delete(`/veiculos/admin/delete/${id}`, {
        headers: {
            "Authorization": token,
        }
    })
}