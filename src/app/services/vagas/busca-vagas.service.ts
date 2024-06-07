import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BuscaVagasService {
  private apiUrl: string = 'https://backend-pi-node.onrender.com/vagas';

  constructor(private http: HttpClient) { }

  getVagas(tipo?: string): Observable<any[]> {
    if (tipo) {
      return this.http.get<any[]>(`${this.apiUrl}/${tipo}`).pipe(
        map(response => Array.isArray(response) ? response : []),
        catchError(() => of([]))
      );
    } else {
      return this.http.get<any[]>(this.apiUrl).pipe(
        map(response => Array.isArray(response) ? response : []),
        catchError(() => of([]))
      );
    }
  }
}