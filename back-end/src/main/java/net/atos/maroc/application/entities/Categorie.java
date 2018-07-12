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
public class Categorie implements Serializable {
	@Id
	@GeneratedValue
	private Long id_categorie;
	private String niveau;
	private String designation;
	@JsonIgnore
	@OneToMany(mappedBy = "categorie", fetch = FetchType.LAZY)
	private Collection<Management> managements;

	public Categorie() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Categorie(String niveau, String designation) {
		super();
		this.niveau = niveau;
		this.designation = designation;
	}

	public Long getId_categorie() {
		return id_categorie;
	}

	public void setId_categorie(Long id_categorie) {
		this.id_categorie = id_categorie;
	}

	public String getNiveau() {
		return niveau;
	}

	public void setNiveau(String niveau) {
		this.niveau = niveau;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public Collection<Management> getManagements() {
		return managements;
	}

	public void setManagements(Collection<Management> managements) {
		this.managements = managements;
	}

}
