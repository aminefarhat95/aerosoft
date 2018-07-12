import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import {MyguardGuard} from './myguard.guard'
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from "@angular/router";
import {MyServiceService} from './my-service.service'
import {HttpModule} from "@angular/http";
import { AccueilComponent } from './accueil/accueil.component';
import { ProfileComponent } from './profile/profile.component';
import { MembreComponent } from './membre/membre.component';
import { EditMembreComponent } from './edit-membre/edit-membre.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ClientComponent } from './client/client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { MoteurComponent } from './moteur/moteur.component';
import { EditMoteurComponent } from './edit-moteur/edit-moteur.component';
import { ShopComponent } from './shop/shop.component';
import { EditShopComponent } from './edit-shop/edit-shop.component';
import { FicheMoteurComponent } from './fiche-moteur/fiche-moteur.component';
import { EditFicheMoteurComponent } from './edit-fiche-moteur/edit-fiche-moteur.component';
import { RapportComponent } from './rapport/rapport.component';
import { EditrapportComponent } from './editrapport/editrapport.component';
import { PropositionComponent } from './proposition/proposition.component';
import { AjoutPropositionComponent } from './ajout-proposition/ajout-proposition.component';
import { TraiterPropositionComponent } from './traiter-proposition/traiter-proposition.component';
import { EditPropositionComponent } from './edit-proposition/edit-proposition.component';
import {StorageServiceModule} from 'angular-webstorage-service';
import { DetailPropositionComponent } from './detail-proposition/detail-proposition.component';
import { ChartsModule } from 'ng2-charts';
const appRoutes:Routes=[
  {path:'', component:LoginComponent},
  {path:'traiterProposition',canActivate:[MyguardGuard], component:TraiterPropositionComponent},
  {path:'detailPropositions',canActivate:[MyguardGuard], component:DetailPropositionComponent},
  {path:'editProposition/:id',canActivate:[MyguardGuard], component:EditPropositionComponent},
  {path:'propositions',canActivate:[MyguardGuard], component:PropositionComponent},
  {path:'addProposition/:id',canActivate:[MyguardGuard], component:AjoutPropositionComponent},
  {path:'rapports',canActivate:[MyguardGuard], component:RapportComponent},
  {path:'editRapport/:id',canActivate:[MyguardGuard], component:EditrapportComponent},
  {path:'fiches',canActivate:[MyguardGuard], component:FicheMoteurComponent},
  {path:'editFiche/:id',canActivate:[MyguardGuard], component:EditFicheMoteurComponent},
  {path:'shops',canActivate:[MyguardGuard], component:ShopComponent},
  {path:'editShop/:id',canActivate:[MyguardGuard],component:EditShopComponent},
  {path:'moteurs',canActivate:[MyguardGuard], component:MoteurComponent},
  {path:'editMoteur/:id',canActivate:[MyguardGuard],component:EditMoteurComponent},
  {path:'clients',canActivate:[MyguardGuard], component:ClientComponent},
  {path:'editClient/:id',canActivate:[MyguardGuard],component:EditClientComponent},
   {path:'profiles',canActivate:[MyguardGuard], component:ProfileComponent},
  {path:'editProfile/:id',canActivate:[MyguardGuard],component:EditProfileComponent},
   {path: 'membres',canActivate:[MyguardGuard],component:MembreComponent},
  {path:'editMembre/:id',canActivate:[MyguardGuard],component:EditMembreComponent},
  {path:'dashboard',canActivate:[MyguardGuard],component:AccueilComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccueilComponent,
    ProfileComponent,
    MembreComponent,
    EditMembreComponent,
    EditProfileComponent,
    ClientComponent,
    EditClientComponent,
    MoteurComponent,
    EditMoteurComponent,
    ShopComponent,
    EditShopComponent,
    FicheMoteurComponent,
    EditFicheMoteurComponent,
    RapportComponent,
    EditrapportComponent,
    PropositionComponent,
    AjoutPropositionComponent,
    TraiterPropositionComponent,
    EditPropositionComponent,
    DetailPropositionComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),BrowserModule,FormsModule,HttpModule,StorageServiceModule,ChartsModule
  ],
  providers: [MyServiceService,MyguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
