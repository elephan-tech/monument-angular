import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Content {
  type: string, // title, info, paragraph, closing, action
  content: string
}


@Injectable({
  providedIn: 'root'
})
export class EventsCalendarService {
   private baseUrl = 'http://localhost:8000/news-events';
  constructor(private http: HttpClient) { }

 getAll(): Observable<Content[]> {
    return this.http.get<any>(this.baseUrl);
  }
// get(id: string): Observable<Content> {
//     return this.http.get<any>(this.baseUrl + '/' + id);
//   }
// create(country: Content) {
//     return this.http.post<any>(this.baseUrl, country);
//   }
// update(id: string, country: Content): Observable<Content> {
//     return this.http.put<any>(this.baseUrl + '/' + id, country);
//   }
// delete(id: string) {
//     return this.http.delete<any>(this.baseUrl + '/' + id);
//   }
}
