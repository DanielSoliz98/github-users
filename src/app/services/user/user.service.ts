import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { CacheService } from "../cache/cache.service";
import { SEARCH_REPOS, SEARCH_USERS, SECRET_KEY } from "../constants";
import { switchMap } from "rxjs/operators";
import { Repository } from 'src/app/models/repository';

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient, private cacheService: CacheService) {}

  getUsers(username: string, page: number): Observable<any> {
    return this.httpCall(
      `${SEARCH_USERS}${username}&per_page=4&page=${page}&${SECRET_KEY}`
    );
  }

  getUser<T>(username: string): Observable<T> {
    return this.httpCall(`${SEARCH_REPOS}${username}?${SECRET_KEY}`);
  }

  getRepositories(url: string, page: number): Observable<Repository[]> {
    return this.httpCall(`${url}?per_page=4&page=${page}&${SECRET_KEY}`);
  }

  getIssues(url: string): Observable<any[]> {
    return this.httpCall(`${url}?${SECRET_KEY}`);
  }

  private httpCall<T>(url: string): Observable<T> {
    const data = this.cacheService.load(url);
    if (data !== null) {
      return of<T>(data);
    }

    return this.http.request<T>("GET", url).pipe(
      switchMap((response) => {
        this.cacheService.save(url, response);
        return of<T>(response);
      })
    );
  }
}
