import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-knowledge-center',
  templateUrl: './knowledge-center.component.html',
  styleUrls: ['./knowledge-center.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `<div [innerHTML]="data"></div>`,
})
export class KnowledgeCenterComponent implements OnInit {
  pageTitle: string;
  heroImg: string;
  panelOpenState = false;

  constructor() {}

  ngOnInit() {
    this.pageTitle = 'Knowledge Center';
    this.heroImg = 'assets/images/monument-7.png';
  }

  model = [
    {
      title: 'Family-Style Boarding Life',
      description:
        'Residential life in a family setting with house parents and shared responsibilities.',
      mainContent:
        'At Monument Academy, students experience residential life in a family setting with house parents and shared responsibilities. Explore the collection of artifacts below or click to learn more about our approach. For our parent and family summary of this element of our model, visit',
      routingTitle: 'Boarding and Student Life Program',
      routingUrl: '/boarding-student-life-program',
      violetContent: '',
    },
    {
      title: 'Safe and Supportive Student Culture',
      description:
        'Creation and maintenance of a positive culture among students.',
      mainContent:
        'At Monument Academy, every team member works collaboratively to help foster and maintain a safe and supportive student culture.',
      routingTitle: '',
      routingUrl: '',
      violetContent:
        'Monument Academy employs a holistic approach anchored in the Positive Behavior Interventions Supports (PBIS) model to establish behavioral support and create a social culture that emphasizes collaboration and teamwork, and that promotes social, emotional, and academic success for all students. Our approach focuses on building self-motivation and self-awareness so that our students make the connections between their life goals and the work they do every day in school to accomplish those outcomes. We are committed to fostering a growth mindset that demonstrates the connection between effort and improvement, and creating a culture that values working hard, persistence, and improvement.',
    },
    {
      title: 'Highly Personalized Instruction',
      description:
        'Academics differentiated based on needs, including teaching, curriculum and assessment.',
      mainContent:
        'At Monument Academy, we work to ensure our academic program is highly personalized and responsive to the needs, interests, and aspirations of every student. Explore the collection of artifacts below or click to learn more about our approach. For our parent and family summary of this element of our model, visit',
      routingTitle: 'Academics',
      routingUrl: '/academics',
    },
    {
      title: 'Holistic Health and Well-being',
      description:
        'Social-emotional well-being, and mental health programming and supports.',
      mainContent:
        'At Monument Academy, we take a holistic approach to health and well-being. Explore the collection of artifacts below or click to learn more about our approach. For our parent and family summary of this element of our model, visit',
      routingTitle: 'Well Being Program',
      routingUrl: '/well-being-program',
    },
    {
      title: 'Skills for life',
      description:
        'Development of practical competencies that prepare students for responsibilities and opportunities beyond school.',
      mainContent:
        'At Monument Academy, we help every child develop the practical competencies necessary for students’ responsibilities and life opportunities beyond school. Explore the collection of artifacts below or click to learn more about our approach. For our parent and family summary of this element of our model, visit',
      routingTitle: 'Life Skills Program',
      routingUrl: '/life-skills-program',
    },
    {
      title: 'Resilient, Responsive, and Caring Staff',
      description:
        'Support for and management of staff; staff culture; hiring and onboarding.',
      mainContent:
        'Monument Academy’s leadership team employs a purposeful human capital strategy, striving to recruit, develop and sustain our highly resilient, responsive, and caring staff.',
      violetContent:
        'One of Monument Academy’s core values is sustaining staff. Mental health professionals have told us that the most important variable in a child’s life is to have a consistent, caring adult by and on their side. We firmly believe that staff should have the time and space to learn, collaborate with each other, reflect and celebrate. We know that this work is demanding, therefore it is important that we have a culture of working collaboratively and providing opportunities for our residential staff and academic staff to interact regularly.',
    },
  ];

