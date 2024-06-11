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
    const url = tipo ? `${this.apiUrl}/${tipo}` : this.apiUrl;
    console.log(`Fetching vagas from URL: ${url}`); // Log para depuração
    return this.http.get<any[]>(url).pipe(
      map(response => Array.isArray(response) ? response : []),
      catchError(error => {
        console.error('Error fetching vagas:', error); // Log para depuração
        return of([]);
      })
    );
  }
}
