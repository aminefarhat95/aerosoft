import {Inject, Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {MyServiceService} from './my-service.service'
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Injectable()
export class MyguardGuard implements CanActivate {

  constructor(private user:MyServiceService,private router:Router,@Inject(LOCAL_STORAGE) private storage: WebStorageService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
    if(this.storage.get("loged")==false){
      this.router.navigate(['/']);
      console.log("you are not authentificate")
    }
    return this.storage.get("loged");
  }
}
