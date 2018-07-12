import {FicheMoteur} from './FicheMoteur';
import {Shop} from './Shop';
import {Proposition} from './Proposition';


export class Rapport {

  id_Rapport:string;
  designation_rapport:string;
  pn:string;
  sub_task:string;
  area:string;
  finding:string;
  family:string;
  qty:string;
  statut:string;
  manuel:string;
  date_creation:Date;
  date_previsionnelle:Date;
  ficheMoteur:FicheMoteur;
  smmm:Shop;
  proposition:Proposition;
}
