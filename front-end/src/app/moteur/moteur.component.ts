import {Component, Inject, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {Profile} from '../model/Profile';
import {MyServiceService} from '../my-service.service';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-moteur',
  templateUrl: './moteur.component.html',
  styleUrls: ['./moteur.component.css']
})
export class MoteurComponent implements OnInit {
  login:string;

  posteUser:string;
  selected:Profile=new Profile();
  pageMembres: any;
  motCle: string = "";
  currentPage: number = 0;
  size: number = 5;
  pages: Array<number>;
  clients: any;
  data:any=[];
  moteurs:any;

  constructor(public http: Http, public service: MyServiceService, public router: Router,@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
  }

  ngOnInit() {
    this.data["user"]=this.storage.get("user")
    this.posteUser=this.data["user"].profile.poste;
    this.login=this.data["user"].login;

    this.service.getMoteurs(this.currentPage, this.size)
      .subscribe(data => {
        this.pageMembres = data;
        this.pages = new Array(data.totalPages);
        console.log(data);
      }, err => {
        console.log(err);
      })
    this.service.getMoteursAll()
      .subscribe(data => {
        this.moteurs=data;
        console.log(data);
      }, err => {
        console.log(err);
      })
    this.service.getClientsAll().subscribe(data => {
      this.clients = data;
      console.log(data);
    }, err => {
      console.log(err);
    })


  }
  export(){
    this.service.export(this.moteurs,'moteur.xlsx')
  }
  disconect(){
    this.service.setIslogedFalse();
    this.storage.remove("user");
    this.storage.set("loged",false);
    this.router.navigate(['/'])
  }

  onAddMoteur(data) {
    let confirm = window.confirm('est vous sure?');
    if (confirm == true) {
      this.service.saveMoteur(data)
        .subscribe(data => {
          this.pageMembres.content.push(data);

          console.log(data)
        }, err => {
          console.log(err);

        });
    }
    console.log(data);
  }

  // chercher(){
  //   this.doSearch();
  // }
  gotoPage(i: number) {
    this.currentPage = i;
    this.service.getMoteurs(this.currentPage, this.size)
      .subscribe(data => {
        this.pageMembres = data;
        this.pages = new Array(data.totalPages);
        console.log(data);
      }, err => {
        console.log(err);
      })
  }


  onEditMoteur(id:string){
    this.router.navigate(['editMoteur',id])
  }

  onDeleteMoteur(m: any) {
    let confirm = window.confirm('est vous sure?');
    if (confirm == true) {
      this.service.deleteMoteur(m.esn)
        .subscribe(data => {
          this.pageMembres.content.splice(this.pageMembres.content.indexOf(m), 1);
        }, err => {
          console.log(err);
        });
    }
  }

}
