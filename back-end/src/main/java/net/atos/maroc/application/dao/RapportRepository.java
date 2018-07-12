package net.atos.maroc.application.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import net.atos.maroc.application.entities.Rapport;
import net.atos.maroc.application.entities.Utilisateur;

public interface RapportRepository extends JpaRepository<Rapport, Long>{
	@Query("select r from Rapport r")
	public Page<Rapport> chercherAll(Pageable pageable);
	
	@Query("select r from Rapport r inner join r.proposition pr where pr.accord=1 ")
	public Page<Rapport> chercherIf(Pageable pageable);

	@Query("select r from Rapport r inner join r.utilisateur pr where pr.matricule = :x ")
	public List<Rapport> GetRapportsIf(@Param("x")String x);
	
	@Query("select r from Rapport r inner join r.ficheMoteur pr inner join pr.moteur m where m.esn = :x ")
	public List<Rapport> GetRapportsMoteur(@Param("x")Long x);
	
	@Query("select r from Rapport r inner join r.proposition p inner join r.ficheMoteur pr inner join pr.utilisateur m where m.matricule = :x and p.statut='Approuver' ")
	public List<Rapport> GetPropos(@Param("x")String x);
}
