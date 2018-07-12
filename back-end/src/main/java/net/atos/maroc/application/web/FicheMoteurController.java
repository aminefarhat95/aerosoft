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

import net.atos.maroc.application.dao.FicheMoteurRepository;
import net.atos.maroc.application.entities.FicheMoteur;

@RestController
@CrossOrigin("*")
public class FicheMoteurController {
	@Autowired
	private FicheMoteurRepository ficheMoteurRepository;

	@RequestMapping(value = "/fiches", method = RequestMethod.GET)
	public List<FicheMoteur> getFiches() {
		return ficheMoteurRepository.findAll();
	}

	@RequestMapping(value = "/fiches/{id}", method = RequestMethod.GET)
	public FicheMoteur getFiche(@PathVariable Long id) {
		return ficheMoteurRepository.findOne(id);
	}

	@RequestMapping(value = "/fiches", method = RequestMethod.POST)
	public FicheMoteur save(@RequestBody FicheMoteur e) {
		return ficheMoteurRepository.save(e);
	}

	@RequestMapping(value = "/fiches/{id}", method = RequestMethod.DELETE)
	public boolean supprimer(@PathVariable Long id) {
		ficheMoteurRepository.delete(id);
		return true;
	}

	@RequestMapping(value = "/fiches/{id}", method = RequestMethod.PUT)
	public FicheMoteur update(@PathVariable Long id, @RequestBody FicheMoteur e) {
		e.setNumFiche(id);
		return ficheMoteurRepository.save(e);

	}
	
	@RequestMapping(value = "/fichesAll", method = RequestMethod.GET)
	public Page<FicheMoteur> chercherAll(
			@RequestParam(name = "page", defaultValue = "0") int page,
			@RequestParam(name = "size", defaultValue = "5") int size) {
		return ficheMoteurRepository.chercherAll(new PageRequest(page, size));
	}
	

}
