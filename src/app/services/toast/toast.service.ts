import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import inRange from 'lodash/inRange';


type ToastConfig = {
  header: string,
  code: number,
  message: string
};
@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toast: ToastController) { }

  private getColor = (code) => {
    if (inRange(code, 100, 199)) { return 'warning'; }
    if (inRange(code, 200, 299)) { return 'success'; }
    if (inRange(code, 300, 399)) { return 'secondary'; }
    if (inRange(code, 400, 599)) { return 'danger'; }
  }

  public async toasty(config: ToastConfig): Promise<any> {
    const {
      header,
      code,
      message,
    } = config;

    const toast = await this.toast.create({
      header,
      message,
      position: 'bottom',
      color: this.getColor(code),
      duration: 2000
    });

    return toast;
  }

}
