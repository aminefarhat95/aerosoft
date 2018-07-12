package net.atos.maroc.application.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import net.atos.maroc.application.entities.Utilisateur;

public interface UtilisateurRepository  extends JpaRepository<Utilisateur, String> {
	@Query("select u from Utilisateur u where u.matricule like :x")
	public Page<Utilisateur> chercher(@Param("x")String e,Pageable pageable);
	@Query("select u from Utilisateur u")
	public Page<Utilisateur> chercherAll(Pageable pageable);
	
	@Query("select u from Utilisateur u where u.login = :x and u.password = :y")
	public Utilisateur chercherMembre(@Param("x")String x,@Param("y")String y);
	
}
