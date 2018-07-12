package net.atos.maroc.application.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import net.atos.maroc.application.dao.ProfileRepository;
import net.atos.maroc.application.entities.Profile;

@RestController
@CrossOrigin("*")
public class ProfileController {

	@Autowired
	private ProfileRepository profileRepository;

	@RequestMapping(value = "/profiles", method = RequestMethod.GET)
	public List<Profile> getProfiles() {
		return profileRepository.findAll();
	}

	@RequestMapping(value = "/profiles/{id}", method = RequestMethod.GET)

	public Profile getProfile(@PathVariable Long id) {
		return profileRepository.findOne(id);
	}

	@RequestMapping(value = "/profiles", method = RequestMethod.POST)
	public Profile save(@RequestBody Profile e) {
		return profileRepository.save(e);
	}

	@RequestMapping(value = "/profiles/{id}", method = RequestMethod.DELETE)
	public boolean supprimer(@PathVariable Long id) {
		profileRepository.delete(id);
		return true;
	}

	@RequestMapping(value = "/profiles/{id}", method = RequestMethod.PUT)
	public Profile update(@PathVariable Long id, @RequestBody Profile e) {
		e.setId_Profile(id);
		return profileRepository.save(e);

	}

}
