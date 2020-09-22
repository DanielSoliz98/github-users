import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SEARCH_USERS } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(username: string, page: number): Observable<any>{
    return this.http.get(`${SEARCH_USERS}${username}&per_page=4&page=${page}`);
  }
}
