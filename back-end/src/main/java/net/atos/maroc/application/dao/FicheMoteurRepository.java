package net.atos.maroc.application.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import net.atos.maroc.application.entities.FicheMoteur;
import net.atos.maroc.application.entities.Utilisateur;

public interface FicheMoteurRepository extends JpaRepository<FicheMoteur, Long>{
	
	@Query("select f from FicheMoteur f")
	public Page<FicheMoteur> chercherAll(Pageable pageable);
	
}
