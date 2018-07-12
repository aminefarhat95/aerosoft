import {Component, Inject, OnInit} from '@angular/core';
import {MyServiceService} from '../my-service.service';
import {Router} from '@angular/router';
import {Membre} from '../model/Membre';
import {selector} from 'rxjs/operator/publish';
import {Rapport} from '../model/Rapport';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import {Moteur} from '../model/Moteur';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
mode=1;
posteUser:string;
login:string;
selected:Membre=new Membre();
selected2:Membre=new Membre();
selected1:Moteur=new Moteur();
membres:any[]=[];
ing:any[]=[];
moteurs:any[];
  janv:number=0;
  fevr:number=0;
  mars:number=0;
  avril:number=0;
  mai:number=0;
  juin:number=0;
  juil:number=0;
  aout:number=0;
  sept:number=0;
  oct:number=0;
  nov:number=0;
  dec:number=0;
  total:number=0;
  data:any=[];

  constructor(private service:MyServiceService, public router: Router,@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  ngOnInit() {
    this.data["user"]=this.storage.get("user")
    this.posteUser=this.data["user"].profile.poste;
    this.login=this.data["user"].login;

    this.service.getMembresAll()
      .subscribe(data => {
    for(let i=0;i<data.length;i++){
      if(data[i].profile.poste=='vst')
        this.membres.push(data[i]);
      if(data[i].profile.poste=='ingenieur')
        this.ing.push(data[i]);

    }

        console.log(data);
        console.log(this.membres)
      }, err => {
        console.log(err);
      })
    this.service.getMoteursAll()
      .subscribe(data => {
        this.moteurs=data;
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

  onChange(d){

    this.service.GetRapportsIf(this.selected.matricule)
      .subscribe(data=>{
        console.log(data);
        this.GetTotal(data);
        this.lineChartData=[
          {data: [this.janv, this.fevr, this.mars, this.avril, this.mai, this.juin, this.juil,this.aout,this.sept,this.oct,this.nov,this.dec], label:'Total = '+this.total},
        ];
      },err=>{
        console.log(err);
      })
  }
  onChange1(d){

    this.service.GetRapportsMoteur(this.selected1.esn)
      .subscribe(data=>{
        console.log(data);
        this.GetTotal(data);
        this.lineChartData=[
          {data: [this.janv, this.fevr, this.mars, this.avril, this.mai, this.juin, this.juil,this.aout,this.sept,this.oct,this.nov,this.dec], label:'Total = '+this.total},
        ];
      },err=>{
        console.log(err);
      })
  }
  onChange2(d){

    this.service.GetPropApp(this.selected2.matricule)
      .subscribe(data=>{
        console.log(data);
        this.GetTotal(data);
        this.lineChartData=[
          {data: [this.janv, this.fevr, this.mars, this.avril, this.mai, this.juin, this.juil,this.aout,this.sept,this.oct,this.nov,this.dec], label:'Total = '+this.total},
        ];
      },err=>{
        console.log(err);
      })
  }

  GetTotal(data){
    this.janv=0;
    this.fevr=0;
    this.mars=0;
    this.avril=0;
    this.mai=0;
    this.juin=0;
    this.juil=0;
    this.aout=0;
    this.sept=0;
    this.oct=0;
    this.nov=0;
    this.dec=0;
    this.total=0;
    for(let i=0;i<data.length;i++)
    {
      switch(data[i].date_creation.split('-')[1]) {
        case '01':
          this.janv++;
          break;
        case '02':
          this.fevr++;
          break;
        case '03':
          this.mars++;
          break;
        case '04':
          this.avril++;
          break;
        case '05':
          this.mai++;
          break;
        case '06':
          this.juin++;
          break;
        case '07':
          this.juil++;
          break;
        case '08':
          this.aout++;
          break;
        case '09':
          this.sept++;
          break;
        case '10':
          this.oct++;
          break;
        case '11':
          this.nov++;
          break;
        case '12':
          this.dec++;
          break;
      }

    }
    this.total=this.janv+this.fevr+this.mars+this.avril+this.mai+this.juin+this.juil+this.aout+this.sept+this.oct+this.nov+this.dec;
  }

mode1(){
    this.mode=1;
  this.janv=0;
  this.fevr=0;
  this.mars=0;
  this.avril=0;
  this.mai=0;
  this.juin=0;
  this.juil=0;
  this.aout=0;
  this.sept=0;
  this.oct=0;
  this.nov=0;
  this.dec=0;
  this.total=0;
  this.lineChartData = [
    {data: [this.janv, this.fevr, this.mars, this.avril, this.mai, this.juin, this.juil,this.aout,this.sept,this.oct,this.nov,this.dec], label:'Total = '+this.total},
  ];
}

mode2(){
    this.mode =2;
  this.janv=0;
  this.fevr=0;
  this.mars=0;
  this.avril=0;
  this.mai=0;
  this.juin=0;
  this.juil=0;
  this.aout=0;
  this.sept=0;
  this.oct=0;
  this.nov=0;
  this.dec=0;
  this.total=0;
  this.lineChartData = [
    {data: [this.janv, this.fevr, this.mars, this.avril, this.mai, this.juin, this.juil,this.aout,this.sept,this.oct,this.nov,this.dec], label:'Total = '+this.total},
  ];
}
  mode3(){
    this.mode =3;
    this.janv=0;
    this.fevr=0;
    this.mars=0;
    this.avril=0;
    this.mai=0;
    this.juin=0;
    this.juil=0;
    this.aout=0;
    this.sept=0;
    this.oct=0;
    this.nov=0;
    this.dec=0;
    this.total=0;
    this.lineChartData = [
      {data: [this.janv, this.fevr, this.mars, this.avril, this.mai, this.juin, this.juil,this.aout,this.sept,this.oct,this.nov,this.dec], label:'Total = '+this.total},
    ];
  }
  public lineChartData:Array<any> = [
    {data: [this.janv, this.fevr, this.mars, this.avril, this.mai, this.juin, this.juil,this.aout,this.sept,this.oct,this.nov,this.dec], label:'Total = '+this.total},
  ];
  public lineChartLabels:Array<any> = ['janv', 'fevr', 'mars', 'avril', 'mai', 'juin', 'juil','aout','sept','oct','nov','dec'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
