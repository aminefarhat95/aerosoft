package net.atos.maroc.application.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import net.atos.maroc.application.entities.SMMM;


public interface SMMMRepository extends JpaRepository<SMMM, String>{

	@Query("select s from SMMM s where s.designation like :x")
	public Page<SMMM> chercher(@Param("x")String e,Pageable pageable);
	
	@Query("select s from SMMM s")
	public Page<SMMM> chercherAll(Pageable pageable);
}
