import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScreensizeService {
  private isDesktop = new BehaviorSubject(false);
  constructor() { }

  onResize(size): void {
    if (size < 850) {
      this.isDesktop.next(false);
    } else {
      this.isDesktop.next(true);
    }
  }

  isDesktopView(): Observable<boolean> {
    return this.isDesktop.asObservable().pipe(distinctUntilChanged());
  }
}
