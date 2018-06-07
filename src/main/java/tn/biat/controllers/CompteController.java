package tn.biat.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import tn.biat.domain.Compte;
import tn.biat.repository.IComptesRepository;

@RestController
@CrossOrigin(origins="*")
public class CompteController {
	// Méthode 1
	private IComptesRepository comptesRepository;

	// @Autowired n'est âs n"cessaire depuis v4.3
	public CompteController(IComptesRepository comptesRepository) {
		this.comptesRepository = comptesRepository;
	}

	// Méthode 2
	// @Autowired
	// private IComptesRepository comptesRepository ;

	// @RequestMapping(path = "/comptes", method = RequestMethod.GET)
	@GetMapping(path = "/comptes" )
	public List<Compte> getAllComptes() {
		return comptesRepository.findAll();
	}

	@GetMapping(path = "/comptes/{id}")
	public ResponseEntity<Compte> getCompteById(@PathVariable String id) {
		Optional<Compte> compte = comptesRepository.findById(id);

		if (!compte.isPresent()) {
			return ResponseEntity.notFound().build();

		}
		return ResponseEntity.ok().body(compte.get());

	}

	@PostMapping(path = "/comptes")
	public ResponseEntity<Compte> addCompte(@RequestBody Compte compte) {

		comptesRepository.save(compte);
		return new ResponseEntity<Compte>(compte, HttpStatus.CREATED);
	}

	@PutMapping(path = "/comptes")
	public ResponseEntity<Compte> updateCompte(@RequestBody Compte compte) {

		comptesRepository.save(compte);
		return new ResponseEntity<Compte>(compte, HttpStatus.ACCEPTED);
	}

	@DeleteMapping(path = "/comptes/{id}")
	public ResponseEntity<Compte> deleteCompte(@PathVariable String id) {

		Optional<Compte> compte = comptesRepository.findById(id);
		if (!compte.isPresent()) {
			return ResponseEntity.notFound().build();
		} else {
			comptesRepository.deleteById(id);
			return new ResponseEntity<Compte>(HttpStatus.ACCEPTED);

		}
	}

}
