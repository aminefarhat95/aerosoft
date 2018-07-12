import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {Membre} from './model/Membre';
import {Profile} from './model/Profile';
import {Client} from './model/Client';
import {Moteur} from './model/Moteur';
import {Shop} from './model/Shop';
import {FicheMoteur} from './model/FicheMoteur';
import {Rapport} from './model/Rapport';
import {Proposition} from './model/Proposition';
import * as XLSX from 'xlsx';

@Injectable()
export class MyServiceService {

  public loginName:string;
  user:Membre=new Membre();
  poste:string=null;
 private  isloged;
  constructor(private http:Http){
    this.isloged=false
  }


  export(data:any,fileName): void {
    /* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb,fileName);
  }

  UserLogin(hisposte:string){
    this.poste=hisposte;
    this.isloged=true;
  }

  setIslogedFalse(){
    this.isloged=false;
  }
  setIsloged()
  {
    this.isloged=true;
  }
  getIsloged(){
    return this.isloged;
  }

  getMembre(nom:string,password:string){
    return this.http.get("http://localhost:8080/chercherMembre?x="+nom+"&y="+password)
      .map(resp=>resp.json());

  }

  getMembreId(id:string)
  {
    return this.http.get("http://localhost:8080/membres/"+id)
      .map(resp=>resp.json());

  }
  getMembresAll(){
    return this.http.get("http://localhost:8080/membres")
      .map(resp=>resp.json());

  }

  getMembres(page:number,size:number){
    return this.http.get("http://localhost:8080/chercherAll?&page="+page+"&size="+size)
      .map(resp=>resp.json());
  }
  deleteMembre(matricule:string){
    return this.http.delete("http://localhost:8080/membres/"+matricule)
      .map(resp=>resp.json());
  }
  saveMembre(membre:Membre){
    return this.http.post("http://localhost:8080/membres",membre)
      .map(resp=>resp.json());
  }

  updateMembre(membre:Membre){
    return this.http.put("http://localhost:8080/membres/"+membre.matricule,membre)
      .map(resp=>resp.json());
  }

  getProfiles(){
    return this.http.get("http://localhost:8080/profiles")
      .map(resp=>resp.json());
  }

  saveProfile(profile:Profile){
    return this.http.post("http://localhost:8080/profiles",profile)
      .map(resp=>resp.json());
  }

  deleteProfile(id_Profile:number){
    return this.http.delete("http://localhost:8080/profiles/"+id_Profile)
      .map(resp=>resp.json());
  }

  getProfile(id:number)
  {
    return this.http.get("http://localhost:8080/profiles/"+id)
      .map(resp=>resp.json());

  }

  updateProfile(profile:Profile){
    return this.http.put("http://localhost:8080/profiles/"+profile.id_Profile,profile)
      .map(resp=>resp.json());
  }

  getClient(id:number)
  {
    return this.http.get("http://localhost:8080/clients/"+id)
      .map(resp=>resp.json());

  }

  getClientsAll(){
    return this.http.get("http://localhost:8080/clients")
      .map(resp=>resp.json());
}

  getClients(page:number,size:number){
    return this.http.get("http://localhost:8080/chercherAllClients?&page="+page+"&size="+size)
      .map(resp=>resp.json());
  }
  deleteClient(id_Client:number){
    return this.http.delete("http://localhost:8080/clients/"+id_Client)
      .map(resp=>resp.json());
  }
  saveClient(client:Client){
    return this.http.post("http://localhost:8080/clients",client)
      .map(resp=>resp.json());
  }

  updateClient(client:Client){
    return this.http.put("http://localhost:8080/clients/"+client.idClient,client)
      .map(resp=>resp.json());
  }

  getMoteursAll(){
    return this.http.get("http://localhost:8080/moteurs")
      .map(resp=>resp.json());
  }
  getMoteur(id:number)
  {
    return this.http.get("http://localhost:8080/moteurs/"+id)
      .map(resp=>resp.json());

  }
  getMoteurs(page:number,size:number){
    return this.http.get("http://localhost:8080/chercherAllMoteurs?&page="+page+"&size="+size)
      .map(resp=>resp.json());
  }
  deleteMoteur(esn:number){
    return this.http.delete("http://localhost:8080/moteurs/"+esn)
      .map(resp=>resp.json());
  }
  saveMoteur(moteur:Moteur){
    return this.http.post("http://localhost:8080/moteurs",moteur)
      .map(resp=>resp.json());
  }

  updateMoteur(moteur:Moteur){
    return this.http.put("http://localhost:8080/moteurs/"+moteur.esn,moteur)
      .map(resp=>resp.json());
  }

  getFichesAll(){
    return this.http.get("http://localhost:8080/fiches")
      .map(resp=>resp.json());
  }
  getFiche(id:number)
  {
    return this.http.get("http://localhost:8080/fiches/"+id)
      .map(resp=>resp.json());

  }
  getFiches(page:number,size:number){
    return this.http.get("http://localhost:8080/fichesAll?&page="+page+"&size="+size)
      .map(resp=>resp.json());
  }
  deleteFiche(id:number){
    return this.http.delete("http://localhost:8080/fiches/"+id)
      .map(resp=>resp.json());
  }
  saveFiche(fiche:FicheMoteur){
    return this.http.post("http://localhost:8080/fiches",fiche)
      .map(resp=>resp.json());
  }

  updateFiche(fiche:FicheMoteur){
    return this.http.put("http://localhost:8080/fiches/"+fiche.numFiche,fiche)
      .map(resp=>resp.json());
  }

  getShopsAll(){
    return this.http.get("http://localhost:8080/smmms")
      .map(resp=>resp.json());
  }
  getShop(id:number)
  {
    return this.http.get("http://localhost:8080/smmms/"+id)
      .map(resp=>resp.json());

  }
  getShops(page:number,size:number){
    return this.http.get("http://localhost:8080/chercherAllShops?&page="+page+"&size="+size)
      .map(resp=>resp.json());
  }
  deleteShop(id:number){
    return this.http.delete("http://localhost:8080/smmms/"+id)
      .map(resp=>resp.json());
  }
  saveShop(shop:Shop){
    return this.http.post("http://localhost:8080/smmms",shop)
      .map(resp=>resp.json());
  }

  updateShop(shop:Shop){
    return this.http.put("http://localhost:8080/smmms/"+shop.id,shop)
      .map(resp=>resp.json());
  }
  getRapportsAll(){
    return this.http.get("http://localhost:8080/rapports")
      .map(resp=>resp.json());
  }
  getRapport(id:number)
  {
    return this.http.get("http://localhost:8080/rapports/"+id)
      .map(resp=>resp.json());

  }
  getRapports(page:number,size:number){
    return this.http.get("http://localhost:8080/RapportsAll?&page="+page+"&size="+size)
      .map(resp=>resp.json());
  }
  getRapportsIf(page:number,size:number){
    return this.http.get("http://localhost:8080/RapportsIf?&page="+page+"&size="+size)
      .map(resp=>resp.json());
  }
  deleteRapport(id:number){
    return this.http.delete("http://localhost:8080/rapports/"+id)
      .map(resp=>resp.json());
  }
  saveRapport(rapport:Rapport){
    return this.http.post("http://localhost:8080/rapports",rapport)
      .map(resp=>resp.json());
  }

  updateRapport(rapport:Rapport){
    return this.http.put("http://localhost:8080/rapports/"+rapport.id_Rapport,rapport)
      .map(resp=>resp.json());
  }

  GetRapportsIf(matricule:string){
    return this.http.get("http://localhost:8080/GetRapports?x="+matricule)
      .map(resp=>resp.json());
  }
  GetRapportsMoteur(esn:number){
    return this.http.get("http://localhost:8080/GetRapportsMoteur?x="+esn)
      .map(resp=>resp.json());
  }



  getPropositionsAll(){
    return this.http.get("http://localhost:8080/propositions")
      .map(resp=>resp.json());
  }
  getProposition(id:number)
  {
    return this.http.get("http://localhost:8080/propositions/"+id)
      .map(resp=>resp.json());

  }
  saveProposition(proposition:Proposition){
    return this.http.post("http://localhost:8080/propositions",proposition)
      .map(resp=>resp.json());
  }

  updateProposition(proposition:Proposition){
    return this.http.put("http://localhost:8080/propositions/"+proposition.id_proposition,proposition)
      .map(resp=>resp.json());
  }
  GetPropApp(matricule:string){
    return this.http.get("http://localhost:8080/GetPropoApro?x="+matricule)
      .map(resp=>resp.json());

  }


}
