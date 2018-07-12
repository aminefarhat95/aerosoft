import {Component, Inject, OnInit} from '@angular/core';
import {MyServiceService} from '../my-service.service'
import {Router} from '@angular/router';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data:any=[];

  constructor(private service:MyServiceService,private router:Router,@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
    this.data["loged"]=this.storage.get("loged");
    if(this.data["loged"]==null)
    {this.storage.set("loged",false);}
 if(this.storage.get("loged")==true)
 {this.router.navigate(['dashboard']);}
    console.log("hay " + this.service.getIsloged());
    console.log("service: "+this.service.user.matricule);
    console.log("session: "+this.storage.get("loged"));

  }

  onCheckMembre(data){
    this.service.getMembre(data.login,data.pass)
      .subscribe(data=>{
        console.log(data);
        this.service.UserLogin(data.profile.poste);
        this.service.loginName=data.login;
        console.log(this.service.getIsloged());
        this.service.user=data;
        this.storage.set("user",data);
        this.storage.set("loged",true);
        console.log(data.profile.poste);

        switch (data.profile.poste)
        {
          case "vst":
            this.router.navigate(['rapports']);
            break;
          case "ingenieur":
            this.router.navigate(['fiches']);
            break;
          case "chargerAffaire":
            this.router.navigate(['traiterProposition']);
            break;
          default:
            this.router.navigate(['dashboard']);
        }

      },err=>{
        alert("votre Login ou password est incorect");
        console.log(this.service.getIsloged());
      });
  }
}
