import { ToastService } from './../toast/toast.service';
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


  constructor(private http: HttpClient, private toast: ToastService) { }

  fileObserver = {
    next: (files: Media[]) => {
      return this.$files = files;
    },
    error: (err: Error) => this.toast.toasty({
      header: 'Error',
      code: err.statusCode,
      message: err.message[0].messages[0].message,

    }),
    // tslint:disable-next-line: no-console
    complete: () => console.info('done')
  };

  getFiles(): Observable<any[]> {
    return this.http.get<Media[]>(`${this.uploadUrl}${this.FILES}`);
  }

  async getFileById(id: number): Promise<any> {
    return await this.http.get(`${this.uploadUrl}${this.FILES}/${id}`).toPromise();
  }



  async uploadFile(data: any): Promise<any>{
    const filesByName = await this.getFileByName(data.getAll('files')[0].name);
    if (filesByName.length) {
      const fileId = filesByName?.[0]?.id;
      const fileInS3 = await this.getFileById(fileId);
      return fileInS3;
    } else {
      console.log('NO FILE. ADDING NEW');
      return await this.http.post(this.uploadUrl, data).toPromise();
    }
  }

  async getFileByName(name: string): Promise<any> {
    const files = await this.getFiles().toPromise();
    return files.filter(file => file.name === name);
    // const fileByUrl = files?.find(file => file.url === url);
  // return fileByUrl
  }
}
