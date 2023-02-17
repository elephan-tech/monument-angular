import { Component } from '@angular/core';

@Component({
  selector: 'app-academy-celebrate',
  templateUrl: './academy-celebrate.component.html',
  styleUrls: ['./academy-celebrate.component.scss']
})
export class AcademyCelebrateComponent {
  currentIndex: any = -1;
  showFlag: any = false;
  tiles = [
    {image: 'assets/images/celebration/Band.jpeg', title: 'Band'},
    {image: 'assets/images/celebration/Dancing.jpeg', title: 'Dancing'},
    {image: 'assets/images/celebration/Dr-Grant-and-Dr-DeCruise.jpeg', title: 'Dr. Grant and Dr. DeCruise'},
    {image: 'assets/images/celebration/Homepage.jpeg', title: 'Team'},
    {image: 'assets/images/celebration/LeadershipTeam.jpeg', title: 'Leadership Team'},
    {image: 'assets/images/celebration/MA22.jpeg', title: 'MA 22'},
    {image: 'assets/images/celebration/Programs.jpeg', title: 'Programs'},
    {image: 'assets/images/celebration/Staff-Member-of-the-Year.jpeg', title: 'Staff Member of the Year'},
    {image: 'assets/images/celebration/Table.jpeg', title: 'Table'},
    {image: 'assets/images/celebration/Teacher-of-the-Year.jpeg', title: 'Teacher of the Year'},
  ];

  showLightbox(i: any) {
    this.currentIndex = i;
    this.showFlag = true;
  }

  closeEventHandler() {
    this.showFlag = false;
    this.currentIndex = -1;
  }
}
