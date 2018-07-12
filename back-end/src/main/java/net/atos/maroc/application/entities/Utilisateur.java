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
public class Utilisateur implements Serializable{
	@Id
	private String matricule ;
	private String login;
	private String password;
	private String fonction;
	private String email;
	@ManyToOne
    @JoinColumn(name="id_Profile")
   private Profile profile;
	@JsonIgnore
	@OneToMany(mappedBy ="utilisateur",fetch = FetchType.LAZY)
    private Collection<FicheMoteur> ficheMoteurs;
	@JsonIgnore
	@OneToMany(mappedBy ="utilisateur",fetch = FetchType.LAZY)
    private Collection<Rapport>rapports ;
	public Utilisateur() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Utilisateur(String matricule, String login, String password, String fonction, String email,
			Profile profile) {
		super();
		this.matricule = matricule;
		this.login = login;
		this.password = password;
		this.fonction = fonction;
		this.email = email;
		this.profile = profile;
	}
	public String getMatricule() {
		return matricule;
	}
	public void setMatricule(String matricule) {
		this.matricule = matricule;
	}
	public String getLogin() {
		return login;
	}
	public void setLogin(String login) {
		this.login = login;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getFonction() {
		return fonction;
	}
	public void setFonction(String fonction) {
		this.fonction = fonction;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Profile getProfile() {
		return profile;
	}
	public void setProfile(Profile profile) {
		this.profile = profile;
	}
	public Collection<FicheMoteur> getFicheMoteurs() {
		return ficheMoteurs;
	}
	public void setFicheMoteurs(Collection<FicheMoteur> ficheMoteurs) {
		this.ficheMoteurs = ficheMoteurs;
	}
	public Collection<Rapport> getRapports() {
		return rapports;
	}
	public void setRapports(Collection<Rapport> rapports) {
		this.rapports = rapports;
	}
	

}
