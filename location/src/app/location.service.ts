import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Locationn } from './models/Locationn';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiUrl = 'http://localhost:5002/api/loction';

  constructor(private httpClient: HttpClient) {}
  getLocations(): Observable<Locationn[]> {
    return this.httpClient.get<Locationn[]>(this.apiUrl);
  }

  addLocation(location: Locationn): Observable<Locationn> {
    return this.httpClient.post<Locationn>(this.apiUrl, location);
  }

  getLocationsByCarId(carId: string): Observable<Locationn[]> {
    return this.httpClient.get<Locationn[]>(`http://localhost:5002/api/loction/${carId}`);
  }
}
