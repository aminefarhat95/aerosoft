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

import net.atos.maroc.application.dao.CategorieRepository;
import net.atos.maroc.application.dao.ManagementRepository;
import net.atos.maroc.application.dao.SMMMRepository;
import net.atos.maroc.application.entities.Categorie;
import net.atos.maroc.application.entities.Client;
import net.atos.maroc.application.entities.Management;
import net.atos.maroc.application.entities.SMMM;

@RestController
@CrossOrigin("*")
public class SMMMController {
	@Autowired
	private SMMMRepository smmmRepository;
	@Autowired
	private CategorieRepository categorieRepository;
	@Autowired
	private ManagementRepository managementRepository ;
	@RequestMapping(value = "/smmms", method = RequestMethod.GET)
	public List<SMMM> getSMMMs() {
		return smmmRepository.findAll();
	}

	@RequestMapping(value = "/smmms/{id}", method = RequestMethod.GET)
	public SMMM getSMMM(@PathVariable String id) {
		return smmmRepository.findOne(id);
	}

	@RequestMapping(value = "/smmms", method = RequestMethod.POST)
	public SMMM save(@RequestBody SMMM e) {
		return smmmRepository.save(e);
	}

	@RequestMapping(value = "/smmms/{id}", method = RequestMethod.DELETE)
	public boolean supprimer(@PathVariable String id) {
		smmmRepository.delete(id);
		return true;
	}

	@RequestMapping(value = "/smmms/{id}", method = RequestMethod.PUT)
	public SMMM update(@PathVariable String id, @RequestBody SMMM e) {
		e.setId(id);
		return smmmRepository.save(e);

	}

	@RequestMapping(value = "/chercherShops", method = RequestMethod.GET)
	public Page<SMMM> chercher(@RequestParam(name = "en", defaultValue = "") String en,
			@RequestParam(name = "page", defaultValue = "0") int page,
			@RequestParam(name = "size", defaultValue = "5") int size) {
		return smmmRepository.chercher("%" + en + "%", new PageRequest(page, size));
	}
	
	@RequestMapping(value = "/chercherAllShops", method = RequestMethod.GET)
	public Page<SMMM> chercherAll(
			@RequestParam(name = "page", defaultValue = "0") int page,
			@RequestParam(name = "size", defaultValue = "5") int size) {
		return smmmRepository.chercherAll(new PageRequest(page, size));
	}
	

	@RequestMapping(value = "/categories", method = RequestMethod.GET)
	public List<Categorie> GetAllCategories() {
		return categorieRepository.findAll();
	}
	@RequestMapping(value = "/categories", method = RequestMethod.POST)
	public Categorie saveCategorie(@RequestBody Categorie e) {
		return categorieRepository.save(e);
	}

	@RequestMapping(value = "/categories/{id}", method = RequestMethod.DELETE)
	public boolean supprimerCategorie(@PathVariable Long id) {
		categorieRepository.delete(id);
		return true;
	}

	@RequestMapping(value = "/categories/{id}", method = RequestMethod.PUT)
	public Categorie updatecategorie(@PathVariable Long id, @RequestBody Categorie e) {
		e.setId_categorie(id);
		return categorieRepository.save(e);

	}
	
	@RequestMapping(value = "/managements", method = RequestMethod.GET)
	public List<Management> GetAllManagements() {
		return managementRepository.findAll();
	}
	

}
