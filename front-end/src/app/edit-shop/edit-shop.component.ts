import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Client} from '../model/Client';
import {MyServiceService} from '../my-service.service';
import {Shop} from '../model/Shop';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-edit-shop',
  templateUrl: './edit-shop.component.html',
  styleUrls: ['./edit-shop.component.css']
})
export class EditShopComponent implements OnInit {
  posteUser:string;
  shop: Shop = new Shop();
  id: number;
  shops:any;
  login:string;
  data:any=[];

  constructor(public activatedRoute: ActivatedRoute, public service: MyServiceService,public router:Router,@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.data["user"]=this.storage.get("user")
    this.posteUser=this.data["user"].profile.poste;
    this.login=this.data["user"].login;

    this.service.getShop(this.id)
      .subscribe(data => {
        this.shop = data;
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
  updateShop() {
    let confirm = window.confirm('est vous sure?');
    if (confirm == true) {
      this.service.updateShop(this.shop)
        .subscribe(data => {
          console.log(data);
          this.router.navigate(['shops']);
        }, err => {
          console.log(err);
          alert("Probléme ");
        });
    }
  }
}
