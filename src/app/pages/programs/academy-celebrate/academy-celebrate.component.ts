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
    {image: 'assets/images/celebration/Band PIc.jpeg', title: 'Band'},
    {image: 'assets/images/celebration/CM4_3269.jpeg', title: 'Dancing'},
    {image: 'assets/images/celebration/CM4_3482.jpeg', title: 'Dr. Grant and Dr. DeCruise'},
    {image: 'assets/images/celebration/CM5_2083.jpeg', title: 'Team'},
    {image: 'assets/images/celebration/Dr.DeCruise.jpeg', title: 'Leadership Team'},
    {image: 'assets/images/celebration/Dr Grant.jpeg', title: 'MA 22'},
    {image: 'assets/images/celebration/Front Page Staff Member of the Year.jpeg', title: 'Programs'},
    {image: 'assets/images/celebration/Front Page Teacher of the Year.jpeg', title: 'Staff Member of the Year'},
    {image: 'assets/images/celebration/Full Band Pic.jpeg', title: 'Table'},
    {image: 'assets/images/celebration/Room Pic.jpeg', title: 'Teacher of the Year'},
  ];

  previouses = [
    {image: 'assets/images/archived/Band.jpeg', title: 'Band'},
    {image: 'assets/images/archived/Dancing.jpeg', title: 'Dancing'},
    {image: 'assets/images/archived/Dr-Grant-and-Dr-DeCruise.jpeg', title: 'Dr. Grant and Dr. DeCruise'},
    {image: 'assets/images/archived/Homepage.jpeg', title: 'Team'},
    {image: 'assets/images/archived/LeadershipTeam.jpeg', title: 'Leadership Team'},
    {image: 'assets/images/archived/MA22.jpeg', title: 'MA 22'},
    {image: 'assets/images/archived/Programs.jpeg', title: 'Programs'},
    {image: 'assets/images/archived/Staff-Member-of-the-Year.jpeg', title: 'Staff Member of the Year'},
    {image: 'assets/images/archived/Table.jpeg', title: 'Table'},
    {image: 'assets/images/archived/Teacher-of-the-Year.jpeg', title: 'Teacher of the Year'},
  ];

  showLightbox(i: any) {
    this.currentIndex = i;
    this.showFlag = true;
  }

  closeEventHandler() {
    this.showFlag = false;
    this.currentIndex = -1;
  }

  showPreviousContent: boolean = false;

  togglePreviousContent() {
    this.showPreviousContent = !this.showPreviousContent;
  }
}
