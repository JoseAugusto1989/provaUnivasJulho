import { List } from './list';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private serverApi = 'https://music-api-2022.herokuapp.com/documentation/'


  constructor(private httpClient: HttpClient) { }

  getList() : Observable<List[]>{
    return this.httpClient.get<List[]>(this.serverApi)
  }

  postCategoria(list: List): Observable<List[]>{
    return this.httpClient.post<List[]>(this.serverApi, list)
  }
}
