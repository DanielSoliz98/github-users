import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Repository } from "src/app/models/repository";
import { SEARCH_REPOS, SEARCH_USERS, SECRET_KEY } from "../constants";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(username: string, page: number): Observable<any> {
    return this.http.get(`${SEARCH_USERS}${username}&per_page=4&page=${page}&${SECRET_KEY}`);
  }

  getUser(username: string) {
    return this.http.get(`${SEARCH_REPOS}${username}?${SECRET_KEY}`);
  }

  getRepositories(url: string, page: number): Observable<Repository[]> {
    return this.http.get<Repository[]>(`${url}?per_page=4&page=${page}${SECRET_KEY}`);
  }

  getIssues(url: string): Observable<any[]> {
    return this.http.get<any[]>(`${url}?${SECRET_KEY}`);
  }
}
