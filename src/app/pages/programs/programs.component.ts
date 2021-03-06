import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {

// TODO: could make global structure

      programs = [
        {
          title: 'Academics',
          description: 'All students have access to a rigorous curriculum combined with strong, individual supports and highly engaging learning experiences.',
          name: 'academics',
          url: 'academics',
        },
        {
          title: 'Student Well-Being',
          description: 'Our culture, curriculum, and programs all underscore our commitment to the whole child.',
          name: 'wellBeing',
          url: 'well-being-program',
        },
        {
          title: 'Life Skills',
          description: 'Students have daily opportunities to learn and practice key life skills through our family-style boarding program.',
          name: 'lifeSkills',
          url: 'life-skills-program',
        },
        {
          title: 'Boarding and Student Life Program',
          description: 'Through our weekday boarding program, students have access to 24/7 supports.',
          name: 'BSLP',
          url: 'boarding-student-life-program',
        },
        {
          title: 'National School Lunch Program',
          description: 'Through our participation in the National School Lunch Program, our students receive free breakfast, lunch, after-school snack, and supper.',
          name: 'NSLP',
          url: 'national-lunch-program',
        }
      ];
  constructor() { }

  ngOnInit(): void {
  }

}
