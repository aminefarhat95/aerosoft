package net.atos.maroc.application.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import net.atos.maroc.application.entities.Profile;

public interface ProfileRepository  extends JpaRepository<Profile,Long>{

}
