import {Component, Inject, OnInit} from '@angular/core';
import {MyServiceService} from '../my-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FicheMoteur} from '../model/FicheMoteur';
import {Rapport} from '../model/Rapport';
import {Proposition} from '../model/Proposition';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-ajout-proposition',
  templateUrl: './ajout-proposition.component.html',
  styleUrls: ['./ajout-proposition.component.css']
})
export class AjoutPropositionComponent implements OnInit {
  posteUser:string;
  rapport: Rapport = new Rapport();
  proposition : Proposition=new Proposition();
  id: number;
  login:string;
  data:any=[];
  today: number = Date.now();
  propo:any;



  constructor(public activatedRoute: ActivatedRoute, public service: MyServiceService,public router:Router,@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.data["user"]=this.storage.get("user")
    this.posteUser=this.data["user"].profile.poste;
    this.login=this.data["user"].login;

    this.service.getRapport(this.id)
      .subscribe(data => {
        this.rapport = data;
      }, err => {
        console.log(err);
      });
  }
  disconect(){
    this.service.setIslogedFalse();
    this.storage.remove("user");
    this.storage.set("loged",false);
    this.router.navigate(['/'])
  }

  onAddProposition(data:any){
    this.proposition.accord=data.accord;
    this.proposition.statut='';
    this.propo={
      "id_proposition":this.proposition.id_proposition,
      "proposition_tasks":this.proposition.proposition_tasks,
      "statut":this.proposition.statut,
      "date_proposition":this.today,
      "date_approbation":this.proposition.date_approbation,
      "accord":this.proposition.accord,
      "csc_init_date":this.proposition.csc_init_date,
      "csc_resp_date":this.proposition.csc_resp_date,
      "cout_proposition":this.proposition.cout_proposition,
      "remarques":this.proposition.remarques

    }
    this.service.saveProposition(this.propo).
      subscribe(data=>{
        this.rapport.proposition=this.propo;
          this.rapport.statut = 'en cours';
        this.service.updateRapport(this.rapport).subscribe(data=>{
          this.router.navigate(['/propositions']);

          console.log(data)
        },err=>{
          console.log(err);
        });
    },err=>{
        console.log(err);
    })

  }

}

