import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArticleInfo, BlogPost, blogPosts } from '../../blog-posts';

@Injectable({
  providedIn: 'root',
})
export class EventsCalendarService {
  private baseUrl = 'http://localhost:8000/news-events';
  blogPostsArray = blogPosts;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
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

  getAllBlogPosts(): BlogPost[] {
    return this.blogPostsArray.sort((a, b) => {
      return <any>new Date(b.date) - <any>new Date(a.date);
    });
    // return this.blogPostsArray;
  }

  getBlogPostByID(id: string): BlogPost {
    return this.blogPostsArray.find((b) => b.blogID === id);
  }
}
