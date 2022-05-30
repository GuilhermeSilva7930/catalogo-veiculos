package com.silva.catalogo.services;

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

	public Page<Veiculo> findAll(Pageable pageable, Sort sorts) {
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

}
