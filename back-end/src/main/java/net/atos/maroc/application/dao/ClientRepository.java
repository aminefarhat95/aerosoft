package net.atos.maroc.application.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import net.atos.maroc.application.entities.Client;
import net.atos.maroc.application.entities.Utilisateur;

public interface ClientRepository extends JpaRepository<Client, Long> {

	@Query("select c from Client c where c.nom like :x")
	public Page<Client> chercher(@Param("x")String e,Pageable pageable);
	@Query("select c from Client c")
	public Page<Client> chercherAll(Pageable pageable);
}
