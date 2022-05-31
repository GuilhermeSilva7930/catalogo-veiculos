import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PainelAdm from "../components/painelAdm"
import { PainelAdmAtualizar, PainelAdmCadastrar } from "../components/painelAdm/cadastrar"
import CarroProvider from "../context/CarroContext"
import Cadastrar from "../pages/cadastrar"
import Entrar from "../pages/entrar"
import Home from "../pages/home/index"

export default function Rotas() {
    return (
        <CarroProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Home />} />
                    <Route path="/cadastrar" element={<Cadastrar />} />
                    <Route path="/entrar" element={<Entrar />} />
                    <Route path="/admin" element={<PainelAdm />} />
                    <Route path="/admin/cadastrar" element={<PainelAdmCadastrar />} />
                    <Route path="/admin/atualizar" element={<PainelAdmAtualizar />} />
                </Routes>
            </BrowserRouter>
        </CarroProvider>
    )
}