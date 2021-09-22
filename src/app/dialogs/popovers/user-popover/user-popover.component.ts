import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { AuthService } from './../../../services/auth/auth.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-popover',
  templateUrl: './user-popover.component.html',
  styleUrls: ['./user-popover.component.scss']
})
export class UserPopoverComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('setLogIn') setLogIn: any;

  apiUrl = 'http://localhost:1337';

  constructor(private auth: AuthService, private popover: PopoverController, private router: Router) { }

  ngOnInit(): void {
    this.apiUrl = environment.apiUrl;
    console.log(this.setLogIn);
  }

  logout(): void {
    this.setLogIn(false);
    this.auth.logout();
    this.popover.dismiss();
  }

  async handleClick(event): Promise<boolean> {
    this.popover.dismiss();
    return await this.router.navigateByUrl(event?.currentTarget?.id);
  }

}
