package net.atos.maroc.application.entities;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class FicheMoteur implements Serializable {

	@Id
	private Long numFiche;
	@Temporal(TemporalType.DATE)
	private Date dateSiot;
	private String ws;
	private int tsn;
	private int csn;
	@ManyToOne
	@JoinColumn(name = "esn_Moteur")
	private Moteur moteur;
	@ManyToOne
	@JoinColumn(name = "matricule_utilisateur")
	private Utilisateur utilisateur;
	@JsonIgnore
	@OneToMany(mappedBy = "ficheMoteur", fetch = FetchType.LAZY)
	private Collection<Rapport> rapports;

	public FicheMoteur() {
		super();
		// TODO Auto-generated constructor stub
	}

	public FicheMoteur(Long numFiche,Date dateSiot, String ws, int tsn, int csn, Moteur moteur, Utilisateur utilisateur) {
		super();
		this.numFiche=numFiche;
		this.dateSiot = dateSiot;
		this.ws = ws;
		this.tsn = tsn;
		this.csn = csn;
		this.moteur = moteur;
		this.utilisateur = utilisateur;
	}

	public Long getNumFiche() {
		return numFiche;
	}

	public void setNumFiche(Long numFiche) {
		this.numFiche = numFiche;
	}

	public Date getDateSiot() {
		return dateSiot;
	}

	public void setDateSiot(Date dateSiot) {
		this.dateSiot = dateSiot;
	}

	public String getWs() {
		return ws;
	}

	public void setWs(String ws) {
		this.ws = ws;
	}

	public int getTsn() {
		return tsn;
	}

	public void setTsn(int tsn) {
		this.tsn = tsn;
	}

	public int getCsn() {
		return csn;
	}

	public void setCsn(int csn) {
		this.csn = csn;
	}

	public Moteur getMoteur() {
		return moteur;
	}

	public void setMoteur(Moteur moteur) {
		this.moteur = moteur;
	}

	public Utilisateur getUtilisateur() {
		return utilisateur;
	}

	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}

	public Collection<Rapport> getRapports() {
		return rapports;
	}

	public void setRapports(Collection<Rapport> rapports) {
		this.rapports = rapports;
	}

}
