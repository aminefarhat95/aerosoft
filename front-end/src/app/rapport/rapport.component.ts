import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {MyServiceService} from '../my-service.service';
import {Profile} from '../model/Profile';
import {FicheMoteur} from '../model/FicheMoteur';
import {Moteur} from '../model/Moteur';
import {Shop} from '../model/Shop';
import {Membre} from '../model/Membre';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent implements OnInit {
  login:string;

  user:Membre=new Membre();
  posteUser:string;
  selected:FicheMoteur=new FicheMoteur();
  selected2:Shop=new Shop();
  pageRapport: any;
  motCle: string = "";
  currentPage: number = 0;
  size: number = 5;
  pages: Array<number>;
  fiches: any;
  shops:any;
  rapport:any;
  data:any=[];
  rapports:any;
  propo:any;
  today: number = Date.now();

  constructor(public http: Http, public service: MyServiceService, public router: Router,@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
  }

  ngOnInit() {
    this.data["user"]=this.storage.get("user")
    this.posteUser=this.data["user"].profile.poste;
    this.login=this.data["user"].login;
    this.user=this.data["user"];
    this.service.getRapports(this.currentPage, this.size)
      .subscribe(data => {
        this.pageRapport = data;
        this.pages = new Array(data.totalPages);
        console.log(data);
      }, err => {
        console.log(err);
      })

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
    this.service.getRapportsAll()
      .subscribe(data => {
        this.rapports = data;

        console.log(data);
      }, err => {
        console.log(err);
      })

  }
  export(){
    this.service.export(this.rapports,'rapport.xlsx')
  }
  disconect(){
    this.service.setIslogedFalse();
    this.storage.remove("user");
    this.storage.set("loged",false);
    this.router.navigate(['/'])
  }
  onAddRapport(data) {
    this.rapport={"designation_rapport":data.designation_rapport,"pn":data.pn,"sub_task":data.sub_task,"area":data.area,"finding":data.finding,"family":data.family,"qty":data.qty,"statut":"initiale","manuel":data.manuel,
      "date_creation":this.today,"date_previsionnelle":data.date_previsionnelle,"ficheMoteur":data.ficheMoteur,"utilisateur":this.user,"smmm":data.smmm};
    console.log(this.rapport);

    let confirm = window.confirm('est vous sure?');
    if (confirm == true) {
      this.service.saveRapport(this.rapport)
        .subscribe(data => {
          this.pageRapport.content.push(data);

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
    this.service.getRapports(this.currentPage, this.size)
      .subscribe(data => {
        this.pageRapport = data;
        this.pages = new Array(data.totalPages);
        console.log(data);
      }, err => {
        console.log(err);
      })
  }


  onEditRapport(id:string){
    this.router.navigate(['editRapport',id])
  }

  onDeleteRapport(m: any) {
    let confirm = window.confirm('etes vous sure?');
    if (confirm == true) {
      this.service.deleteRapport(m.id_Rapport)
        .subscribe(data => {
          this.pageRapport.content.splice(this.pageRapport.content.indexOf(m), 1);
        }, err => {
          console.log(err);
        });
    }
  }

}
