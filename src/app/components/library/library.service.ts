import { Library } from './library';
import { List } from './../list/list';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  private serverApi = 'https://music-api-2022.herokuapp.com/'


  constructor(private httpClient: HttpClient) { }

  getList() : Observable<Library[]>{
    return this.httpClient.get<Library[]>(this.serverApi)
  }

  postLibrary(lib: Library): Observable<Library>{
    return this.httpClient.post<Library>(this.serverApi, lib)
  }
}
