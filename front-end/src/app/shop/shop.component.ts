import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {MyServiceService} from '../my-service.service';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  pageShop: any;
  motCle: string = "";
  currentPage: number = 0;
  size: number = 5;
  pages: Array<number>;
  posteUser:string;
  login:string;
  data:any=[];
  shops:any;


  constructor(public http: Http, public service: MyServiceService, public router: Router,@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
    this.data["user"]=this.storage.get("user")
    this.posteUser=this.data["user"].profile.poste;
    this.login=this.data["user"].login;
    this.service.getShops(this.currentPage, this.size)
      .subscribe(data => {
        this.pageShop = data;
        this.pages = new Array(data.totalPages);
        console.log(data);
      }, err => {
        console.log(err);
      })

    this.service.getShopsAll()
      .subscribe(data => {
        this.shops = data;

        console.log(data);
      }, err => {
        console.log(err);
      })

  }
  export(){
    this.service.export(this.shops,'shop.xlsx')
  }
  disconect(){
    this.service.setIslogedFalse();
    this.storage.remove("user");
    this.storage.set("loged",false);
    this.router.navigate(['/'])
  }

  onAddShop(data) {
    let confirm = window.confirm('est vous sure?');
    if (confirm == true) {
      this.service.saveShop(data)
        .subscribe(data => {
          this.pageShop.content.push(data);

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
    this.service.getShops(this.currentPage, this.size)
      .subscribe(data => {
        this.pageShop = data;
        this.pages = new Array(data.totalPages);
        console.log(data);
      }, err => {
        console.log(err);
      })
  }


  onEditShop(id:string){
    this.router.navigate(['editShop',id])
  }

  onDeleteShop(m: any) {
    let confirm = window.confirm('est vous sure?');
    if (confirm == true) {
      this.service.deleteShop(m.id)
        .subscribe(data => {
          this.pageShop.content.splice(this.pageShop.content.indexOf(m), 1);
        }, err => {
          console.log(err);
        });
    }
  }

}
