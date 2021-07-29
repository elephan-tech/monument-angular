import { FamilyResource } from './models/family-resources';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopnavigationComponent } from './components/topnavigation/topnavigation.component';
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
import { DonateComponent } from './pages/donate/donate.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { IonicModule } from '@ionic/angular';
import { HeroComponent } from './components/hero/hero.component';
import { SliderComponent } from './components/slider/slider.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventCalendarComponent } from './components/event-calendar/event-calendar.component';
import { AnimatedComponent } from './components/animated/animated.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { NewsMediaComponent } from './pages/about-us/news-media/news-media.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { BlogComponent } from './components/blog/blog.component';
import { KnowledgeTemplateComponent } from './components/knowledge-template/knowledge-template.component';
import { GraphQLModule } from './graphql.module';
import { UpdatesCalendarComponent } from './pages/updates-calendar/updates-calendar.component';
import { ExtendedDayLearningComponent } from './pages/programs/extended-day-learning/extended-day-learning.component';
import { MeetOurCeoComponent } from './pages/about-us/meet-our-ceo/meet-our-ceo.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CollectionCrudComponent } from './pages/collection-crud/collection-crud.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DatatableComponent } from './components/datatable/datatable.component';
import { EnvTagComponent } from './components/env-tag/env-tag.component';
import { CollectionModalComponent } from './dialogs/collections/collection-modal/collection-modal.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { StartCasePipe } from './pipes/start-case.pipe';
import { AlertCrudComponent } from './pages/alert-crud/alert-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TopnavigationComponent,
    HomeComponent,
    AboutUsComponent,
    TeamComponent,
    BoardComponent,
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
    DatatableComponent,
    EnvTagComponent,
    CollectionModalComponent,
    StartCasePipe,
    AlertCrudComponent,
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
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    GraphQLModule,
    NgxDatatableModule,
    FormsModule,
  ],
  exports: [
    MatMenuModule,
    MatGridListModule,
    MatMenuModule,
    MatGridListModule,
    MatExpansionModule,
  ],
  providers: [HttpClient, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
