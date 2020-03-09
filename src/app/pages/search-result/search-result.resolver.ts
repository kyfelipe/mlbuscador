// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
// import { Observable } from 'rxjs';
//
// class InfoComplementares {
// }
//
// @Injectable({ providedIn: 'root' })
// export class SearchResultResolver implements Resolve<Observable<InfoComplementares>> {
//   constructor(private infoComplementaresService: InfoComplementaresService) { }
//
//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<InfoComplementares | any> {
//     const cpfcnpj = route.params.cpfcnpj;
//     return this.infoComplementaresService.buscar(cpfcnpj);
//   }
// }
