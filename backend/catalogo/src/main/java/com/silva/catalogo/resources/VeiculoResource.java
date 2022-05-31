package com.silva.catalogo.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.silva.catalogo.entities.Veiculo;
import com.silva.catalogo.repositories.VeiculoRepository;
import com.silva.catalogo.services.VeiculoService;

@RestController
@RequestMapping(value = "/veiculos")
@CrossOrigin(origins = "http://localhost:3000/")
public class VeiculoResource {

	@Autowired
	private VeiculoService services;

	@GetMapping
	public Page<Veiculo> findAllByDescending(Pageable pageable, Sort sort) {
		return services.findAllByDescending(pageable, sort);
	}

	@GetMapping("/marca/{marca}")
	public List<Veiculo> findAllByMarca(@PathVariable String marca) {
		return services.findAllByMarca(marca);
	}

	@GetMapping("/modelo/{modelo}")
	public List<Veiculo> findAllByModelo(@PathVariable String modelo) {
		return services.findAllByModelo(modelo);
	}

	@PostMapping("/admin/save")
	public void save(@RequestBody Veiculo veiculo) {
		services.save(veiculo);
	}

	@PutMapping("/admin/update")
	public void update(@RequestBody Veiculo veiculo) {
		services.save(veiculo);
	}

	@DeleteMapping("/admin/delete/{id}")
	public void delete(@PathVariable Long id) {
		services.delete(id);
	}
}
