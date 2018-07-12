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
public class Client implements Serializable {

	@Id
	@GeneratedValue
	private Long id_Client;
	private String nom;
	@JsonIgnore
	@OneToMany(mappedBy = "client", fetch = FetchType.LAZY)
	private Collection<Moteur> moteurs;

	public Client() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Client(String nom) {
		super();
		this.nom = nom;
	}

	public Long getIdClient() {
		return id_Client;
	}

	public void setIdClient(Long idClient) {
		this.id_Client = idClient;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public Collection<Moteur> getMoteurs() {
		return moteurs;
	}

	public void setMoteurs(Collection<Moteur> moteurs) {
		this.moteurs = moteurs;
	}

}
