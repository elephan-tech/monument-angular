import { environment } from 'src/environments/environment';
import { isEmpty } from 'lodash';
import { ApiService } from 'src/app/services/api/api.service';
import { BehaviorSubject } from 'rxjs';
import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `<div [innerHTML]="data | safeHtml"></div>`,
})
export class BoardComponent implements OnInit, AfterViewInit {

  constructor(private route: ActivatedRoute, private api: ApiService) { }
  pageTitle: string;
  heroImg: string;
  fragment: string;
  fileUrl = environment.apiUrl;
  mainLogo = 'assets/monument-main-logo.png';

  board = [
    {
      bioPic:
        'assets/images/board/Tycely-Williams-Monument-Academy-Board-Chair.png',
      name: 'Tycely Williams',
      scrollId: 'TycelyWilliams',
      title: 'Board Chair',
      bio:
        'Tycely Williams is the Vice President of Development at the YWCA.Prior to that, she served as Regional Chief Development Officer at Red Cross. She has raised and managed more than $69 million dollars for nonprofit organizations. Prior to Red Cross, she was Association Director of Major Gifts for the YMCA of Metropolitan Washington, and before that she founded and led a professional services consulting company for six years. Over the past 18 years, she has served as a Director of Development for two health and human services organizations, the Artistic Director of two community-based dance studios, and the Executive Director for a nonprofit organization founded by a Fortune 500 Company. Ms. Williams holds an Executive Masters in Leadership from The McDonough School of Business at Georgetown University. A Cum Laude graduate of Wake Forest University, Tycely possesses a Bachelor of Arts degree in Communications with distinguished departmental honors and a minor in Journalism.Ms. Williams serves on the governing boards of the Association of Fundraising Professionals Washington Metro Chapter and Calvary Healthcare.',
      excites:
        'I am honored to stand with the visionary Emily Bloomfield, lock hearts with the Monument Academy Board of Trustees so we may partner with compassionate parents and devoted teachers to create a safe place for children to learn, laugh and love. The strikingly beautiful smiles of our parents, teachers and children excite and inspire me.',
      favTeacher:
        'I loved every teacher; my mother and father were teachers. My high school debate coach Ms. Marilee Dukes tops the lists of teachers I loved. Ms. Dukes taught me to dream. She would say, “Tycely stop paying attention to me and pay attention to you….look out the window and dream child, prepare to become who you want to be and do what you’ve yet to see.”',
    },
    {
      bioPic: 'assets/images/board/tameria-lewis.png',
      name: 'Tameria Lewis',
      scrollId: 'TameriaLewis',
      title: 'Vice Chair',
      bio:
        'Tameria (Tami) Lewis is an educational consultant and is the former Deputy Director of Kingsman Academy Public Charter School. Tami grew up in foster care in Alabama before attending George Washington University and settling in Washington DC in the late 1980s. She has held numerous leadership positions in DC government and the charter school sector focused on improving educational opportunities and services for at-risk children and students with disabilities. Prior to joining Kingsman Academy, she was the Chief Compliance Officer for Cesar Chavez Public Charter Schools and previously served as Director of Student Support Services at E.L. Haynes Public Charter School. As the Senior Policy Advisor for special education at the DC Public Charter School Board, she developed policies and procedures to monitor special education services at charter schools and collaborated with stakeholders to develop and secure funding for innovative programming for students with significant service needs.<br><br>Prior to her work in the DC charter sector, Ms. Lewis served on the Mayor’s executive team that transitioned state education agency responsibilities from DC Public Schools to the then newly established Office of the State Superintendent of Education (OSSE) and was OSSE’s first Assistant Superintendent for Special Education. In this role, she led OSSE’s successful efforts to resolve multiple federal special education class actions by developing and implementing policies and systems to improve student outcomes and ensure compliance with local and federal special education laws. Before moving to OSSE she was the Senior Policy Advisor for Education and Service Integration in the Mayor’s Office of Policy and Legislative Affairs after holding several senior D.C. Council staff positions, including Judiciary and Education Committee Clerk, where she focused on the intersection of child welfare, juvenile justice and education policy.',
    },
    {
      bioPic: 'assets/images/board/Donna-A.png',
      name: 'Donna Anthony',
      scrollId: 'DonnaAnthony',
      title: 'Board Member',
      bio:
        'Donna Anthony serves as the Executive Vice President of Clinical Strategy for The HSC Health Care System. She is charged with leading The HSC Pediatric Center, HSC Home Care and HSC Health and Residential Services. She currently serves as an appointed member of the DC Maternal Mortality Review Committee, the DC Maternal and Child Health Advisory Committee, and continues to work with DC Public Schools on early childhood health initiatives. <br><br> Prior to joining The HSC Health Care System, Ms. Anthony served as the Assistant Superintendent of Health & Wellness at the D.C. Office of the State Superintendent of Education. In this role, she oversaw all of the federal nutrition programs for schools and child care centers, state athletics, and implementation of federal and local grant programs and services that support the health and wellbeing of children in schools and child care centers in the District. In that capacity, she served as an appointed member of the D.C. Food Policy Council, the Healthy Youth and Schools Commission, the Medical Care Advisory Committee and the Behavioral Health Council. <br><br> Ms. Anthony has a long-standing history of working with children with disabilities in various programs at D.C. Public Schools. She was instrumental in the opening of Early Stages, the early childhood special education evaluation center, and transformed Medicaid billing for DCPS, which increased revenue ten-fold. She has also served as a gymnastics coach for the Special Olympics in Pennsylvania.',
    },
    {
      bioPic: 'assets/images/board/Emily-Bloomfield.png',
      name: 'Emily Bloomfield',
      scrollId: 'EmilyBloomfield',
      title: 'Board Member',
      bio:
        'Emily Bloomfield is the founder of Monument Academy Public Charter School. Ms. Bloomfield brings deep knowledge of the public school sector — both traditional and charter — resulting from her years of serving on the DC Public Charter School Board and as an elected member and President of the Santa Monica-Malibu Unified School District Board of Education. She has experience in strategic planning, marketing, business, recruiting, staffing and working in startups through her work at CitySearch, Carparts.com, the LA Times and other organizations. Ms. Bloomfield has a BA from the University of Chicago, an MPA from The Maxwell School of Citizenship and Public Affairs at Syracuse University and an M.Phil in Economics for Oxford University.',
    },
    // {
    //   bioPic: 'assets/images/board/NeelaRathinasamy.png',
    //   name: 'Neela Rathinasamy',
    //   scrollId: 'NeelaRathinasamy',
    //   title: 'Board Member',
    //   bio:
    //     'Neela has worked in public education in the District of Columbia for over a decade, including eight years at the District of Columbia Public Schools (DCPS) in a variety of roles. As Deputy Chief of Special Education Compliance, she managed DCPS’ response to four major federal lawsuits and monitoring by state and federal government. DCPS has since exited three out of four lawsuits, including two that were nearly two decades old. She was also the Chief of Staff in the Office of General Counsel, Deputy Chief of Central Office Effectiveness in the Office of Human Capital and a member of the Chancellor’s critical response team. Additionally, she served as the Assistant Superintendent of Operations in the Office of the State Superintendent of Education (OSSE), the state education agency of D.C., overseeing grants management, dispute resolution, enrollment and residency support, building operations and procurement planning. Neela is currently an independent consultant. She has a J.D. from the University of Virginia School of Law and a B.A. in government from the College of William and Mary. She lives in Washington, D.C. with her husband and two daughters.',
    //   excites:
    //     'Monument Academy serves children in a fundamentally different way than a traditional school. I’m excited about the school’s focus on meeting students where they are, operating a weekday boarding program, filling their lives with supportive adults who believe in their potential, and focusing on the needs of the entire family so that each student can achieve greatness.',
    //   favTeacher:
    //     'I’ve been blessed to have many important teachers in my life, my parents being the most important of all. My high school history teacher, Ms. Wood, is the person I credit with challenging my world view and daring me to dream. She taught me the importance and power of a single person believing in you, which is what I hope that each student at Monument Academy feels in their time at the school.',
    // },
    // {
    //   bioPic: '',
    //   name: 'Sharisse Baltimore',
    //   scrollId: 'SharisseBaltimore',
    //   title: 'Parent Board Member',
    //   bio: '',
    // },
    {
      bioPic: '',
      name: 'James Waller',
      scrollId: 'JamesWaller',
      title: 'Board Member',
      bio: '',
    },
    {
      bioPic: '',
      name: 'Carla Watson',
      scrollId: 'CarlaWatson',
      title: 'Board Member',
      bio: '',
    },
    {
      bioPic: '',
      name: 'Dr. Denisha Carter',
      scrollId: 'drDenishaCarter',
      title: 'Board Member',
      bio: '',
    },
    {
      bioPic: '',
      name: 'Patricia Brantley',
      scrollId: 'patriciaBrantley',
      title: 'Board Member',
      bio: '',
    },
    {
      bioPic: '',
      name: 'Requita McNeil',
      scrollId: 'RequitaMcNeil',
      title: 'Parent Board Member',
      bio: '',
    },
    {
      bioPic: '',
      name: 'Tyrell Monroe',
      scrollId: 'TyrellMonroe',
      title: 'Parent Board Member',
      bio: '',
    },
    {
      bioPic: '',
      name: 'Chuck Jones',
      scrollId: 'ChuckJones',
      title: 'Board Member',
      bio: '',
    },
  ];

  boardMeetings: any;
  archivedMeetings: any;
  boardMeetingsSub = new BehaviorSubject([]);
  fromDate: Date = new Date(Date.now());

  ngOnInit(): void {
    this.pageTitle = 'Board of Directors';
    this.heroImg = '';
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
    this.api.getData('boardMeetings').subscribe(result => {
      if (!isEmpty(result)) {
        this.boardMeetings = result.data.filter((item: any) =>
          new Date(item?.date?.value).getTime() >= this.fromDate.getTime()
        );
        this.archivedMeetings = result.data.filter((item: any) =>
          new Date(item?.date?.value).getTime() < this.fromDate.getTime()
        )
          .reverse();
      }
    });
  }

  ngAfterViewInit(): void {
    try {
      const topOffset = document.getElementById(this.fragment).getBoundingClientRect().top;
      window.scrollTo({ top: topOffset - 1500, behavior: 'smooth' });

      // document.querySelector('#' + this.fragment).scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    } catch (e) { }
  }
}
