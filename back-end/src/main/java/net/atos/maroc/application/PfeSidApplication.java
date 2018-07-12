package net.atos.maroc.application;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import net.atos.maroc.application.dao.CategorieRepository;
import net.atos.maroc.application.dao.ClientRepository;
import net.atos.maroc.application.dao.FicheMoteurRepository;
import net.atos.maroc.application.dao.ManagementRepository;
import net.atos.maroc.application.dao.MoteurRepository;
import net.atos.maroc.application.dao.ProfileRepository;
import net.atos.maroc.application.dao.PropositionRepository;
import net.atos.maroc.application.dao.RapportRepository;
import net.atos.maroc.application.dao.SMMMRepository;
import net.atos.maroc.application.dao.UtilisateurRepository;
import net.atos.maroc.application.entities.Categorie;
import net.atos.maroc.application.entities.Client;
import net.atos.maroc.application.entities.FicheMoteur;
import net.atos.maroc.application.entities.Management;
import net.atos.maroc.application.entities.Moteur;
import net.atos.maroc.application.entities.Profile;
import net.atos.maroc.application.entities.Proposition;
import net.atos.maroc.application.entities.Rapport;
import net.atos.maroc.application.entities.SMMM;
import net.atos.maroc.application.entities.Utilisateur;

@SpringBootApplication
public class PfeSidApplication  implements CommandLineRunner{
	@Autowired
	private ProfileRepository profileRepository;
	@Autowired
	private ClientRepository clientRepository;
	@Autowired
	private UtilisateurRepository utilisateurRepository;
	@Autowired
	private MoteurRepository moteurRepository;
	@Autowired
	private SMMMRepository smmmRepository;
	@Autowired
	private CategorieRepository categorieRepository;
	@Autowired
	private ManagementRepository managementRepository;
	@Autowired
	private FicheMoteurRepository ficheMoteurRepository;
	@Autowired
	private RapportRepository rapportRepository;
	@Autowired
	private PropositionRepository propositionRepository ;
	public static void main(String[] args) {
		SpringApplication.run(PfeSidApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		DateFormat df=new SimpleDateFormat("dd-MM-yyyy");
		
		Profile p1=profileRepository.save(new Profile("administrateur"));
		Profile p2=profileRepository.save(new Profile("ingenieur"));
		Profile p3=profileRepository.save(new Profile("vst"));
		Profile p4=profileRepository.save(new Profile("chargerAffaire"));
		
		Utilisateur u1= utilisateurRepository.save(new Utilisateur("Sm101","A.Farhat","123456","Chef Service","Farhat@Atos.net",p1));
		Utilisateur u2= utilisateurRepository.save(new Utilisateur("Sm200","S.Benrachid","123456","vst","Benrachid@Atos.net",p3));
		Utilisateur u3= utilisateurRepository.save(new Utilisateur("SM400","M.Jabrane","123456","ingenieur","M.Jabrane@Atos.net",p2));
		Utilisateur u4= utilisateurRepository.save(new Utilisateur("Sm102","J.Sebbani","123456","chargerAffaire","Sebbani@Atos.net",p4));
		
		Client c1=clientRepository.save(new Client("AirEuropa"));
		Client c2=clientRepository.save(new Client("AirBlue"));
		Client c3=clientRepository.save(new Client("AirEgypt"));
		Client c4=clientRepository.save(new Client("AeroTurbine"));
		
		Moteur m1=moteurRepository.save(new Moteur((long) 34526,"CFM-7",c1));
		Moteur m2=moteurRepository.save(new Moteur((long) 45234,"CFM-5",c2));
		Moteur m3=moteurRepository.save(new Moteur((long) 98754,"CFM-3",c3));
		Moteur m4=moteurRepository.save(new Moteur((long) 755678,"CFM-5",c4));
		
		SMMM s1=smmmRepository.save(new SMMM("SM1","designation1","Constructeur1"));
		SMMM s2=smmmRepository.save(new SMMM("SM2","designation2","Constructeur2"));
		SMMM s3=smmmRepository.save(new SMMM("SM3","designation3","Constructeur3"));
		SMMM s4=smmmRepository.save(new SMMM("SM4","designation4","Constructeur4"));
		
		Categorie ca1=categorieRepository.save(new Categorie("1","designation1"));
		Categorie ca2=categorieRepository.save(new Categorie("2","designation2"));
		Categorie ca3=categorieRepository.save(new Categorie("3","designation3"));
		Categorie ca4=categorieRepository.save(new Categorie("4","designation4"));
		
		managementRepository.save(new Management(5000,s2,ca1));
		managementRepository.save(new Management(10000,s3,ca2));
		managementRepository.save(new Management(24450,s4,ca1));
		managementRepository.save(new Management(25000,s3,ca3));
		managementRepository.save(new Management(110000,s1,ca3));
		
		FicheMoteur f1=ficheMoteurRepository.save(new FicheMoteur((long) 1,df.parse("12-05-2018"), "work scope", 4, 6, m1, u3));
		FicheMoteur f2=ficheMoteurRepository.save(new FicheMoteur((long) 2,df.parse("14-05-2018"), "work scope", 5, 67, m3, u3));
		
		Proposition pr1=propositionRepository.save(new Proposition("1", "proposedTask1", "",  df.parse("12-05-2018"), null, true,  null,null, 12000,""));
		Proposition pr2=propositionRepository.save(new Proposition("2", "proposedTask3", "desapprouvé",  df.parse("15-05-2018"),  df.parse("20-05-2018"), false,null,null, 12,""));
		Rapport r1=rapportRepository.save(new Rapport("designation1","PN1","sub1", "area1", "finding1", "family1", "10", "en cours", "manuel", df.parse("12-05-2018"), df.parse("20-05-2018"), f1, u2,s1,pr1));
		Rapport r2=rapportRepository.save(new Rapport("designation2","PN2","sub2", "area2", "finding2", "family2", "25", "terminer", "manuel2", df.parse("15-05-2018"), df.parse("30-05-2018"), f2, u2,s3,pr2));

		Rapport r3=rapportRepository.save(new Rapport("designation3","PN3","sub3", "area3", "finding3", "family3", "25", "initiale", "manuel2", df.parse("15-02-2018"), df.parse("30-05-2018"), f2, u2,s2,null));

		
	}
}
