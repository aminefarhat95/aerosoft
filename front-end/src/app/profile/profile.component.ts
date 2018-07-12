import {Component, Inject, OnInit} from '@angular/core';
import {Profile} from '../model/Profile';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import {MyServiceService} from '../my-service.service';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';





@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  posteUser: string;
  selected: Profile = new Profile();
  motCle: string = "";
  profiles: any;
  login: string;
  data: any = [];

  constructor(public http: Http, public service: MyServiceService, public router: Router, @Inject(LOCAL_STORAGE) private storage: WebStorageService) {
  }

  ngOnInit() {
    this.data["user"] = this.storage.get("user")
    this.posteUser = this.data["user"].profile.poste;
    this.login = this.data["user"].login;

    this.service.getProfiles().subscribe(data => {
      this.profiles = data;
      console.log(data);
    }, err => {
      console.log(err);
    })
  }


  export(){
    this.service.export(this.profiles,'profile.xlsx')
  }

  disconect() {
    this.service.setIslogedFalse();
    this.storage.remove("user");
    this.storage.set("loged", false);
    this.router.navigate(['/'])
  }

  onAddProfile(data) {
    let confirm = window.confirm('est vous sure?');
    if (confirm == true) {
      this.service.saveProfile(data)
        .subscribe(data => {
          console.log(data)
          this.profiles.push(data);
        }, err => {
          console.log(err);

        });
    }
  }

  // chercher(){
  //   this.doSearch();
  // }


  onEditProfile(id: string) {
    this.router.navigate(['editProfile', id])
  }

  onDeleteProfile(m: any) {
    let confirm = window.confirm('est vous sure?');
    if (confirm == true) {
      this.service.deleteProfile(m.id_Profile)
        .subscribe(data => {
          this.profiles.splice(this.profiles.indexOf(m), 1);
        }, err => {
          console.log(err);
        });
    }
  }


}



