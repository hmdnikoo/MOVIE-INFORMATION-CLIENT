import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { Entity } from '../../type/entity';

@Injectable({
  providedIn: 'root'
})
export class RestBaseService<T extends Entity> {
  protected http: HttpClient;
  protected headers = new HttpHeaders();
  protected endpointUrl = ``;
  constructor(endpointUrl: string, private injector: Injector) {
    this.endpointUrl = endpointUrl;

    this.http = this.injector.get(HttpClient);

    this.headers = this.headers.set('Content-Type', 'application/json');
    this.headers = this.headers.set('Accept', 'application/json');
   }
  getAll(): Observable<any>{
    return this.http.get(this.endpointUrl, {headers: this.headers});
  }
  getById(id: string): Observable<any>{
    return this.http.get(`${this.endpointUrl}/${id}`, {headers: this.headers});
  }
  create(data: T): Observable<any>{
    return this.http.post<T>(this.endpointUrl, data);
  }
  update(data: T): Observable<any>{
    return this.http.put<T>(`${this.endpointUrl}/${data.id}`, data);
  }
  delete(id: string): Observable<any>{
    return this.http.delete(`${this.endpointUrl}/${id}`);
  }
}
