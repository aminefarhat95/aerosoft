package net.atos.maroc.application.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import net.atos.maroc.application.entities.Client;
import net.atos.maroc.application.entities.Moteur;

public interface MoteurRepository extends JpaRepository<Moteur, Long> {
	
	@Query("select m from Moteur m")
	public Page<Moteur> chercherAll(Pageable pageable);

}
