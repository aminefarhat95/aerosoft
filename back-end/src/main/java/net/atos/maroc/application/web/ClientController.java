package net.atos.maroc.application.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import net.atos.maroc.application.dao.ClientRepository;
import net.atos.maroc.application.entities.Client;


@RestController
@CrossOrigin("*")
public class ClientController {
	@Autowired
	private ClientRepository clientRepository;

	@RequestMapping(value = "/clients", method = RequestMethod.GET)
	public List<Client> getClients() {
		return clientRepository.findAll();
	}
	
	@RequestMapping(value = "/clients/{id}", method = RequestMethod.GET)

	public Client getClient(@PathVariable Long id) {
		return clientRepository.findOne(id);
	}
	
	@RequestMapping(value = "/clients", method = RequestMethod.POST)
	public Client save(@RequestBody Client e) {
		return clientRepository.save(e);
	}
	
	@RequestMapping(value = "/clients/{id}", method = RequestMethod.DELETE)
	public boolean supprimer(@PathVariable Long id) {
		clientRepository.delete(id);
		return true;
	}
	
	@RequestMapping(value = "/clients/{id}", method = RequestMethod.PUT)
	public Client update(@PathVariable Long id, @RequestBody Client e) {
		e.setIdClient(id);
		;
		return clientRepository.save(e);

	}
	
	@RequestMapping(value="/chercherClients",method=RequestMethod.GET)
	public Page<Client> chercher(@RequestParam(name="en",defaultValue="") String en,
			@RequestParam(name="page",defaultValue="0")int page,
			@RequestParam(name="size",defaultValue="5")int size){
		return clientRepository.chercher("%"+en+"%", new PageRequest(page, size));
		}
	
	@RequestMapping(value = "/chercherAllClients", method = RequestMethod.GET)
	public Page<Client> chercherAll(
			@RequestParam(name = "page", defaultValue = "0") int page,
			@RequestParam(name = "size", defaultValue = "5") int size) {
		return clientRepository.chercherAll(new PageRequest(page, size));
	}

}