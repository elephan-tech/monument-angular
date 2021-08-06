import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-day-at-monument',
  templateUrl: './a-day-at-monument.component.html',
  styleUrls: ['./a-day-at-monument.component.scss'],
})
export class ADayAtMonumentComponent implements OnInit {

  constructor() {}
  pageTitle: string;
  heroImg: string;
  activity = [
    {
      title: 'Rise and Shine',
      content:
        'Students receive a personal wake-up and eat a family-style breakfast with their Houseparent and Student Life Family. Students share a personal daily goal with their family and head to advisory for community building and DBT skills practice. After advisory, the students move to through their daily class schedule.',
      src: 'assets/monument_logo-short.png',
    },
    {
      title: 'Morning Focus',
      content:
        'Well-being is weaved throughout all aspects of our program. Every morning, students and staff practice mindfulness and engage in a group lesson around important social skills. The morning block sets students up for a focused, successful day.',
      src: 'assets/images/bulldog-meditating.svg',
    },
    {
      title: 'Academic Blocks',
      content:
        'Students have daily academic blocks with a maximum of a 1:15 adult to student ratio, focusing on Literacy and Humanities, Math, and Science. Between these blocks, students have a social lunch, recess, and opportunities for electives such as PE, Health, Performing Arts, Instrumental Music and Spanish. Classroom instruction is targeted to meet student needs and is designed to provide all students with choice, movement, and authentic learning experiences.',
      src: 'assets/monument_logo-short.png',
    },
    {
      title: 'Student Life Activities',
      content:
        'After the academic day, students engage in enrichment activities that  might include sports, cooking club, choir, theater, or service clubs.  Dinner is eaten family-style, then students do their reading homework  and have time to relax with evening family activities like community  meetings, board games, or movie night. We provide a warm, home-like  environment in the boarding program while embedding students’  acquisition of important independent living skills.',
      src: 'assets/monument_logo-short.png',
    },
    {
      title: 'Closing the Day',
      content:
        'Before students prepare for bed, they reflect on the daily goal they  set in the morning. The Houseparent and the other students in the  family celebrate and support one another in this process. Students  then read or journal in their rooms until lights out.',
      src: 'assets/monument_logo-short.png',
    },
    {
      title: 'Drop-off and Pickup',
      content:
        'Early Sunday evening, students are dropped off and families have a  chance to speak with staff. The same opportunity exists on Friday  afternoon when students are picked up for the weekend. The purpose of  a structured drop-off and pick-up is to establish and develop  relationships with caregivers and to keep lines of communication open  to ensure a seamless transition between home and school life.',
      src: 'assets/monument_logo-short.png',
    },
  ];

  ngOnInit(): void {
    this.pageTitle = 'A Day At Monument Academy';
    this.heroImg = 'assets/images/monument-15.png';
  }
}
