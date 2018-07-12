package net.atos.maroc.application.entities;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Moteur implements Serializable{
	@Id
	private Long esn;
	private String type_Moteur;
	@ManyToOne
	 @JoinColumn(name="id_Client")
	    private Client client;
	@JsonIgnore
	@OneToMany(mappedBy ="moteur",fetch = FetchType.LAZY)
    private Collection<FicheMoteur> ficheMoteurs;
	 
	public Moteur(Long esn, String type_Moteur, Client client) {
		super();
		this.esn = esn;
		this.type_Moteur = type_Moteur;
		this.client = client;
	}

	public Moteur() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getEsn() {
		return esn;
	}

	public void setEsn(Long esn) {
		this.esn = esn;
	}

	public String getType_Moteur() {
		return type_Moteur;
	}

	public void setType_Moteur(String type_Moteur) {
		this.type_Moteur = type_Moteur;
	}

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	public Collection<FicheMoteur> getFicheMoteurs() {
		return ficheMoteurs;
	}

	public void setFicheMoteurs(Collection<FicheMoteur> ficheMoteurs) {
		this.ficheMoteurs = ficheMoteurs;
	}
	
	

}
