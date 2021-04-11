import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TeamComponent } from './pages/about-us/team/team.component';
import { BoardComponent } from './pages/about-us/board/board.component';
import { PartnershipsComponent } from './pages/about-us/partnerships/partnerships.component';
import { AwardsComponent } from './pages/about-us/awards/awards.component';
import { ContactUsComponent } from './pages/about-us/contact-us/contact-us.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { ADayAtMonumentComponent } from './pages/programs/a-day-at-monument/a-day-at-monument.component';
import { AcademicsComponent } from './pages/programs/academics/academics.component';
import { BoardingStudentLifeProgramComponent } from './pages/programs/boarding-student-life-program/boarding-student-life-program.component';
import { LifeSkillsComponent } from './pages/programs/life-skills/life-skills.component';
import { WellBeingComponent } from './pages/programs/well-being/well-being.component';
import { NationalSchoolLunchProgramComponent } from './pages/programs/national-school-lunch-program/national-school-lunch-program.component';
import { CareersComponent } from './pages/careers/careers.component';
import { EnrollmentComponent } from './pages/enrollment/enrollment.component';
import { FamilyResourcesComponent } from './pages/family-resources/family-resources.component';
import { KnowledgeCenterComponent } from './pages/knowledge-center/knowledge-center.component';
import { DonateComponent } from './pages/donate/donate.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, //this makes the landing page
  { path: 'pages/about-us/about-us.component', component: AboutUsComponent },
  { path: './pages/about-us/team/team.component', component: TeamComponent },
  { path: './pages/about-us/board/board.component', component: BoardComponent },

  {
    path: './pages/about-us/partnerships/partnerships.component',
    component: PartnershipsComponent,
  },
  {
    path: './pages/about-us/awards/awards.component',
    component: AwardsComponent,
  },
  {
    path: './pages/programs/a-day-at-monument/a-day-at-monument.component',
    component: ContactUsComponent,
  },
  { path: './pages/programs/programs.component', component: ProgramsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
