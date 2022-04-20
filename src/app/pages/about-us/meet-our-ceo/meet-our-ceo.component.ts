import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meet-our-ceo',
  templateUrl: './meet-our-ceo.component.html',
  styleUrls: ['./meet-our-ceo.component.scss']
})
export class MeetOurCeoComponent implements OnInit {
  pageTitle: string;
  heroImg: string;

  letter = `
    <p><span style="font-weight: 400;">Greetings Monument Stakeholders and Visitors,</span></p>
    <p><span style="font-weight: 400;">The staff members of our illustrious school are continuing to work to ensure all of our scholars are supported in their efforts to grow academically and socially as the world navigates the multiple challenges we are currently facing. Although the climate calls for us to alter our normal practices of in-person instruction, the MAPCS team is diligently identifying highly effective strategies and best practices to engage and educate our scholars.</span></p>
    <p><b><i>The Mission of Monument Academy Public Charter School states that our goal is…“to empower students, particularly those who have experienced significant adversity, including involvement or risk of involvement in child welfare and/or other social service systems with the requisite academic, social, emotional and life skills to be successful in college, career and community. In addition, we aim to create an outstanding school that attracts, supports, and retains exceptional and caring people.” </i></b></p>
    <p><span style="font-weight: 400;">Grounding our work in the mission requires us to go above and beyond what a traditional school may offer. Our stakeholders have committed themselves to implementing virtual programming that extends beyond the rigorous academic day school. These include a robust extended day program, well-being support, and homework assistance every evening. In addition, our staff members are available for the scholars to just reach out and “chat” about life!</span></p>
    <p><span style="font-weight: 400;">While we are supporting all scholars virtually, Monument has created a </span><b><i>Monument Operations Bubble</i></b><span style="font-weight: 400;"> for scholars seeking to have additional support 24 hours a day, 7 days per week. This protected space has the students living on campus uninterrupted for up to 7 weeks at a time. We are pleased to announce that the space has remained free from any contamination due to healthy practices and ongoing testing!</span></p>
    <p><span style="font-weight: 400;">The Leadership Team is confident all students will be invited to return to campus by April 2021. If that does not come to fruition, we shall continue to engage the scholars with fidelity through the researched-based, data-driven programming that is guaranteed to raise achievement levels. Also, the school is planning for a <a href="https://monumentacademy.org/wp-content/uploads/2020/12/For-Website_-Proposed-Monument-Calendar-SY21-21.pdf" target="_blank">new calendar in school-year 21-22</a></span><span style="font-weight: 400;"> that will increase the time on task for students and build in wellness breaks for all stakeholders. We are extremely excited and confident in the model and look forward to working within this framework for educating our talented scholars!</span></p>
    <p><span style="font-weight: 400;">Please stay safe and healthy as we navigate through life’s challenges.</span></p>
    <p>&nbsp;</p>
    <p><span style="font-weight: 400;">Educationally yours,</span></p>
    <p><b>Dr. Jeffrey F. Grant</b></p>
    <p><span style="font-weight: 400;">CEO / Head of School</span></p>
  `;
  constructor() { }

  ngOnInit(): void {
    this.pageTitle = 'Meet Our CEO';
    this.heroImg = 'assets/images/team/Dr_Jeffrey-Grant.jpeg' ;
  }

}
