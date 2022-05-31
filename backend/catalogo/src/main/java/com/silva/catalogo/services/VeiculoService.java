package com.silva.catalogo.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.silva.catalogo.entities.Veiculo;
import com.silva.catalogo.repositories.VeiculoRepository;

@Service
public class VeiculoService {

	@Autowired
	private VeiculoRepository repository;

	public Page<Veiculo> findAllByDescending (Pageable pageable, Sort sorts) {
		Sort sort = Sort.by("preco").descending();
		PageRequest pegeable = PageRequest.of(0, 14, sort);
		return repository.findAll(pegeable);
	}
	
	public Page<Veiculo> findAllByAscending (Pageable pageable, Sort sorts) {
		Sort sort = Sort.by("preco").ascending();
		PageRequest pegeable = PageRequest.of(0, 14, sort);
		return repository.findAll(pegeable);
	}

	public void save(Veiculo veiculo) {
		repository.save(veiculo);
	}

	public void delete(Long id) {
		repository.deleteById(id);
	}

	public List<Veiculo> findAllByMarca(String marca) {
		List<Veiculo> marcas = repository.findAll().stream().filter(veiculo -> veiculo.getMarca().toLowerCase().contains(marca)).collect(Collectors.toList());
		marcas.forEach(veiculo -> System.out.println(veiculo.toString()));
		return marcas;
	}
	
	public List<Veiculo> findAllByModelo(String modelos) {
		var modelo = repository.findAll().stream().filter(veiculo -> veiculo.getModelo().toLowerCase().contains(modelos)).collect(Collectors.toList());
		modelo.forEach(veiculo -> System.out.println(veiculo.toString()));
		return modelo;
	}
}
