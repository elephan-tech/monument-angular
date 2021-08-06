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

  getFiles(): Observable<Media[]> {
    return this.http.get<Media[]>(`${this.uploadUrl}${this.FILES}`);
  }

  async getFileById(id: string): Promise<any> {
    return await this.http.get(`${this.uploadUrl}${this.FILES}/${id}`).toPromise();
  }

  uploadFile(data: Media): any{
    return this.http.post(this.uploadUrl, data );
  }

  async getFileByUrl(url): Promise<void> {
    const files = this.getFiles().toPromise();
    // const fileByUrl = files?.find(file => file.url === url);
  // return fileByUrl
  }
}
