import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiURL: string = 'https://jsonplaceholder.typicode.com/todos'

  constructor(private http: HttpClient) { 
  }

  fetchData(): Promise<any>{
    return this.http.get<any>(this.apiURL).toPromise();
  }

}
