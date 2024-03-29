import { AlertCrudComponent } from './pages/alert-crud/alert-crud.component';
import { CollectionCrudComponent } from './pages/collection-crud/collection-crud.component';
import { AdminComponent } from './pages/admin/admin.component';
import { KnowledgeTemplateComponent } from './components/knowledge-template/knowledge-template.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwardsComponent } from './pages/about-us/awards/awards.component';
import { ContactUsComponent } from './pages/about-us/contact-us/contact-us.component';
import { DonateComponent } from './pages/donate/donate.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TeamComponent } from './pages/about-us/team/team.component';
import { BoardComponent } from './pages/about-us/board/board.component';
import { MeetingComponent } from './pages/about-us/meeting/meeting.component';
import { PartnershipsComponent } from './pages/about-us/partnerships/partnerships.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { ADayAtMonumentComponent } from './pages/programs/a-day-at-monument/a-day-at-monument.component';
import { AcademicsComponent } from './pages/programs/academics/academics.component';
import {
  BoardingStudentLifeProgramComponent
} from './pages/programs/boarding-student-life-program/boarding-student-life-program.component';
import {
  LifeSkillsComponent
} from './pages/programs/life-skills/life-skills.component';
import { WellBeingComponent } from './pages/programs/well-being/well-being.component';
import {
  NationalSchoolLunchProgramComponent
} from './pages/programs/national-school-lunch-program/national-school-lunch-program.component';
import { CareersComponent } from './pages/careers/careers.component';
import { EnrollmentComponent } from './pages/enrollment/enrollment.component';
import { FamilyResourcesComponent } from './pages/family-resources/family-resources.component';
import { KnowledgeCenterComponent } from './pages/knowledge-center/knowledge-center.component';
import { NewsMediaComponent } from './pages/about-us/news-media/news-media.component';
import { BlogComponent } from './components/blog/blog.component';
import { UpdatesCalendarComponent } from './pages/updates-calendar/updates-calendar.component';
import { ExtendedDayLearningComponent } from './pages/programs/extended-day-learning/extended-day-learning.component';
import { MeetOurCeoComponent } from './pages/about-us/meet-our-ceo/meet-our-ceo.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { MenusComponent } from './pages/menus/menus.component';
import {AcademyCelebrateComponent} from './pages/programs/academy-celebrate/academy-celebrate.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // this makes the landing page
  { path: 'about-us', component: AboutUsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'board', component: BoardComponent },
  { path: 'board-meetings', component: MeetingComponent },
  { path: 'meet-our-ceo', component: MeetOurCeoComponent },
  { path: 'news-media', component: NewsMediaComponent },
  {
    path: 'news-media/:blogID',
    component: BlogComponent,
  },

  {
    path: 'partnerships',
    component: PartnershipsComponent,
  },
  {
    path: 'awards',
    component: AwardsComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'a-day-at-monument',
    component: ADayAtMonumentComponent,
  },
  { path: 'programs', component: ProgramsComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'academics', component: AcademicsComponent },
  {
    path: 'boarding-student-life-program',
    component: BoardingStudentLifeProgramComponent,
  },
  {
    path: 'academy-celebrate',
    component: AcademyCelebrateComponent,
  },
  { path: 'life-skills-program', component: LifeSkillsComponent },
  { path: 'well-being-program', component: WellBeingComponent },
  {
    path: 'national-lunch-program',
    component: NationalSchoolLunchProgramComponent,
  },
  {
    path: 'extended-day-learning',
    component: ExtendedDayLearningComponent,
  },
  { path: 'careers', component: CareersComponent },
  { path: 'enrollment', component: EnrollmentComponent },
  { path: 'family-resources', component: FamilyResourcesComponent },
  {
    path: 'knowledge-center',
    component: KnowledgeCenterComponent,
  },
  {
    path: 'knowledge-center/:id',
    component: KnowledgeTemplateComponent,
  },
  { path: 'updates-calendar', component: UpdatesCalendarComponent },
  { path: 'admin-login', component: AdminLoginComponent },

  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  {
    path: 'admin/menus',
    component: MenusComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/emergencyMessage',
    component: AlertCrudComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/:collectionType',
    component: CollectionCrudComponent,
    canActivate: [AuthGuard],
  },


  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
