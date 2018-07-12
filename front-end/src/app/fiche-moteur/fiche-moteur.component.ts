import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {MyServiceService} from '../my-service.service';
import {Profile} from '../model/Profile';
import {Moteur} from '../model/Moteur';
import {Membre} from '../model/Membre';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-fiche-moteur',
  templateUrl: './fiche-moteur.component.html',
  styleUrls: ['./fiche-moteur.component.css']
})
export class FicheMoteurComponent implements OnInit {
  login:string;

  fiche:any;
  user:Membre=new Membre();
  posteUser:string;
  selected:Moteur=new Moteur();
  pageFiches: any;
  motCle: string = "";
  currentPage: number = 0;
  size: number = 5;
  pages: Array<number>;
  moteurs: any;
  data:any=[];
  fiches:any;

  constructor(public http: Http, public service: MyServiceService, public router: Router,@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
  }

  ngOnInit() {

    this.data["user"]=this.storage.get("user")
    this.user=this.data["user"];
    this.posteUser=this.data["user"].profile.poste;
    this.login=this.data["user"].login;

    this.service.getFiches(this.currentPage, this.size)
      .subscribe(data => {
        this.pageFiches = data;
        this.pages = new Array(data.totalPages);
        console.log(data);
      }, err => {
        console.log(err);
      })

    this.service.getFichesAll()
      .subscribe(data => {
       this.fiches=data
        console.log(data);
      }, err => {
        console.log(err);
      })
    this.service.getMoteursAll().subscribe(data => {
      this.moteurs = data;
      console.log(data);
    }, err => {
      console.log(err);
    })


  }
  export(){
    this.service.export(this.fiches,'fiche.xlsx')
  }
  disconect(){
    this.service.setIslogedFalse();
    this.storage.remove("user");
    this.storage.set("loged",false);
    this.router.navigate(['/'])
  }

  onAddFiche(data) {

    this.fiche={"numFiche":data.numFiche,"dateSiot":data.dateSiot,"ws":data.ws,"tsn":data.tsn,"csn":data.csn,"moteur":data.moteur,"utilisateur":this.user};

    console.log(this.fiche);
    let confirm = window.confirm('est vous sure?');
    if (confirm == true) {
      this.service.saveFiche(this.fiche)
        .subscribe(data => {
          this.pageFiches.content.push(data);

          console.log(data)
        }, err => {
          console.log(err);

        });
    }
  }

  // chercher(){
  //   this.doSearch();
  // }
  gotoPage(i: number) {
    this.currentPage = i;
    this.service.getMembres(this.currentPage, this.size)
      .subscribe(data => {
        this.pageFiches = data;
        this.pages = new Array(data.totalPages);
        console.log(data);
      }, err => {
        console.log(err);
      })
  }


  onEditFiche(id:string){
    this.router.navigate(['editFiche',id])
  }

  onDeleteFiche(m: any) {
    let confirm = window.confirm('est vous sure?');
    if (confirm == true) {
      this.service.deleteFiche(m.matricule)
        .subscribe(data => {
          this.pageFiches.content.splice(this.pageFiches.content.indexOf(m), 1);
        }, err => {
          console.log(err);
        });
    }
  }
}
