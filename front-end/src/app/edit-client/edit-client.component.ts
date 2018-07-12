import {Component, Inject, OnInit} from '@angular/core';
import {Profile} from '../model/Profile';
import {MyServiceService} from '../my-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Client} from '../model/Client';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  posteUser:string;
  client: Client = new Client();
  idClient: number;
  clients:any;
  login:string;
  data:any=[];

  constructor(public activatedRoute: ActivatedRoute, public service: MyServiceService,public router:Router,@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
    this.idClient = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.data["user"]=this.storage.get("user")
    this.posteUser=this.data["user"].profile.poste;
    this.login=this.data["user"].login;
    this.service.getClient(this.idClient)
      .subscribe(data => {
        this.client = data;
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

  updateClient() {
    let confirm = window.confirm('est vous sure?');
    if (confirm == true) {
      this.service.updateClient(this.client)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(['clients']);
        }, err => {
          console.log(err);
          alert("Probléme ");
        });
    }
  }
}
