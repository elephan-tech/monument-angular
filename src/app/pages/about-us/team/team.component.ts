import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, Scroll, Event } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `<div [innerHTML]="data | safeHtml"></div>`,
})
export class TeamComponent implements OnInit {

  constructor(router: Router, viewportScroller: ViewportScroller) {
    router.events
      .pipe(filter((e: Event): e is Scroll => e instanceof Scroll))
      .subscribe((e) => {
        if (e.position) {
          // backward navigation
          viewportScroller.setOffset([0, this.headerOffset]);
          viewportScroller.scrollToPosition(e.position);
        } else if (e.anchor) {
          // anchor navigation
          viewportScroller.setOffset([0, this.headerOffset]);
          viewportScroller.scrollToAnchor(e.anchor);
        } else {
          // forward navigation
          viewportScroller.setOffset([0, this.headerOffset]);
        }
      });
  }
  pageTitle: string;
  heroImg: string;
  headerOffset = 200;

  team = [
    {
      name: 'Dr. Jeffrey Grant',
      title: 'Head of School and CEO',
      bio:
       `
         Dr. Jeffrey Grant is a native Washingtonian who has led schools for over 15 years. In addition, he has more than a decade of experience teaching in district schools. In 2005, he was honored as Teacher of the Year by Junior Achievement of the National Capital Area. He holds a doctorate of education in leadership and policy studies and a master’s in education technology leadership from George Washington University. He earned degrees in political science and philosphy from the University of the District of Columbia. Most recently, he served as National Head of Schools at Friendship Education Foundation. Dr. Grant and his wife Sharnika reside in Maryland with their children. He is a proud member of Kappa Alpha Psi Fraternity, inc.
       `,
      pic: 'assets/images/team/Dr_Jeffrey-Grant.jpeg',
      scrollId: 'drjeffreyGrant',
    },
    {
      name: 'Dr. Ashley DeCruise',
      title: 'Principal',
      bio:
        `
          Dr. Ashley DeCruise graduated from Mount St. Mary's University in 2011, earning a bachelor's degree in Elementary Education. Determined to further her educational experience, Dr. DeCruise completed a Master's Degree in Special Education from Seton Hill University in 2013. She then began her teaching career with the Prince George's County Public School System (PGCPS). During her six-year tenure with PGCPS, Dr. DeCruise taught self-contained classes for students in grades 3 and 4 that were categorized with an Emotional Disability (ED). Additionally, Dr. DeCruise completed her dissertation on the successful reintegration of ED students in the mainstream environment and, in 2017, completed her Doctorate in Educational Leadership from Nova Southeastern University.
          <p>
            Prior to her transition from PGCPS, Dr. DeCruise assumed several leadership roles including, Positive Behavioral Interventions and Supports (PBIS) Chair, Transition Administrative Designee, and School Management Team Chair. In 2019, Dr. DeCruise transferred to Monument Academy as a Special Education coach. Later that year she was promoted to Director of Academics, which allowed Dr. DeCruise to infuse research-based practices with fidelity in all classrooms. Currently, Dr. DeCruise serves as the Principal of Monument Academy. During her tenure, the Academy scored in the top quartile of DC Charter schools in 14 out of 15 domains and ranked in the 95% Percentile among DC Charters for Instructional Culture Index for the Insight Survey in 2019. She is the proud parent of a little girl, Harlie. She enjoys reading.
          </p>
        `,
      pic: 'assets/images/team/Dr_Ashley-DeCruise.jpeg',
      scrollId: 'adc',
    },
    {
      name: 'Greg Gaskins',
      title: 'Chief of Operations',
      bio:
        `
          Greg Gaskins has been immersed in education and school finances since his graduation from the University of Pittsburgh in 2012. He attended the University of Pittsburgh on a football scholarship and  obtained his degree in Economics. He has always had a passion for helping youth succeed and uses this passion in his work at Monument as well as through coaching. Greg coaches high school football and has also coached elementary basketball. Greg brings 6 years of school financial and operational experience, as he was the Business Manager at Friendship Public Charter School Blow Pierce Academy before joining the staff at Monument. He leads Monument’s chess club and enjoys running and staying active in his spare time.
        `,
      pic: 'assets/images/team/Greg-Gaskins.jpeg',
      scrollId: 'gregGaskins',
    },
    {
      name: 'Katrice Whitaker',
      title: 'Chief of Student and Family Engagement',
      bio:
        `
          Katrice Whitaker has a 13-year tenure in special education and serving at-risk youth with the goal of reunifying families, creating equitable learning experiences, and being the voice for youth that are often left behind or silenced. After having experienced many Adverse Childhood Experiences (ACES) herself, Katrice has long ago found her purpose in protecting black and brown youth, starting her career by spreading mental health awareness through performing arts-based curricula in autism programs, juvenile detention centers and alternative schools in the DMV region. Katrice initially attended Virginia State University after high school, but ultimately received her BA in Forensic Psychology at the now University of MD Global Campus and is currently working on her Masters in Social Sciences with a concentration in Differentiation in Education. In addition to her work at Monument Academy Public Charter School, Katrice is an Advocacy Captain and Ward 6 PLE Board Member with Parents Amplifying Voices in Education (PAVE), a Community Advisor with the D.C. Policy Center, a Board Member with the Under 3 DC Coalition.
        `,
      pic: 'assets/images/team/Katrice-Whitaker.jpeg',
      scrollId: 'katriceWhitaker',
    },
    {
      name: 'Jeff McHugh',
      title: 'Director of Systems, Data & IT',
      bio:
        `
        Jeff has worked at Monument Academy since 2016. He has worked to build data-driven routines and practices across the school community by making accurate, timely, and actionable data available to staff, students, and families. He has also worked to provide students and staff with technology that enhances learning and fosters creativity. He earned his MBA at the Yale School of Management and spent six years teaching high school math at the Bronx Academy of Letters in the South Bronx. He has an MA in Secondary Education from the City College of New York and a BA in English and Economics from Northwestern University. When he's not being a total "data nerd" at Monument Academy, he's typically spending time with his wife and two children or training for his next race by running through the Capitol Hill neighborhood.
        `,
      pic: 'assets/images/team/Jeff-McHugh.jpeg',
      scrollId: 'jeffMcHugh',
    },
    {
      name: 'Anna Scudiero',
      title: 'Development Manager',
      bio:
        `
          Anna Scudiero grew up in the Chicago area and studied Political Science and Professional Writing at Valparaiso University. While in college, she interned in Washington, D.C. at the Children’s Defense Fund, conducting research on policies that impacted children and families in poverty, and at Horton’s Kids, working with middle and high school students as a youth development intern. For her senior research project, she studied the effectiveness of full-service, community schools. After graduating in 2016, she moved to Washington, D.C, and has been working at Monument Academy ever since. In addition to leading Monument’s fundraising and development work, Anna also manages our Extended Day Program and Engagement Camp Weeks. When not working, she enjoys baking fresh bread, going on walks, and relaxing with her dog!
        `,
      pic: 'assets/images/team/Anna-Scudiero.jpeg',
      scrollId: 'annaScudiero',
    },
    {
      name: 'Brittany David',
      title: 'Manager of Student Services',
      bio:
        `
          Brittany David is a first-generation college graduate. Ms. David received her Bachelor's degree in English from the University of Maryland Eastern Shore (UMES). Upon graduation, she began her educational career as a Special Education teacher in Baltimore, MD. During her time at Baltimore City School district, she obtained her Master’s degree in Special Education to solidify her passion for the work. Ms. David began working at Monument Academy Public Charter school in 2016 as a self contained teacher. She is currently pursuing her doctoral degree in Organizational Leadership, with an emphasis in special education, at Grand Canyon University. Ms. David brings over ten years of experience in the field of Special Education. In her new role as Director of Student Supports at Monument Academy PCS, Ms. David can ensure compliance with state and federal guidelines regarding student services through the following key strengths: assisting with the coordination and monitoring of evaluation timelines, case conference committee meetings, and implementation of IEPs. Ms. David is the proud mother of her daughter, Winter and a proud member of Sigma Gamma Rho Sorority, Incorporated.
        `,
      pic: 'assets/images/team/Brittany-David.jpeg',
      scrollId: 'brittanyDavid',
    },
    {
      name: 'James Long',
      title: 'Director of Safety and Security',
      bio:
        'Mr. James Long was born and raised in Washington DC and attended DC Public Schools. He graduated from Theodore Roosevelt SHS in 1999. He then attended Virginia State University on a full football scholarship.  He graduated in 2003 with a major in Criminal Justice and minor in Sociology. Mr. Long had over 8 years of experience in security prior to becoming the Head of Security at Friendship Public Charter School Blow Pierce in 2016. In his spare time, he loves to read and is passionate about track and field and football. Since he graduated college he has been giving back to youth in the form of coaching and has been a coach at Friendship Collegiate Academy since 2012 where he has helped guide over 120 student-athletes to college on either an academic or football scholarship. His favorite quote is “Never get caught up in criticism or praise all distractions come at a cost” – Dean Smith.',
      pic: 'assets/images/team/James-Long.jpeg',
      scrollId: 'jamesLong',
    },
    {
      name: 'Danielle Nelson',
      title: 'Director of Well-Being',
      bio:
        `
          Danielle Nelson, MSW, LICSW, LCSW-C is proud of her roots in Washington, DC as a native Washingtonian. She is excited to lead the Well-Being Department at Monument Academy Public Charter School, and she is enthusiastic about delivering quality services to staff, students, and families. Mrs. Nelson obtained her undergraduate degree in Psychology from Trinity University and graduate degree in Social Work from Howard University where she maintains strong partnerships. Mrs. Nelson currently mentors and provides clinical supervision to graduate students who are inspired and humbled by the helping profession. She is a member of the Phi Beta Kappa Society, Psi Chi National Honor Society in Psychology, and Phi Alpha Honor Society in Social Work. Mrs. Nelson has over 15 years of social work experience working with youth and families where she helped transform obstacles into opportunities. Over the course of Mrs. Nelson’s career, she has served and held leadership positions in schools, substance abuse treatment facilities, transitional and supportive housing programs, foster care agencies, and community-based organizations in Washington, DC. Mrs. Nelson also is a certified clinical trauma professional, and she strives to help heal her community by providing awareness about trauma and its impact on mental health, stabilizing families via mental health services, and investing in our youth. Her passion is fueled by her personal story of overcoming adversity, an undying belief in mentorship, unwavering faith, and a natural love for education. Mrs. Nelson can be found assisting others with a smile, creating safe spaces for coaching and counseling, and promoting wellness and recovery.
        `,
      pic: 'assets/images/team/Danielle-Nelson.jpeg',
      scrollId: 'danielleNelson',
    },
  ];

  ngOnInit(): void {
    this.pageTitle = 'The Monument Team';
  }
}
