import {Component, Inject, OnInit} from '@angular/core';
import {MyServiceService} from '../my-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FicheMoteur} from '../model/FicheMoteur';
import {Rapport} from '../model/Rapport';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-editrapport',
  templateUrl: './editrapport.component.html',
  styleUrls: ['./editrapport.component.css']
})
export class EditrapportComponent implements OnInit {
  posteUser:string;
  rapport: Rapport = new Rapport();
  id: number;
  login:string;
  fiches: any;
  shops:any;
  data:any=[];

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
    this.service.getFichesAll().subscribe(data => {
      this.fiches = data;
      console.log(data);
    }, err => {
      console.log(err);
    })

    this.service.getShopsAll().subscribe(data => {
      this.shops = data;
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

  updateRapport() {
    let confirm = window.confirm('etes vous sure?');
    if (confirm == true) {
      this.service.updateRapport(this.rapport)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(['rapports']);
        }, err => {
          console.log(err);
          alert("Probléme ");
        });
    }
  }

}
