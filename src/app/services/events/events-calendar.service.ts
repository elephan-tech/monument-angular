import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventsCalendarService {
   private baseUrl = 'http://localhost:8000/news-events';
    content = {
    title: 'Interested in joining our team?',
    info: '<b> Attend </b> our upcoming virtual job fair! Register below or email careers@monumentacademydc.org with any questions.',
    paragraph: 'Tuesday, March 16th, 4 PM – 6 PM Our next open board meeting is Wednesday, March 17th at 6 PM. Register here.',
    closing: 'Check out our recent feature on CBS This Morning HERE!'
  }


  constructor(private http: HttpClient) { }

 getAll(): Observable<any[]> {
    return this.http.get<any>(this.baseUrl);
  }
get(id: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/' + id);
  }
create(country: any) {
    return this.http.post<any>(this.baseUrl, country);
  }
update(id: string, country: any): Observable<any> {
    return this.http.put<any>(this.baseUrl + '/' + id, country);
  }
delete(id: string) {
    return this.http.delete<any>(this.baseUrl + '/' + id);
  }
}
