package net.atos.maroc.application.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import net.atos.maroc.application.entities.Proposition;

public interface PropositionRepository extends JpaRepository<Proposition, String>{


}
