package net.atos.maroc.application.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Management implements Serializable{
	@Id @GeneratedValue
	private Long id_Management;
	private double cout;
	@ManyToOne
    @JoinColumn(name="id_SMMM")
   private SMMM smmm;
	@ManyToOne
    @JoinColumn(name="id_Categorie")
   private Categorie categorie;
	public Management() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Management(double cout, SMMM smmm, Categorie categorie) {
		super();
	
		this.cout = cout;
		this.smmm = smmm;
		this.categorie = categorie;
	}
	public Long getId_Management() {
		return id_Management;
	}
	public void setId_Management(Long id_Management) {
		this.id_Management = id_Management;
	}
	public double getCout() {
		return cout;
	}
	public void setCout(double cout) {
		this.cout = cout;
	}
	public SMMM getSmmm() {
		return smmm;
	}
	public void setSmmm(SMMM smmm) {
		this.smmm = smmm;
	}
	public Categorie getCategorie() {
		return categorie;
	}
	public void setCategorie(Categorie categorie) {
		this.categorie = categorie;
	}
	
}
