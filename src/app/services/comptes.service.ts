import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Compte } from '../domain/compte';

@Injectable({
  providedIn: 'root'
})
export class ComptesService {
  // tslint:disable-next-line:no-inferrable-types
  url: string = 'http://localhost:8080/comptes' ;
  constructor(private _http: HttpClient) {}

  getAlllConptes(): Observable<Compte[]> {
    return this._http.get<Compte[]>(this.url).pipe(tap(console.log)  );
  }
}
