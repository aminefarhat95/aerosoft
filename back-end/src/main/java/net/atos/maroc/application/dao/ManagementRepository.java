package net.atos.maroc.application.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import net.atos.maroc.application.entities.Management;


public interface ManagementRepository extends JpaRepository<Management,Long>{

}
