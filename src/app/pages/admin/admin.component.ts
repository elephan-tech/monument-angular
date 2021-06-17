import { environment } from './../../../environments/environment';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../../services/auth/auth.service';

interface collectionType {}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  apiUrl = environment.apiUrl;
  // Emergency Bar @done
  // TODO News & Media
  // TODO National School Lunch Program
  // TODO Family Resources
  // TODO Board Of Directors (meeting minutes)

  items = [
    {
      name: 'Events',
      icon: 'calendar-number-outline',
      url: '/events',
    },
    {
      name: 'News & Media',
      icon: 'newspaper-outline',
      url: '/news-media',
    },
    {
      name: 'Careers',
      icon: 'briefcase-outline',
      url: '/careers',
    },
    {
      name: 'Knowledge Center',
      icon: 'bulb-outline',
      url: '/knowledge-center',
    },
    {
      name: 'Alerts',
      icon: 'warning-outline',
      url: '/emergencyMessage',
    },
    {
      name: 'Announcements',
      icon: 'megaphone-outline',
      url: '/announcements',
    },
    {
      name: 'Monument Moments',
      icon: 'sparkles-outline',
      url: '/monumental-moments',
    },
  ];

  constructor(
    private menu: MenuController,
    private apollo: Apollo,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
  }
}
