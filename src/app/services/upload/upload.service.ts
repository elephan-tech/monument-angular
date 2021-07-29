import { Media } from './../../models/media';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { Subscription } from 'rxjs';
import { Error } from 'src/app/pages/admin-login/admin-login.component';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  FILES = `/files`;
  BY_ID = `${this.FILES}/:id`;
  uploadUrl = `${environment.apiUrl}/upload`;
  $files: any[];


  constructor(private http: HttpClient) { }

  fileObserver = {
    next: (files: Media[]) => {
      return this.$files = files;
    },
    error: (err: Error) => console.error('error', err),
    complete: () => console.log('done')
  };

  getFiles() {
    return this.http.get<Media[]>(`${this.uploadUrl}${this.FILES}`);
  }
}
