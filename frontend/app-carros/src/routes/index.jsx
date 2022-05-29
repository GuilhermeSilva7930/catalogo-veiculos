import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cadastrar from "../pages/cadastrar"
import Entrar from "../pages/entrar"
import Home from "../pages/home"

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/cadastrar" element={<Cadastrar />} />
                <Route path="/entrar" element={<Entrar />} />
            </Routes>
        </BrowserRouter>
    )
}