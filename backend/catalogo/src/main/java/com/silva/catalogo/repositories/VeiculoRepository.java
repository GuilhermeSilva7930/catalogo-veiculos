package com.silva.catalogo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.silva.catalogo.entities.Veiculo;

@Repository
public interface VeiculoRepository extends JpaRepository<Veiculo, Long> {
	//@Query("SELECT a FROM veiculo WHERE a.marca like %:marca%")
	//List<Veiculo> findAllByMarca(String marca);
}
