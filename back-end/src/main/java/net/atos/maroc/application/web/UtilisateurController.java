package net.atos.maroc.application.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import net.atos.maroc.application.dao.UtilisateurRepository;
import net.atos.maroc.application.entities.Utilisateur;

@RestController
@CrossOrigin("*")
public class UtilisateurController {
	@Autowired
	private UtilisateurRepository utilisateurRepository;

	@RequestMapping(value = "/membres", method = RequestMethod.GET)
	public List<Utilisateur> getMembres() {
		return utilisateurRepository.findAll();
	}

	@RequestMapping(value = "/membres/{id}", method = RequestMethod.GET)
	public Utilisateur getMembre(@PathVariable String id) {
		return utilisateurRepository.findOne(id);
	}

	@RequestMapping(value = "/membres", method = RequestMethod.POST)
	public Utilisateur save(@RequestBody Utilisateur e) {
		return utilisateurRepository.save(e);
	}

	@RequestMapping(value = "/membres/{id}", method = RequestMethod.DELETE)
	public boolean supprimer(@PathVariable String id) {
		utilisateurRepository.delete(id);
		return true;
	}

	@RequestMapping(value = "/membres/{id}", method = RequestMethod.PUT)
	public Utilisateur update(@PathVariable String id, @RequestBody Utilisateur e) {
		e.setMatricule(id);
		return utilisateurRepository.save(e);

	}

	@RequestMapping(value = "/chercherMembers", method = RequestMethod.GET)
	public Page<Utilisateur> chercher(@RequestParam(name = "en", defaultValue = "") String en,
			@RequestParam(name = "page", defaultValue = "0") int page,
			@RequestParam(name = "size", defaultValue = "5") int size) {
		return utilisateurRepository.chercher("%" + en + "%", new PageRequest(page, size));
	}
	
	@RequestMapping(value = "/chercherMembre", method = RequestMethod.GET)
	public Utilisateur chercherMembre(@RequestParam(name = "x") String x,@RequestParam(name = "y") String y){
		return utilisateurRepository.chercherMembre(x,y);
	}
	
	@RequestMapping(value = "/chercherAll", method = RequestMethod.GET)
	public Page<Utilisateur> chercherAll(
			@RequestParam(name = "page", defaultValue = "0") int page,
			@RequestParam(name = "size", defaultValue = "5") int size) {
		return utilisateurRepository.chercherAll(new PageRequest(page, size));
	}
	

}
