package net.atos.maroc.application.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import net.atos.maroc.application.entities.Categorie;

public interface CategorieRepository extends JpaRepository<Categorie, Long>{

}
