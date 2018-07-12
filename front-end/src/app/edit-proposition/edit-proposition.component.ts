import {Component, Inject, OnInit} from '@angular/core';
import {MyServiceService} from '../my-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Proposition} from '../model/Proposition';
import {Rapport} from '../model/Rapport';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-edit-proposition',
  templateUrl: './edit-proposition.component.html',
  styleUrls: ['./edit-proposition.component.css']
})
export class EditPropositionComponent implements OnInit {
  posteUser:string;
  rapport: Rapport = new Rapport();
  proposition : Proposition=new Proposition();
  id: number;
  login:string;
  data:any=[];
  propo:any;
  today: number = Date.now();
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

  updateProposition(data:any){
    this.rapport.statut='terminer';
    this.propo={
      "id_proposition":this.rapport.proposition.id_proposition,
      "proposition_tasks":this.rapport.proposition.proposition_tasks,
      "statut":this.rapport.proposition.statut,
      "date_proposition":this.rapport.proposition.date_proposition,
      "date_approbation":this.today,
      "accord":this.rapport.proposition.accord,
      "csc_init_date":this.rapport.proposition.csc_init_date,
      "csc_resp_date":this.rapport.proposition.csc_resp_date,
      "cout_proposition":this.rapport.proposition.cout_proposition,
      "remarques":this.rapport.proposition.remarques

    }

  this.service.updateProposition(this.propo).subscribe(data=>{
    this.service.updateRapport(this.rapport).subscribe(data=>{
      console.log(data)
    },err=>{
      console.log(err);
    });
    console.log(data);
    this.router.navigate(['traiterProposition']);
  },err=>{
    console.log(err);
  })

  }
}
