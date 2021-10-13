import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  url = "https://postman-echo.com/post";
  constructor(private http: HttpClient) { }

  postRequest(object:any): Observable<any> {
    console.log(object);
    const response: Observable<any> = 
    this.http.post<any>(this.url, object);
    return response;
  }
}
