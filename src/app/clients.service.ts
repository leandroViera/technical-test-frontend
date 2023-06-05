import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client/clients-list/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private baseURL = "http://localhost:8080/api/clients";

  constructor(private httpClient: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(`${this.baseURL}`);
  }

}