  keyEnablers = [
    {
      title: 'Deep connections with family and community',
      description: 'Families are honored as partners and experts.',
      mainContent:
        'At Monument Academy, we are invested in partnering with parents and stakeholders in the community to ensure that all of our students receive all necessary supports.',
      violetContent:
        'Monument Academy believes in the importance of family engagement and connection. Whoever is taking care of and involved in our students’ lives are important members of our team, and we are committed to including them at the table, whether that table is at the school or in their home. We have been/continue to be guided by the work and best-practices of the Flamboyan Foundation in developing our model. We know that caretakers want to stay in touch with students and their progress, which is why we provide Sunday evening drop-offs and exchanges with Houseparents, schoolwide events where parents are invited, a evening phone call home, and opportunities for parents/community members to chaperone trips/ volunteer at the school.',
    },
    {
      title: 'Appealing and relevant physical space',
      description:
        'Purposeful design, use of space, and ongoing care for the physical environment.',
      mainContent:
        'At Monument Academy, the design, use, and ongoing care of our physical space plays an essential role in enabling our model to meet the physical, academic, and socio-emotional needs of all of our students.',
      violetContent:
        'The needs of Monument Academy are unique, as we host residential accommodation as well as an educational space. Our space is intentionally planned to best serve students, teachers and innovative instructional strategies. We have built out several additional spaces to meet the social emotional, and academic needs of our students. Our spaces are designed to serve the relevant needs of the students, and are focused on enhancing student performance and outcomes.',
    },
    {
      title: 'Smooth and service-oriented operations',
      description:
        'Administration and operations function in service to students, families, and educators.',
      mainContent:
        'At Monument Academy, administration and operations function in service of students, families and educators. ',
      violetContent:
        'The administrative staff leads the School’s different functional teams, which are Teaching, Well-being, Student Life and Extended Day Learning, and Operations. Administrative staff includes the CEO, Principal, Director of Well-being, Director of Student Life and Extended Day Learning and the Director of Operations.Operations staff supports the daily operations of the School. Their tasks include (but are not limited to) procurement, inventory management, vendor management, facilities maintenance, compliance and reporting.',
    },
    {
      title: 'Supportive and embedded partnerships',
      description:
        'Deep, aligned partnerships with nonprofit, public and private sector organizations.',
      mainContent:
        'At Monument Academy, our work is enabled by deep, aligned partnerships with nonprofit, public safety and private sector organizations.',
      violetContent:
        'Monument Academy continually draws on outside experts and resources to bring the best solutions to achieve our mission and amplify our reach.  We strategically build and intentionally explore partnerships with organizations that are devoted to working towards a shared goal around student success.One such key partnership is with Georgetown University, which provides ongoing group and individual therapy for our students. We are committed to regularly expanding opportunities for our students, families, staff, and the community by connecting and leveraging resources that supports the work we do. ',
    },
    {
      title: 'Proactive management of safety and risk',
      description: 'Risk mitigation and safety protocols.',
      mainContent:
        'At Monument Academy, our approach to strategy and risk management is to limit, avoid, transfer, and accept varying degrees of risk through partnering with our insurance broker.',
      violetContent:
        'At Monument we partner with an insurance broker and seek legal counsel to ensure that the insurance we have will be necessary to meet our needs and that it will meet or exceed DCPCSB’s minimum requirements. Our goal is to limit risk by providing excellent trainings to our staff. We strive to avoid and transfer risk by implementing good practices with contracts. Lastly, we accept risk by securing the varying insurance coverages.',
    },
    {
      title: 'Excellent school governance',
      description:
        'Best-in-class board structure and policies; transparent organization structure.',
      mainContent:
        'At Monument Academy, the board of directors is responsible for overseeing the contract of the CEO, reviewing and approving the budget, and ensuring the school is meeting or exceeding its academic and other performance goals.',
      violetContent:
        'The goals of the Board include academic growth and achievement measures, gateway measures (also academic achievement) and non-academic goals such as meeting or exceeding set attendance and re-enrollment rates, and minimizing out of school suspensions. The Board is not engaged in the day-to-day operations of the school. The CEO of the school reports to the Board.',
    },
  ];
}
