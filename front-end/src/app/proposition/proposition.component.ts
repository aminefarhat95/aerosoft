import {Component, Inject, OnInit} from '@angular/core';
import {MyServiceService} from '../my-service.service';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {Membre} from '../model/Membre';
import {FicheMoteur} from '../model/FicheMoteur';
import {Shop} from '../model/Shop';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-proposition',
  templateUrl: './proposition.component.html',
  styleUrls: ['./proposition.component.css']
})
export class PropositionComponent implements OnInit {
  login:string;

  user:Membre=new Membre();
  posteUser:string;
  pageRapport: any;
  motCle: string = "";
  currentPage: number = 0;
  size: number = 5;
  pages: Array<number>;
  rapport:any;
  data:any=[];
  propositions:any;

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
    this.service.getPropositionsAll()
      .subscribe(data => {
        this.propositions = data;

        console.log(data);
      }, err => {
        console.log(err);
      })

  }
  export(){
    this.service.export(this.propositions,'proposition.xlsx')
  }
  disconect(){
    this.service.setIslogedFalse();
    this.storage.remove("user");
    this.storage.set("loged",false);
    this.router.navigate(['/'])
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


  onAddProposition(id:string){
    this.router.navigate(['addProposition',id])
  }

}
