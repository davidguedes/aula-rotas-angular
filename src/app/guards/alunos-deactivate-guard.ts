import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from "@angular/router";
import { Observable } from "rxjs";
import { IFormCanDeacivate } from "./iform-candeactivate";

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeacivate> {

  canDeactivate(
      component: IFormCanDeacivate,
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {

      console.log('guarda de desativação');

      //return component.podeMudarRota();
      return component.podeDesativar();
    }
}
