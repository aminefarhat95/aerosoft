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

import net.atos.maroc.application.dao.RapportRepository;
import net.atos.maroc.application.entities.FicheMoteur;
import net.atos.maroc.application.entities.Rapport;
import net.atos.maroc.application.entities.Utilisateur;

@RestController
@CrossOrigin("*")
public class RapportController {
	@Autowired
	private RapportRepository rapportRepository;

	@RequestMapping(value = "/rapports", method = RequestMethod.GET)
	public List<Rapport> getRapports() {
		return rapportRepository.findAll();
	}

	@RequestMapping(value = "/rapports/{id}", method = RequestMethod.GET)
	public Rapport getRapport(@PathVariable Long id) {
		return rapportRepository.findOne(id);
	}

	@RequestMapping(value = "/rapports", method = RequestMethod.POST)
	public Rapport save(@RequestBody Rapport e) {
		return rapportRepository.save(e);
	}

	@RequestMapping(value = "/rapports/{id}", method = RequestMethod.DELETE)
	public boolean supprimer(@PathVariable Long id) {
		rapportRepository.delete(id);
		return true;
	}

	@RequestMapping(value = "/rapports/{id}", method = RequestMethod.PUT)
	public Rapport update(@PathVariable Long id, @RequestBody Rapport e) {
		e.setId_Rapport(id);
		return rapportRepository.save(e);

	}
	
	@RequestMapping(value = "/RapportsAll", method = RequestMethod.GET)
	public Page<Rapport> chercherAll(
			@RequestParam(name = "page", defaultValue = "0") int page,
			@RequestParam(name = "size", defaultValue = "5") int size) {
		return rapportRepository.chercherAll(new PageRequest(page, size));
	}
	@RequestMapping(value = "/RapportsIf", method = RequestMethod.GET)
	public Page<Rapport> chercherIf(
			@RequestParam(name = "page", defaultValue = "0") int page,
			@RequestParam(name = "size", defaultValue = "5") int size) {
		return rapportRepository.chercherIf(new PageRequest(page, size));
	}
	
	@RequestMapping(value = "/GetRapports", method = RequestMethod.GET)
	public List<Rapport> GetRapportsIf(@RequestParam(name = "x") String x){
		return rapportRepository.GetRapportsIf(x);
	}
	
	@RequestMapping(value = "/GetRapportsMoteur", method = RequestMethod.GET)
	public List<Rapport> GetRapportsMoteur(@RequestParam(name = "x") Long x){
		return rapportRepository.GetRapportsMoteur(x);
	}
	
	@RequestMapping(value = "/GetPropoApro", method = RequestMethod.GET)
	public List<Rapport> GetPropo(@RequestParam(name = "x") String x){
		return rapportRepository.GetPropos(x);
	}
}
