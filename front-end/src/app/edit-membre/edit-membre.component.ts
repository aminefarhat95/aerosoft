import {Component, Inject, OnInit} from '@angular/core';
import {MyServiceService} from '../my-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Membre} from '../model/Membre';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-edit-membre',
  templateUrl: './edit-membre.component.html',
  styleUrls: ['./edit-membre.component.css']
})
export class EditMembreComponent implements OnInit {
  posteUser:string;
  login:string;

  membre: Membre = new Membre();
  idMembre: string;
  profiles:any;
  data:any=[];

  constructor(public activatedRoute: ActivatedRoute, public service: MyServiceService,public router:Router,@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
    this.idMembre = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.data["user"]=this.storage.get("user")
    this.posteUser=this.data["user"].profile.poste;
    this.login=this.data["user"].login;

    this.service.getMembreId(this.idMembre)
      .subscribe(data => {
        this.membre = data;
      }, err => {
        console.log(err);
      });

    this.service.getProfiles().subscribe(data => {
      this.profiles = data;
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

  updateMembre() {
    let confirm = window.confirm('est vous sure?');
    if (confirm == true) {
      this.service.updateMembre(this.membre)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(['membres']);
        }, err => {
          console.log(err);
          alert("Probléme ");
        });
    }
  }
}
