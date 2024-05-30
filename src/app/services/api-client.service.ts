import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  private http = inject(HttpClient);

  public getFootballMatches() {
    return this.http.get('/proxy/v3/football/fixtures?api_token=84qnYfa4VaFHgSw491XZ0c7tRc17ksXwlWgZI05JqEt6LlRbvLiZSPXSG5jK');
  }

  public getCricketMatches() {
    return this.http.get('/proxy2/api/v2.0/fixtures?api_token=84qnYfa4VaFHgSw491XZ0c7tRc17ksXwlWgZI05JqEt6LlRbvLiZSPXSG5jK');
  }
}
