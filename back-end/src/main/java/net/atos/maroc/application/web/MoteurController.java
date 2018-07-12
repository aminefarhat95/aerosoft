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
import net.atos.maroc.application.dao.MoteurRepository;
import net.atos.maroc.application.entities.Moteur;

@RestController
@CrossOrigin("*")
public class MoteurController {

	@Autowired
	private MoteurRepository moteurRepository;

	@RequestMapping(value = "/moteurs", method = RequestMethod.GET)
	public List<Moteur> getMoteur() {
		return moteurRepository.findAll();
	}

	@RequestMapping(value = "/moteurs/{id}", method = RequestMethod.GET)
	public Moteur getMoteur(@PathVariable Long id) {
		return moteurRepository.findOne(id);
	}

	@RequestMapping(value = "/moteurs", method = RequestMethod.POST)
	public Moteur save(@RequestBody Moteur e) {
		return moteurRepository.save(e);
	}

	@RequestMapping(value = "/moteurs/{id}", method = RequestMethod.DELETE)
	public boolean supprimer(@PathVariable Long id) {
		moteurRepository.delete(id);
		return true;
	}

	@RequestMapping(value = "/moteurs/{id}", method = RequestMethod.PUT)
	public Moteur update(@PathVariable Long id, @RequestBody Moteur e) {
		e.setEsn(id);
		return moteurRepository.save(e);

	}
	
	@RequestMapping(value = "/chercherAllMoteurs", method = RequestMethod.GET)
	public Page<Moteur> chercherAll(
			@RequestParam(name = "page", defaultValue = "0") int page,
			@RequestParam(name = "size", defaultValue = "5") int size) {
		return moteurRepository.chercherAll(new PageRequest(page, size));
	}
}
