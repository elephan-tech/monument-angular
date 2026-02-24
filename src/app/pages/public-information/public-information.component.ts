import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface DocumentItem {
  title: string;
  url: string;
  isExternal?: boolean;
  isRouterLink?: boolean;
}

interface StaffContact {
  role: string;
  name: string;
  email: string;
}

interface DocumentSection {
  title: string;
  icon: string;
  description?: string;
  expanded: boolean;
  documents?: DocumentItem[];
  contacts?: StaffContact[];
  routerLink?: string;
  hasSubsections?: boolean;
  subsections?: {
    title: string;
    documents: DocumentItem[];
  }[];
}

@Component({
  selector: 'app-public-information',
  templateUrl: './public-information.component.html',
  styleUrls: ['./public-information.component.scss'],
})
export class PublicInformationComponent implements OnInit {
  pageTitle = 'Public Information';
  heroImg = 'assets/images/monument-15.png';

  // Document Sections - Updated to match actual files provided
  sections: DocumentSection[] = [
    {
      title: 'School Calendar',
      icon: 'calendar-outline',
      description: 'View our academic calendar and important dates',
      expanded: false,
      documents: [
        { title: 'SY25-26 School Calendar', url: 'assets/documents/public-information/1.%20School%20Calendar%20.pdf', isExternal: true },
        { title: 'View Interactive Calendar', url: '/updates-calendar', isRouterLink: true },
      ],
    },
    {
      title: 'Student & Family Handbook',
      icon: 'people-outline',
      description: 'Policies and information for students and families including discipline policy, attendance policy, grievance procedures, non-discrimination policy, FERPA notice, and more',
      expanded: false,
      documents: [
        { title: 'SY25-26 Family and Student Handbook', url: 'assets/documents/public-information/2.%20SY25-26%20Family%20and%20Student%20Handbook.pdf', isExternal: true },
      ],
    },
    {
      title: 'Key School Staff',
      icon: 'person-outline',
      description: 'Contact information for Title IX Coordinator, McKinney-Vento Coordinator, Special Education Contact, and Safety Contact',
      expanded: false,
      documents: [
        { title: 'Key School Staff Directory', url: 'assets/documents/public-information/3.%20Key%20School%20Staff.pdf', isExternal: true },
      ],
    },
    {
      title: 'Employee Policies',
      icon: 'briefcase-outline',
      description: 'Staff handbook including sexual harassment policy, equal opportunity policy, drug-free workplace policy, complaint resolution process, and whistleblower policy',
      expanded: false,
      documents: [
        { title: 'Employee Policies SY25-26', url: 'assets/documents/public-information/4.%20Employee%20Policies%20MAPCS_SY2526.pdf', isExternal: true },
      ],
    },
    {
      title: 'Board Meeting & Information',
      icon: 'business-outline',
      description: 'Board roster, meeting schedules, agendas, and minutes',
      expanded: false,
      hasSubsections: true,
      subsections: [
        {
          title: 'Board Information',
          documents: [
            { title: 'SY25-26 Board Roster', url: 'assets/documents/public-information/5a.%20SY25-26%20Board%20Roster%20Public.pdf', isExternal: true },
            { title: 'Board Contact Information', url: 'assets/documents/public-information/5b.%20Board%20Contact%20information.pdf', isExternal: true },
            { title: 'SY25-26 Board Meeting Calendar', url: 'assets/documents/public-information/5c.%20SY25-26%20Board%20Meeting%20Calendar%20%281%29.pdf', isExternal: true },
          ],
        },
        {
          title: 'Meeting Agendas',
          documents: [
            { title: 'Board Retreat Agenda', url: 'assets/documents/public-information/5di.%20Board%20Retreat%20Agenda%20%282%29.pdf', isExternal: true },
            { title: '9/10/25 Board Meeting Agenda', url: 'assets/documents/public-information/5dii.%20AGENDA%209.10.25%20Board%20Meeting.pdf', isExternal: true },
            { title: '12/10/25 Board Meeting Agenda', url: 'assets/documents/public-information/5diii.%20December%20Board%20Meeting%20Agenda%2012.10.25.pdf', isExternal: true },
          ],
        },
        {
          title: 'Meeting Minutes',
          documents: [
            { title: '9/06/25 Board Retreat Minutes', url: 'assets/documents/public-information/5ei.%209.06.25%20Board%20Retreat%20Minutes.pdf', isExternal: true },
            { title: '9/10/25 Board Meeting Minutes', url: 'assets/documents/public-information/5eii.%209.10.25%20Board%20Meeting%20Minutes.pdf', isExternal: true },
          ],
        },
      ],
    },
    {
      title: 'Pay Scales',
      icon: 'cash-outline',
      description: 'Teacher and counselor salary scales',
      expanded: false,
      documents: [
        { title: 'Teacher & Counselor Pay Scale', url: 'assets/documents/public-information/6.%20Pay%20Scales%20MAPCS_Teacher_and_Counselor_Pay_Scale.pdf', isExternal: true },
      ],
    },
    {
      title: 'School Budgets',
      icon: 'wallet-outline',
      description: 'Annual school budgets',
      expanded: false,
      documents: [
        { title: 'FY26 Budget', url: 'assets/documents/public-information/7a.%20FY26%20Budget.pdf', isExternal: true },
      ],
    },
    {
      title: 'Form 990s',
      icon: 'document-text-outline',
      description: 'Annual IRS Form 990 filings',
      expanded: false,
      documents: [
        { title: 'Form 990 - 2023', url: 'assets/documents/public-information/8a.%202023%20990%20.pdf', isExternal: true },
        { title: 'Form 990 - 2022', url: 'assets/documents/public-information/8b.%202022%20990.pdf', isExternal: true },
        { title: 'Form 990 - 2021', url: 'assets/documents/public-information/8c.%202021%20990.pdf', isExternal: true },
      ],
    },
    {
      title: 'Annual Report',
      icon: 'bar-chart-outline',
      description: 'Monument Academy Annual Reports',
      expanded: false,
      documents: [
        { title: 'Annual Report SY24-25', url: 'assets/documents/public-information/9.%20Annual%20Report%20for%20PCSB_SY%2024-25.pdf', isExternal: true },
      ],
    },
    {
      title: 'Results of the School\'s Annual Water Testing for Lead',
      icon: 'water-outline',
      description: 'Annual water testing results for lead compliance',
      expanded: false,
      documents: [
        { title: 'Annual Water Testing Results', url: 'assets/documents/public-information/10.%20Annual%20Water%20Testing%20Results.pdf', isExternal: true },
      ],
    },
    {
      title: 'Student Enrollment Forms',
      icon: 'clipboard-outline',
      description: 'Required forms for student enrollment',
      expanded: false,
      documents: [
        { title: 'View Enrollment Information', url: '/enrollment', isRouterLink: true },
        { title: 'SY26-27 Enrollment Document List', url: 'assets/documents/public-information/SY2627%20Enrollment%20Document%20List.pdf', isExternal: true },
      ],
    },
  ];

  // Active section for detail view
  activeSection: DocumentSection | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggleSection(section: DocumentSection): void {
    // Set the active section to show the detail view
    this.activeSection = section;
    // Scroll to top of expanded section
    setTimeout(() => {
      const element = document.querySelector('.expanded-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }

  closeSection(): void {
    this.activeSection = null;
    // Scroll back to document cards
    setTimeout(() => {
      const element = document.querySelector('.violet-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  openDocument(doc: DocumentItem): void {
    if (doc.isRouterLink) {
      this.router.navigateByUrl(doc.url);
    } else {
      window.open(doc.url, '_blank');
    }
  }
}
