import {Component, Inject, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {MyServiceService} from '../my-service.service';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {Router} from '@angular/router';
import {Membre} from '../model/Membre';

@Component({
  selector: 'app-detail-proposition',
  templateUrl: './detail-proposition.component.html',
  styleUrls: ['./detail-proposition.component.css']
})
export class DetailPropositionComponent implements OnInit {
  user:Membre=new Membre();
  login:string;
  posteUser:string;
  pageRapport: any;
  motCle: string = "";
  currentPage: number = 0;
  size: number = 5;
  pages: Array<number>;
  data:any=[];
  today: number = Date.now();

  constructor(public http: Http, public service: MyServiceService, public router: Router,@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

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
        console.log("date est: "+this.today);
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

}
