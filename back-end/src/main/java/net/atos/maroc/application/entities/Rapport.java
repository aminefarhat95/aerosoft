package net.atos.maroc.application.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Rapport implements Serializable{
   @Id
   @GeneratedValue
   private Long id_Rapport;
   private String designation_rapport;
   private String pn;
   private String sub_task;
   private String area;
   private String finding;
   private String family;
   private String qty;
   private String statut;
   private String manuel;
   @Temporal(TemporalType.DATE)
   private Date date_creation ;
   @Temporal(TemporalType.DATE)
   private Date date_previsionnelle;
   @ManyToOne
   @JoinColumn(name="numFiche")
  private FicheMoteur ficheMoteur;
   @ManyToOne
   @JoinColumn(name="matricule")
  private Utilisateur utilisateur;
   
   @OneToOne
   @JoinColumn(name = "id_proposition")
   private Proposition proposition;
@ManyToOne
   @JoinColumn(name="id_SMMM")
  private SMMM smmm;
public Rapport() {
	super();
	// TODO Auto-generated constructor stub
}

public Rapport(String designation_rapport,String pn, String sub_task, String area, String finding,
		String family, String qty, String statut, String manuel, Date date_creation, Date date_previsionnelle,
		FicheMoteur ficheMoteur, Utilisateur utilisateur, SMMM smmm,Proposition proposition) {
	super();
	
	this.designation_rapport = designation_rapport;
	this.pn=pn;
	this.sub_task = sub_task;
	this.area = area;
	this.finding = finding;
	this.family = family;
	this.qty = qty;
	this.statut = statut;
	this.manuel = manuel;
	this.date_creation = date_creation;
	this.date_previsionnelle = date_previsionnelle;
	this.ficheMoteur = ficheMoteur;
	this.utilisateur = utilisateur;
	this.smmm = smmm;
	this.proposition=proposition;
}
public Utilisateur getUtilisateur() {
	return utilisateur;
}
public void setUtilisateur(Utilisateur utilisateur) {
	this.utilisateur = utilisateur;
}
public Long getId_Rapport() {
	return id_Rapport;
}
public void setId_Rapport(Long id_Rapport) {
	this.id_Rapport = id_Rapport;
}
public String getDesignation_rapport() {
	return designation_rapport;
}
public void setDesignation_rapport(String designation_rapport) {
	this.designation_rapport = designation_rapport;
}
public String getSub_task() {
	return sub_task;
}
public void setSub_task(String sub_task) {
	this.sub_task = sub_task;
}
public String getArea() {
	return area;
}
public void setArea(String area) {
	this.area = area;
}
public String getFinding() {
	return finding;
}
public void setFinding(String finding) {
	this.finding = finding;
}
public String getFamily() {
	return family;
}
public void setFamily(String family) {
	this.family = family;
}
public String getQty() {
	return qty;
}
public void setQty(String qty) {
	this.qty = qty;
}
public String getStatut() {
	return statut;
}
public void setStatut(String statut) {
	this.statut = statut;
}
public String getManuel() {
	return manuel;
}
public void setManuel(String manuel) {
	this.manuel = manuel;
}
public Date getDate_creation() {
	return date_creation;
}
public void setDate_creation(Date date_creation) {
	this.date_creation = date_creation;
}
public Date getDate_previsionnelle() {
	return date_previsionnelle;
}
public void setDate_previsionnelle(Date date_previsionnelle) {
	this.date_previsionnelle = date_previsionnelle;
}
public FicheMoteur getFicheMoteur() {
	return ficheMoteur;
}
public void setFicheMoteur(FicheMoteur ficheMoteur) {
	this.ficheMoteur = ficheMoteur;
}
public Proposition getProposition() {
	return proposition;
}
public void setProposition(Proposition proposition) {
	this.proposition = proposition;
}
   

public SMMM getSmmm() {
	return smmm;
}
public void setSmmm(SMMM smmm) {
	this.smmm = smmm;
}

public String getPn() {
	return pn;
}

public void setPn(String pn) {
	this.pn = pn;
}  


}
