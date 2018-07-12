package net.atos.maroc.application.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import net.atos.maroc.application.dao.PropositionRepository;
import net.atos.maroc.application.entities.Proposition;
import net.atos.maroc.application.entities.Rapport;

@RestController
@CrossOrigin("*")
public class PropositionController {
	@Autowired
	private PropositionRepository propositionRepository;

	@RequestMapping(value = "/propositions", method = RequestMethod.GET)
	public List<Proposition> getPropositons() {
		return propositionRepository.findAll();
	}

	@RequestMapping(value = "/propositions/{id}", method = RequestMethod.GET)
	public Proposition getPropositons(@PathVariable String id) {
		return propositionRepository.findOne(id);
	}

	@RequestMapping(value = "/propositions", method = RequestMethod.POST)
	public Proposition save(@RequestBody Proposition e) {
		return propositionRepository.save(e);
	}

	@RequestMapping(value = "/propositions/{id}", method = RequestMethod.DELETE)
	public boolean supprimer(@PathVariable String id) {
		propositionRepository.delete(id);
		return true;
	}

	@RequestMapping(value = "/propositions/{id}", method = RequestMethod.PUT)
	public Proposition update(@PathVariable String id, @RequestBody Proposition e) {
		e.setId_proposition(id);
		return propositionRepository.save(e);

	}
	
}
