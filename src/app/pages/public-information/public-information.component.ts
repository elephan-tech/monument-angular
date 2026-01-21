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
        { title: 'SY25-26 School Calendar', url: 'assets/documents/public-information/1. School Calendar .pdf', isExternal: true },
        { title: 'View Interactive Calendar', url: '/updates-calendar', isRouterLink: true },
      ],
    },
    {
      title: 'Student & Family Handbook',
      icon: 'people-outline',
      description: 'Policies and information for students and families including discipline policy, attendance policy, grievance procedures, non-discrimination policy, FERPA notice, and more',
      expanded: false,
      documents: [
        { title: 'SY25-26 Family and Student Handbook', url: 'assets/documents/public-information/2. SY25-26 Family and Student Handbook.pdf', isExternal: true },
      ],
    },
    {
      title: 'Key School Staff',
      icon: 'person-outline',
      description: 'Contact information for Title IX Coordinator, McKinney-Vento Coordinator, Special Education Contact, and Safety Contact',
      expanded: false,
      documents: [
        { title: 'Key School Staff Directory', url: 'assets/documents/public-information/3. Key School Staff.pdf', isExternal: true },
      ],
    },
    {
      title: 'Employee Policies',
      icon: 'briefcase-outline',
      description: 'Staff handbook including sexual harassment policy, equal opportunity policy, drug-free workplace policy, complaint resolution process, and whistleblower policy',
      expanded: false,
      documents: [
        { title: 'Staff Handbook', url: 'assets/documents/public-information/4. Employee Policies (Staff Handbook)', isExternal: true },
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
            { title: 'SY25-26 Board Roster', url: 'assets/documents/public-information/5a. SY25-26 Board Roster Public.pdf', isExternal: true },
            { title: 'Board Contact Information', url: 'assets/documents/public-information/5b. Board Contact information.pdf', isExternal: true },
            { title: 'SY25-26 Board Meeting Calendar', url: 'assets/documents/public-information/5c. SY25-26 Board Meeting Calendar (1).pdf', isExternal: true },
          ],
        },
        {
          title: 'Meeting Agendas',
          documents: [
            { title: 'Board Retreat Agenda', url: 'assets/documents/public-information/5di. Board Retreat Agenda (2).pdf', isExternal: true },
            { title: '9/10/25 Board Meeting Agenda', url: 'assets/documents/public-information/5dii. AGENDA 9.10.25 Board Meeting.pdf', isExternal: true },
            { title: '12/10/25 Board Meeting Agenda', url: 'assets/documents/public-information/5diii. December Board Meeting Agenda 12.10.25.pdf', isExternal: true },
          ],
        },
        {
          title: 'Meeting Minutes',
          documents: [
            { title: '9/06/25 Board Retreat Minutes', url: 'assets/documents/public-information/5ei. 9.06.25 Board Retreat Minutes.pdf', isExternal: true },
            { title: '9/10/25 Board Meeting Minutes', url: 'assets/documents/public-information/5eii. 9.10.25 Board Meeting Minutes.pdf', isExternal: true },
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
        { title: 'Teacher & Counselor Pay Scale', url: 'assets/documents/public-information/6. Pay Scales MAPCS_Teacher_and_Counselor_Pay_Scalepdf', isExternal: true },
      ],
    },
    {
      title: 'School Budgets',
      icon: 'wallet-outline',
      description: 'Annual school budgets',
      expanded: false,
      documents: [
        { title: 'FY26 Budget', url: 'assets/documents/public-information/7a. FY26 Budget.pdf', isExternal: true },
      ],
    },
    {
      title: 'Form 990s',
      icon: 'document-text-outline',
      description: 'Annual IRS Form 990 filings',
      expanded: false,
      documents: [
        { title: 'Form 990 - 2023', url: 'assets/documents/public-information/8a. 2023 990 .pdf', isExternal: true },
        { title: 'Form 990 - 2022', url: 'assets/documents/public-information/8b. 2022 990.pdf', isExternal: true },
        { title: 'Form 990 - 2021', url: 'assets/documents/public-information/8c. 2021 990.pdf', isExternal: true },
      ],
    },
    {
      title: 'Annual Report',
      icon: 'bar-chart-outline',
      description: 'Monument Academy Annual Reports',
      expanded: false,
      documents: [
        { title: 'Annual Report SY24-25', url: 'assets/documents/public-information/9. Annual Report for PCSB_SY 24-25.pdf', isExternal: true },
      ],
    },
    {
      title: 'Student Enrollment Forms',
      icon: 'clipboard-outline',
      description: 'Required forms for student enrollment',
      expanded: false,
      documents: [
        { title: 'View Enrollment Information', url: '/enrollment', isRouterLink: true },
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
