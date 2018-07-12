import {Component, Inject, OnInit} from '@angular/core';
import {MyServiceService} from '../my-service.service';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import * as pdfMake from 'pdfmake.min.js';
import * as pdfFonts from 'vfs_fonts.js';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']

})
export class ClientComponent implements OnInit {
  posteUser:string;
  pageClient: any;
  motCle: string = "";
  currentPage: number = 0;
  size: number = 5;
  pages: Array<number>;
  login:string;
  data:any=[];
  clients:any[];

  constructor(public http: Http, public service: MyServiceService, public router: Router,@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }

  ngOnInit() {
    this.data["user"]=this.storage.get("user")
    this.posteUser=this.data["user"].profile.poste;
    this.login=this.data["user"].login;
    this.service.getClients(this.currentPage, this.size)
      .subscribe(data => {
        this.pageClient = data;
        this.pages = new Array(data.totalPages);
        console.log(data);
      }, err => {
        console.log(err);
      })

    this.service.getClientsAll()
      .subscribe(data => {
        this.clients = data;

        console.log(data);
      }, err => {
        console.log(err);
      })

  }
  export(){
    this.service.export(this.clients,'client.xlsx')
  }

  exportPdf() {
    var docDefinition = {
      content: [
        {
          table: {
            // headers are automatically repeated if the table spans over multiple pages
            // you can declare how many rows should be treated as headers
            headerRows: 1,
            widths: [ '*', 'auto', 100, '*' ],

            body:this.clients
          }
        }
      ]
    };
    pdfMake.createPdf(docDefinition).download('optionalName.pdf');
  }
  disconect(){
    this.service.setIslogedFalse();
    this.storage.remove("user");
    this.storage.set("loged",false);
    this.router.navigate(['/'])
  }

  onAddClient(data) {
    let confirm = window.confirm('est vous sure?');
    if (confirm == true) {
      this.service.saveClient(data)
        .subscribe(data => {
          this.pageClient.content.push(data);

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
    this.service.getClients(this.currentPage, this.size)
      .subscribe(data => {
        this.pageClient = data;
        this.pages = new Array(data.totalPages);
        console.log(data);
      }, err => {
        console.log(err);
      })
  }


  onEditClient(id:string){
    this.router.navigate(['editClient',id])
  }

  onDeleteClient(m: any) {
    let confirm = window.confirm('est vous sure?');
    if (confirm == true) {
      this.service.deleteClient(m.idClient)
        .subscribe(data => {
          this.pageClient.content.splice(this.pageClient.content.indexOf(m), 1);
        }, err => {
          console.log(err);
        });
    }
  }

}
