import { ApiService } from './../../services/api/api.service';
import { environment } from './../../../environments/environment';
import { Apollo, gql } from 'apollo-angular';
import { Subscription, BehaviorSubject } from 'rxjs';
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
    {
      name: 'Knowledge Center',
      icon: 'bulb-outline',
      url: 'admin/knowledge-center',
    },
    {
      name: 'Alerts',
      icon: 'warning-outline',
      url: '/emergencyMessage',
    },
    {
      name: 'Announcements',
      icon: 'megaphone-outline',
      url: 'admin/announcements',
    },
    {
      name: 'Monument Moments',
      icon: 'sparkles-outline',
      url: 'admin/monumental-moments',
    },
    {
      name: 'Family Resources',
      icon: 'school-outline',
      url: '/family-resources',
    },
    {
      name: 'Board Meetings',
      icon: 'people-outline',
      url: '/board-meetings',
    },
  ];

  constructor(
    private authService: AuthService,
    private apollo: Apollo
  ) {}

  ngOnInit(): void {

  }

  logout() {
    this.authService.logout();
  }
}
