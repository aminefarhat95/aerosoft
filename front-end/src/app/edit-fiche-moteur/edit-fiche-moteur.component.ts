import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MyServiceService} from '../my-service.service';
import {FicheMoteur} from '../model/FicheMoteur';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-edit-fiche-moteur',
  templateUrl: './edit-fiche-moteur.component.html',
  styleUrls: ['./edit-fiche-moteur.component.css']
})
export class EditFicheMoteurComponent implements OnInit {
  posteUser:string;
  fiche: FicheMoteur = new FicheMoteur();
  id: number;
  login:string;
  data:any=[];

  constructor(public activatedRoute: ActivatedRoute, public service: MyServiceService,public router:Router,@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.data["user"]=this.storage.get("user")
    this.posteUser=this.data["user"].profile.poste;
    this.login=this.data["user"].login;
    this.service.getFiche(this.id)
      .subscribe(data => {
        this.fiche = data;
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

  updateFiche() {
    let confirm = window.confirm('est vous sure?');
    if (confirm == true) {
      this.service.updateFiche(this.fiche)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(['fiches']);
        }, err => {
          console.log(err);
          alert("Probléme ");
        });
    }
  }
}
