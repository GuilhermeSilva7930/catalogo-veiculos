import api from "./api";

export async function entrar(usuario, senha) {
    return (
        await api.post("/login", {
            username: usuario,
            password: senha
        }
    )
)}

export async function cadastrar(usuario, senha) {
    return (
        await api.post("/user", {
            username: usuario,
            password: senha,
            authorities: "ROLE_USER"
        }
    )
)}