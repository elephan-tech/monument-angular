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
      title: 'CEO',
      bio:
       `
        <p>Dr. Jeffrey F. Grant, CEO of Monument Academy Public Charter School, is a dedicated, passionate leader who has labored in the field of education for 32 years. Dr.Grant assumed his current leadership role in July of 2019 and has met the challenge of increasing the scholars’ academic growth, improving their social-emotional health, and operating a fiscally healthy LEA. Under his leadership, Monument Academy won the 2024 Building Hope Award for STUDENT EMPOWERMENT.</p>
        <p>Before this tenure, he served as the National Head of Schools for the Friendship Education Foundation and successfully opened and improved campuses in other states. From 2005 through 2013, Dr. Grant successfully led turnaround efforts as the principal in three District of Columbia Public Schools and also worked as the DCPS Director of Families and Parents. As the principal of Friendship Public Charter School’s Blow-Pierce Academy from 2013 through 2018 Dr. Grant raised academic achievement and attained Tier 1 status for three consecutive years under the District of Columbia Public Charter School Board Performance Management Framework.</p>
        <p>Dr. Grant attended The George Washington University where he earned a Doctorate in Education Leadership and Policy Studies and a Masters of Arts in Educational Technology Leadership. Dr. Grant had previously completed his undergraduate studies at the University of the District of Columbia and Howard University with degrees in Political Science and Philosophy.</p>
        <p>While employed as a group leader at the Harvard University Graduate School of Education Principals’ Center from 2008 through 2016 he led principals from the world over as they developed their schools’ or school systems’ strategic plans. Dr. Grant has presented at conferences for the federal government, non-profit organizations, academic institutions, and Fortune 500 companies.</p>
        <p>Dr. Grant’s education philosophy incorporates strong parental engagement, character education, experiential education, and quality partnerships as means of raising academic achievement, resulting in his receiving numerous awards and commendations for his practices. His community outreach efforts include his yearly “Dr. G and Friends ToyDrive” which delivers toys, diapers and wipes to St. Ann’s Center for Children, Youth and Families. Native Washingtonians, Dr. Grant and his wife Sharnika have four adult children and reside in Goshen, Maryland.</p>
       `,
      pic: 'assets/images/team/Dr_Jeffrey-Grant.jpeg',
      scrollId: 'drjeffreyGrant',
    },
    {
      name: 'Dr. Ashley Tucker',
      title: 'Head of Schools',
      bio:
        `
          <p>Dr. Ashley Tucker serves as Head of Schools at Monument Academy, bringing over a decade of teaching and school leadership experience in the DMV. Her expertise spans educational leadership and special education, with a steadfast commitment to ensuring that all classrooms implement research-based practices with fidelity.</p>
          <p>Dr. Tucker earned her Doctorate in Educational Leadership from Nova Southeastern University, where her dissertation focused on the successful reintegration of students with emotional disabilities into mainstream learning environments. Her work reflects both a deep understanding of student needs and a dedication to creating inclusive, high-impact educational spaces.</p>
          <p>When she’s not leading and supporting the MAPCS community, Dr. Tucker enjoys spending quality time with her husband and their two children.</p>
        `,
      pic: 'assets/images/team/Dr_Ashley-DeCruise.jpeg',
      scrollId: 'adc',
    },
    {
      name: 'Greg Gaskins',
      title: 'Chief Operating Officer',
      bio:
        `
          Greg Gaskins has been immersed in education and school finances since his graduation from the University of Pittsburgh in 2012. He attended the University of Pittsburgh on a football scholarship and  obtained his degree in Economics. He has always had a passion for helping youth succeed and uses this passion in his work at Monument as well as through coaching. Greg coaches high school football and has also coached elementary basketball. Greg brings 6 years of school financial and operational experience, as he was the Business Manager at Friendship Public Charter School Blow Pierce Academy before joining the staff at Monument. He leads Monument’s chess club and enjoys running and staying active in his spare time.
        `,
      pic: 'assets/images/team/Greg-Gaskins.jpeg',
      scrollId: 'gregGaskins',
    },
    {
      name: 'Katrice Turner',
      title: 'Chief of Family and Community Engagement',
      bio:
        `
          <p>Katrice Turner, a 3rd generation native Washingtonian, has a 17-year tenure in special education and serving at-risk youth with the goal of reunifying & stabilizing families, creating equitable learning experiences, and being the voice for families that are often disregarded, left behind or silenced.  After having experienced many Adverse Childhood Experiences (ACES) herself, Katrice has long ago found her purpose in protecting black and brown youth, starting her career by spreading mental health awareness through performing arts-based curricula in autism programs, juvenile detention centers and alternative schools in the DMV region. Her passion for education equity was truly ignited through her plight in advocating for her eldest of 4 sons, who is on the autism spectrum, through DC’s educational landscape.  Katrice initially attended Virginia State University after high school, but ultimately received her BA in Forensic Psychology at the now University of MD Global Campus and is currently enrolled to obtain her Masters in Public Policy/ Juris Doctor at the University of Maryland, College Park.   In addition to her work at Monument Academy Public Charter School, Katrice remains overly engaged in DC Ed-policy by serving as a Citywide Board Member of Parents Amplifying Voices in Education (PAVE), Needs Assessment Committee Member of Mayor Bowser’s OST Commission, Community Advisor with the D.C. Policy Center, Executive Board Member of McKinley Tech’s PTO, member of DC’s Citywide LSAT and Wards 5 & 7 ’s Education Equity Committee.</p>
          <p>While you are bound to see Katrice somewhere across the District speaking on behalf of DC students and families, you will always see her enjoying her favorite role of Mom to her four sons, teaching dance at a dance studio near you, making cooking tutorial videos, head first into a good book, researching random neuroscience/behavior facts or advocating for Apol-1 Mediated Kidney Disease (AMKD) Awareness due to her son’s recent diagnosis.</p>
        `,
      pic: 'assets/images/team/Katrice-Whitaker.jpeg',
      scrollId: 'katriceWhitaker',
    },
    {
      name: 'Danielle Nelson',
      title: 'Chief of Well-Being',
      bio:
        `
          <p>Danielle Nelson, LICSW, LCSW-C, is a dual-licensed clinical social worker in Washington, DC, and Maryland. She is currently pursuing her doctoral degree in Educational Leadership and Organizational Innovation (Ed.D.) at Marymount University, where her research examines the impact of social and emotional learning, specifically, mindfulness-based interventions on youth well-being in urban schools. Mrs. Nelson obtained her undergraduate degree in Psychology from Trinity University and her graduate degree in Social Work from Howard University. She is a member of the Phi Beta Kappa Society, Psi Chi National Honor Society in Psychology, and Phi Alpha Honor Society in Social Work.</p>
          <p>As a native Washingtonian, Mrs. Nelson is proud of her dedication to the residents of Washington, DC. She has 20 years of social work experience working with youth and families, and she continues to help her community transform obstacles into opportunities. Throughout Mrs. Nelson’s career, she has served and held various leadership positions in schools, behavioral health agencies, and social service agencies in Washington, DC, and she maintains strong partnerships with key agencies to ensure comprehensive services are provided to all stakeholders.</p>
          <p>Currently, Mrs. Nelson enjoys her work in the capacity of a trauma-informed educator as she raises awareness about the impact of trauma, adverse childhood experiences, and resilience. She is often found helping others with a smile, creating opportunities for coaching and mentorship, and promoting wellness.</p>
        `,
      pic: 'assets/images/team/Danielle-Nelson.jpeg',
      scrollId: 'danielleNelson',
    },
    {
      name: 'Jeff McHugh',
      title: 'Data Systems & IT Chief',
      bio:
        `
        Jeff has worked at Monument Academy since 2016. He has worked to build data-driven routines and practices across the school community by making accurate, timely, and actionable data available to staff, students, and families. He has also worked to provide students and staff with technology that enhances learning and fosters creativity. He earned his MBA at the Yale School of Management and spent six years teaching high school math at the Bronx Academy of Letters in the South Bronx. He has an MA in Secondary Education from the City College of New York and a BA in English and Economics from Northwestern University. When he's not being a total "data nerd" at Monument Academy, he's typically spending time with his wife and two children or training for his next race by running through the Capitol Hill neighborhood.
        `,
      pic: 'assets/images/team/Jeff-McHugh.jpeg',
      scrollId: 'jeffMcHugh',
    },
    {
      name: 'Anna Scudiero',
      title: 'Development Director',
      bio:
        `
          Anna Scudiero grew up in the Chicago area and studied Political Science and Professional Writing at Valparaiso University. While in college, she interned in Washington, D.C. at the Children’s Defense Fund, conducting research on policies that impacted children and families in poverty, and at Horton’s Kids, working with middle and high school students as a youth development intern. For her senior research project, she studied the effectiveness of full-service, community schools. After graduating in 2016, she moved to Washington, D.C, and has been working at Monument Academy ever since. In addition to leading Monument’s fundraising and development work, Anna also manages our Extended Day Program and Engagement Camp Weeks. When not working, she enjoys baking fresh bread, going on walks, and relaxing with her dog!
        `,
      pic: 'assets/images/team/Anna-Scudiero.jpeg',
      scrollId: 'annaScudiero',
    },
    {
      name: 'Brittany Carder',
      title: 'Director of Student Services',
      bio:
        `
          <p>Brittany Carter is a dedicated educator and first-generation college graduate with over thirteen years of experience in the field of Special Education. She earned her Bachelor’s degree in English from the University of Maryland Eastern Shore and began her educational career as a Special Education teacher in Baltimore, Maryland. During her tenure with the Baltimore City School District, she deepened her commitment to student advocacy by earning a Master’s degree in Special Education.</p>
          <p>In 2016, Mrs. Carter joined Monument Academy Public Charter School as a self-contained classroom teacher. Through her leadership, expertise, and commitment to student success, she rose to the roles of Special Education Coordinator, Special Education Manager and, ultimately, Director of Student Supports. In her current position, she ensures compliance with state and federal guidelines related to student services. Her strengths include overseeing evaluation timelines, facilitating case conference meetings, and ensuring the effective implementation of Individualized Education Programs (IEPs).</p>
          <p>Mrs. Carter is also pursuing her doctoral degree in Organizational Leadership with an emphasis in Special Education at Grand Canyon University. Beyond her work in schools, she serves as a Psychiatric Rehabilitation Counselor, supporting individuals with mental health conditions to build life skills and access resources for independent living.</p>
          <p>Outside of her professional commitments, Mrs. Carter enjoys quality time with her husband Raymond, and two daughters, Winter and Reign. She is actively involved in her community—volunteering, feeding the homeless, and supporting local initiatives. A proud member of Sigma Gamma Rho Sorority, Incorporated, and The National Society of Leadership and Success. Mrs. Carter continues to embody service, scholarship, and leadership in all she does.</p>
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
  ];

  ngOnInit(): void {
    this.pageTitle = 'The Monument Team';
  }
}
