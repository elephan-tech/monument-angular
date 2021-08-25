import { ApiService } from './../../services/api/api.service';
import { environment } from './../../../environments/environment';
import { Apollo, gql } from 'apollo-angular';
import { Subscription, BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  apiUrl = environment.apiUrl;
  // TODO National School Lunch Program
  loggedInUser: any;

  items = [
    {
      name: 'Events',
      icon: 'calendar-number-outline',
      url: 'admin/events',
    },
    {
      name: 'News & Media',
      icon: 'newspaper-outline',
      url: 'admin/articles',
    },
    {
      name: 'Careers',
      icon: 'briefcase-outline',
      url: 'admin/careers',
    },
    // {
    //   name: 'Knowledge Center',
    //   icon: 'bulb-outline',
    //   url: 'admin/knowledge-center',
    // },
    {
      name: 'Alerts',
      icon: 'warning-outline',
      url: 'admin/emergencyMessage',
    },
    {
      name: 'Announcements',
      icon: 'megaphone-outline',
      url: 'admin/announcements',
    },
    {
      name: 'Monument Moments',
      icon: 'sparkles-outline',
      url: 'admin/monumentalMoments',
    },
    {
      name: 'Family Resources',
      icon: 'school-outline',
      url: 'admin/familyResources',
    },
    {
      name: 'Board Meetings',
      icon: 'people-outline',
      url: 'admin/boardMeetings',
    },
    {
      name: 'Menus',
      icon: 'restaurant-outline',
      url: 'admin/menus',
    },
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {

  }

  logout(): void {
    this.authService.logout();
  }
}
