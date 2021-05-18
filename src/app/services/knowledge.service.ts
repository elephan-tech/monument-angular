import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item, Model } from '../models/knowledge';
import * as knowledge from '../api/knowledge-api.json';

@Injectable({
  providedIn: 'root',
})
export class KnowledgeService {
  private baseUrl = 'http://localhost:8000/knowledge-center';
  private knowledgeArray = knowledge;

  constructor(private http: HttpClient) {
    console.log({ knowledge });
  }

  getAll(): Observable<any[]> {
    return this.http.get<any>(this.baseUrl);
  }

  getAllBlogPosts(): Model[] {
    return this.knowledgeArray;
  }

  // getItemByID(id: string): Item {
  //   return this.knowledgeArray.content.find((b) => b.id === id);
  // }
}
