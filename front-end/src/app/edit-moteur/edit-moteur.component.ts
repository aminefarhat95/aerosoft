import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Membre} from '../model/Membre';
import {MyServiceService} from '../my-service.service';
import {Moteur} from '../model/Moteur';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-edit-moteur',
  templateUrl: './edit-moteur.component.html',
  styleUrls: ['./edit-moteur.component.css']
})
export class EditMoteurComponent implements OnInit {
  posteUser:string;
  login:string;

  moteur: Moteur = new Moteur();
  idMoteur: number;
  clients:any;
  data:any=[];

  constructor(public activatedRoute: ActivatedRoute, public service: MyServiceService,public router:Router,@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
    this.idMoteur = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.data["user"]=this.storage.get("user")
    this.posteUser=this.data["user"].profile.poste;
    this.login=this.data["user"].login;

    this.service.getMoteur(this.idMoteur)
      .subscribe(data => {
        this.moteur = data;
      }, err => {
        console.log(err);
      });

    this.service.getClientsAll()
      .subscribe(data => {
      this.clients = data;
      console.log(data);
    }, err => {
      console.log(err);
    })
  }
  disconect(){
    this.service.setIslogedFalse();
    this.storage.remove("user");
    this.storage.set("loged",false);
    this.router.navigate(['/'])
  }
  updateMoteur() {
    let confirm = window.confirm('etes vous sure?');
    if (confirm == true) {

      this.service.updateMoteur(this.moteur)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(['moteurs']);
        }, err => {
          console.log(err);
          alert("Probléme ");
        });
    }
  }
}
