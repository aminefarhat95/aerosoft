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
public class SMMM implements Serializable {
	@Id
	
	private String id;
	private String designation;
	private String csc;
	@JsonIgnore
	@OneToMany(mappedBy = "smmm", fetch = FetchType.LAZY)
	private Collection<Rapport> rapports;
	@JsonIgnore
	@OneToMany(mappedBy = "smmm", fetch = FetchType.LAZY)
	private Collection<Management> managements;

	public SMMM() {
		super();
		// TODO Auto-generated constructor stub
	}

	public SMMM(String id,String designation, String csc) {
		super();
		this.id=id;
		this.designation = designation;
		this.csc = csc;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public String getCsc() {
		return csc;
	}

	public void setCsc(String csc) {
		this.csc = csc;
	}

	public Collection<Rapport> getRapports() {
		return rapports;
	}

	public void setRapports(Collection<Rapport> rapports) {
		this.rapports = rapports;
	}

	public Collection<Management> getManagements() {
		return managements;
	}

	public void setManagements(Collection<Management> managements) {
		this.managements = managements;
	}

}
