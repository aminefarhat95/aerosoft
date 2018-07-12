import {Membre} from './Membre';
import {Moteur} from './Moteur';


export class FicheMoteur{

  numFiche:number;
  dateSiot:Date;
  ws:string;
  tsn:number;
  csn:number;
  utilisateur:Membre;
  moteur:Moteur;
}
