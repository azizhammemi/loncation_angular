import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Voiture } from './models/voiture';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VoitureServiceService {
  private apiUrl = 'http://localhost:5002/voitures/';

  constructor(private httpClient: HttpClient) { }
    GETALL(): Observable<Voiture[]> {
    return this.httpClient.get<Voiture[]>("http://localhost:5002/voitures");
  }
  OnDelete(id: string): Observable<any> {
    return this.httpClient.delete(`http://localhost:5002/voitures/${id}`);  
  }

  addVoiture(voiture: Voiture): Observable<Voiture> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<Voiture>(this.apiUrl, voiture, { headers });
  }
  getVoitureById(id: string): Observable<Voiture> {
    return this.httpClient.get<Voiture>(`${this.apiUrl}${id}`);
  }
  updateVoiture(voiture: Voiture): Observable<void> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.put<void>(`${this.apiUrl}${voiture._id}`, voiture, { headers });
  }
}
