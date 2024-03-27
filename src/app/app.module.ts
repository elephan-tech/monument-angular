import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view'; // ng-image-fullscreen-view

import { IonicModule } from '@ionic/angular';
import { MarkdownModule } from 'ngx-markdown';
import { SwiperModule } from 'swiper/angular';
import { JwtModule } from '@auth0/angular-jwt';
import {  PdfViewerModule  } from 'ng2-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { GraphQLModule } from '../app/api/graphql.module';

import { AppComponent } from './app.component';
import { AnimatedComponent } from './components/animated/animated.component';
import { BoardMeetingsComponent } from './components/board-meetings/board-meetings.component';
import { BlogComponent } from './components/blog/blog.component';
import { EnvTagComponent } from './components/env-tag/env-tag.component';
import { EventCalendarComponent } from './components/event-calendar/event-calendar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { KnowledgeTemplateComponent } from './components/knowledge-template/knowledge-template.component';
import { SliderComponent } from './components/slider/slider.component';
import { TopnavigationComponent } from './components/topnavigation/topnavigation.component';
import { ShowHidePasswordComponent } from './components/show-hide-password/show-hide-password.component';
import { CollectionModalComponent } from './dialogs/collections/collection-modal/collection-modal.component';
import { UserPopoverComponent } from './dialogs/popovers/user-popover/user-popover.component';

import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AwardsComponent } from './pages/about-us/awards/awards.component';
import { BoardComponent } from './pages/about-us/board/board.component';
import { MeetingComponent } from './pages/about-us/meeting/meeting.component';
import { ContactUsComponent } from './pages/about-us/contact-us/contact-us.component';
import { MeetOurCeoComponent } from './pages/about-us/meet-our-ceo/meet-our-ceo.component';
import { NewsMediaComponent } from './pages/about-us/news-media/news-media.component';
import { PartnershipsComponent } from './pages/about-us/partnerships/partnerships.component';
import { TeamComponent } from './pages/about-us/team/team.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AlertCrudComponent } from './pages/alert-crud/alert-crud.component';
import { CareersComponent } from './pages/careers/careers.component';
import { CollectionCrudComponent } from './pages/collection-crud/collection-crud.component';
import { DonateComponent } from './pages/donate/donate.component';
import { EnrollmentComponent } from './pages/enrollment/enrollment.component';
import { FamilyResourcesComponent } from './pages/family-resources/family-resources.component';
import { HomeComponent } from './pages/home/home.component';
import { KnowledgeCenterComponent } from './pages/knowledge-center/knowledge-center.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ADayAtMonumentComponent } from './pages/programs/a-day-at-monument/a-day-at-monument.component';
import { AcademicsComponent } from './pages/programs/academics/academics.component';
import {
  BoardingStudentLifeProgramComponent
} from './pages/programs/boarding-student-life-program/boarding-student-life-program.component';
import { ExtendedDayLearningComponent } from './pages/programs/extended-day-learning/extended-day-learning.component';
import {
  LifeSkillsComponent
} from './pages/programs/life-skills/life-skills.component';
import {
  NationalSchoolLunchProgramComponent
} from './pages/programs/national-school-lunch-program/national-school-lunch-program.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { WellBeingComponent } from './pages/programs/well-being/well-being.component';
import { UpdatesCalendarComponent } from './pages/updates-calendar/updates-calendar.component';
import { MenusComponent } from './pages/menus/menus.component';

import { StartCasePipe } from './pipes/start-case.pipe';
import { TimePipe } from './pipes/time.pipe';
import { AcademyCelebrateComponent } from './pages/programs/academy-celebrate/academy-celebrate.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TopnavigationComponent,
    HomeComponent,
    AboutUsComponent,
    TeamComponent,
    BoardComponent,
    MeetingComponent,
    PartnershipsComponent,
    AwardsComponent,
    ContactUsComponent,
    ProgramsComponent,
    ADayAtMonumentComponent,
    AcademicsComponent,
    BoardingStudentLifeProgramComponent,
    LifeSkillsComponent,
    WellBeingComponent,
    NationalSchoolLunchProgramComponent,
    CareersComponent,
    EnrollmentComponent,
    FamilyResourcesComponent,
    KnowledgeCenterComponent,
    DonateComponent,
    HeroComponent,
    SliderComponent,
    EventCalendarComponent,
    AnimatedComponent,
    BoardMeetingsComponent,
    NewsMediaComponent,
    BlogComponent,
    KnowledgeTemplateComponent,
    UpdatesCalendarComponent,
    ExtendedDayLearningComponent,
    MeetOurCeoComponent,
    NotFoundComponent,
    AdminComponent,
    AdminLoginComponent,
    CollectionCrudComponent,
    EnvTagComponent,
    CollectionModalComponent,
    StartCasePipe,
    TimePipe,
    AlertCrudComponent,
    ShowHidePasswordComponent,
    MenusComponent,
    UserPopoverComponent,
    AcademyCelebrateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatGridListModule,
    DragDropModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    MatExpansionModule,
    HttpClientModule,
    GraphQLModule,
    FormsModule,
    PdfViewerModule,
    SwiperModule,
    NgImageFullscreenViewModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
        allowedDomains: ['localhost:4200', 'monumentacademy.org', ],

      },
    })
  ],
  exports: [
    MatMenuModule,
    MatGridListModule,
    MatMenuModule,
    MatGridListModule,
    MatExpansionModule,
  ],
  providers: [
    HttpClient,
    HttpClientModule,
    ],
  bootstrap: [AppComponent],
})
export class AppModule {}
