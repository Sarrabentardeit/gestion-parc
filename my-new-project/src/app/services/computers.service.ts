import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Computer } from '../models/computer'; // Assurez-vous que le chemin est correct

@Injectable({
  providedIn: 'root'
})
export class ComputersService {

  private baseUrl = 'http://localhost:8080/api/v1/computers'; // L'URL de votre API Spring Boot

  constructor(private http: HttpClient) { }

  // afficher
  getComputers(): Observable<Computer[]> {
    return this.http.get<Computer[]>(this.baseUrl);
  }

  // ajouter
  createComputer(computer: Computer): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, computer);
  }

  // get computer by id
  getComputerById(id: number): Observable<Computer> {
    return this.http.get<Computer>(`${this.baseUrl}/${id}`);
  }

  // update computer
  updateComputer(id: number, computer: Computer): Observable<Computer> {
    return this.http.put<Computer>(`${this.baseUrl}/${computer.id}`, computer);
  }
  deleteComputer(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
}

}
