package net.atos.maroc.application.entities;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Profile implements Serializable {
	@Id
	@GeneratedValue
	private Long id_Profile;
	private String poste;
	@JsonIgnore
	@OneToMany(mappedBy = "profile", fetch = FetchType.LAZY)
	private Collection<Utilisateur> utilisateurs;

	public Profile() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Profile(String poste) {
		super();
		this.id_Profile = id_Profile;
		this.poste = poste;
	}

	public Long getId_Profile() {
		return id_Profile;
	}

	public void setId_Profile(Long id_Profile) {
		this.id_Profile = id_Profile;
	}

	public String getPoste() {
		return poste;
	}

	public void setPoste(String poste) {
		this.poste = poste;
	}

	public Collection<Utilisateur> getUtilisateurs() {
		return utilisateurs;
	}

	public void setUtilisateurs(Collection<Utilisateur> utilisateurs) {
		this.utilisateurs = utilisateurs;
	}

}
