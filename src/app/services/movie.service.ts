import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  // public URL: string = 'http://whattosee.ml:8088';
  public URL: string = 'http://localhost:8088';

  constructor(public http: HttpClient) { }


  getMoviGenders(): Observable<any> {
    console.log('Token del usuario: ', localStorage.getItem('tokenUser'));
    return this.http.get<any>(`${this.URL}/genders/get-all`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('tokenUser')
      })
    });
  }

}
