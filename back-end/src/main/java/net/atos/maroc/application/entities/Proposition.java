package net.atos.maroc.application.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Proposition implements Serializable{
	@Id
	private String id_proposition;
	private String proposition_tasks;
	private String statut;
	@Temporal(TemporalType.DATE)
	private Date date_proposition;
	@Temporal(TemporalType.DATE)
	private Date date_approbation;
	private boolean accord;
	 @Temporal(TemporalType.DATE)
		private Date csc_init_date;
	 @Temporal(TemporalType.DATE)
	private Date csc_resp_date;
    private double cout_proposition;
    private String remarques;
    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY,
    cascade =  CascadeType.ALL,
    mappedBy = "proposition")
    private Rapport rapport;
    
    
	public Proposition(String id_proposition, String proposition_tasks, String statut, Date date_proposition,
			Date date_approbation, boolean accord,Date csc_init_date,Date csc_resp_date, double cout_proposition,String remarques) {
		super();
		this.id_proposition = id_proposition;
		this.proposition_tasks = proposition_tasks;
		this.statut = statut;
		this.date_proposition = date_proposition;
		this.date_approbation = date_approbation;
		this.accord = accord;
		this.csc_init_date=csc_init_date;
		this.csc_resp_date = csc_resp_date;
		this.cout_proposition = cout_proposition;
		this.remarques=remarques;
	}
	public Proposition() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getId_proposition() {
		return id_proposition;
	}
	public void setId_proposition(String id_proposition) {
		this.id_proposition = id_proposition;
	}
	public String getProposition_tasks() {
		return proposition_tasks;
	}
	public void setProposition_tasks(String proposition_tasks) {
		this.proposition_tasks = proposition_tasks;
	}
	public String getStatut() {
		return statut;
	}
	public void setStatut(String statut) {
		this.statut = statut;
	}
	public Date getDate_proposition() {
		return date_proposition;
	}
	public void setDate_proposition(Date date_proposition) {
		this.date_proposition = date_proposition;
	}
	public Date getDate_approbation() {
		return date_approbation;
	}
	public void setDate_approbation(Date date_approbation) {
		this.date_approbation = date_approbation;
	}
	public boolean isAccord() {
		return accord;
	}
	public void setAccord(boolean accord) {
		this.accord = accord;
	}
	public Date getCsc_resp_date() {
		return csc_resp_date;
	}
	public void setCsc_resp_date(Date csc_resp_date) {
		this.csc_resp_date = csc_resp_date;
	}
	public double getCout_proposition() {
		return cout_proposition;
	}
	public void setCout_proposition(double cout_proposition) {
		this.cout_proposition = cout_proposition;
	}
	public Rapport getRapport() {
		return rapport;
	}
	public void setRapport(Rapport rapport) {
		this.rapport = rapport;
	}
	public String getRemarques() {
		return remarques;
	}
	public void setRemarques(String remarques) {
		this.remarques = remarques;
	}
	public Date getCsc_init_date() {
		return csc_init_date;
	}
	public void setCsc_init_date(Date csc_init_date) {
		this.csc_init_date = csc_init_date;
	}
	
	
    
}
