package com.silva.catalogo.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.silva.catalogo.entities.Usuario;
import com.silva.catalogo.repositories.UsuarioRepository;

@RestController
@RequestMapping(value = "/user")
public class UsuarioResource {

	@Autowired
	private UsuarioRepository UsuarioRepository;
	
	@PostMapping
	public ResponseEntity<Usuario> save(@RequestBody Usuario Usuario){
		try {
			PasswordEncoder passwordEncoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
			Usuario.setPassword(passwordEncoder.encode(Usuario.getPassword()));
			UsuarioRepository.save(Usuario);
			return ResponseEntity.ok().body(Usuario);
		}catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return null;
	}
}
