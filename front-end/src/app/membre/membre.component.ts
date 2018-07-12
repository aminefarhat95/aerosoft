import {Component, Inject, OnInit} from '@angular/core';
import {MyServiceService} from '../my-service.service';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {Membre} from '../model/Membre';
import {Profile} from '../model/Profile';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';


@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.css']
})
export class MembreComponent implements OnInit {
  posteUser:string;
  selected:Profile=new Profile();
  pageMembres: any;
  motCle: string = "";
  currentPage: number = 0;
  size: number = 5;
  pages: Array<number>;
  profiles: any;
  login:string;
  data:any=[];
  membres:any;

  constructor(public http: Http, public service: MyServiceService, public router: Router,@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
  }

  ngOnInit() {
    this.data["user"]=this.storage.get("user")
    this.posteUser=this.data["user"].profile.poste;
    this.login=this.data["user"].login;

    this.service.getMembres(this.currentPage, this.size)
      .subscribe(data => {
        this.pageMembres = data;
        this.pages = new Array(data.totalPages);
        console.log(data);
      }, err => {
        console.log(err);
      })
    this.service.getMembresAll()
      .subscribe(data => {
        this.membres=data;
        console.log(data);
      }, err => {
        console.log(err);
      })

    this.service.getProfiles().subscribe(data => {
      this.profiles = data;
      console.log(data);
    }, err => {
      console.log(err);
    })


  }
  export(){
    this.service.export(this.membres,'membre.xlsx')
  }

  disconect(){
    this.service.setIslogedFalse();
    this.storage.remove("user");
    this.storage.set("loged",false);
    this.router.navigate(['/'])
  }
  onAddMembre(data) {
    let confirm = window.confirm('est vous sure?');
    if (confirm == true) {
      this.service.saveMembre(data)
        .subscribe(data => {
          this.pageMembres.content.push(data);

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
        this.pageMembres = data;
        this.pages = new Array(data.totalPages);
        console.log(data);
      }, err => {
        console.log(err);
      })
  }


    onEditMembre(id:string){
      this.router.navigate(['editMembre',id])
    }

  onDeleteMembre(m: any) {
    let confirm = window.confirm('est vous sure?');
    if (confirm == true) {
      this.service.deleteMembre(m.matricule)
        .subscribe(data => {
          this.pageMembres.content.splice(this.pageMembres.content.indexOf(m), 1);
        }, err => {
          console.log(err);
        });
    }
  }
}
