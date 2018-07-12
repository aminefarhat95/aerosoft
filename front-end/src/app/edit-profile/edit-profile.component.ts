import {Component, Inject, OnInit} from '@angular/core';
import {Membre} from '../model/Membre';
import {MyServiceService} from '../my-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Profile} from '../model/Profile';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  posteUser:string;
  login:string;

  profile: Profile = new Profile();
  idProfile: number;
  profiles:any;
  data:any=[];

  constructor(public activatedRoute: ActivatedRoute, public service: MyServiceService,public router:Router,@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
    this.idProfile = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.data["user"]=this.storage.get("user")
    this.posteUser=this.data["user"].profile.poste;
    this.login=this.data["user"].login;

    this.service.getProfile(this.idProfile)
      .subscribe(data => {
        this.profile = data;
      }, err => {
        console.log(err);
      });
  }
  disconect(){
    this.service.setIslogedFalse();
    this.storage.remove("user");
    this.storage.set("loged",false);
    this.router.navigate(['/'])
  }
  updateProfile() {
    let confirm = window.confirm('est vous sure?');
    if (confirm == true) {
      this.service.updateProfile(this.profile)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(['profiles']);
        }, err => {
          console.log(err);
          alert("Probléme ");
        });
    }
  }

}
