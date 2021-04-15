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
import { BoardingStudentLifeProgramComponent } from './pages/programs/boarding-student-life-program/boarding-student-life-program.component';
import { LifeSkillsComponent } from './pages/programs/life-skills/life-skills.component';
import { WellBeingComponent } from './pages/programs/well-being/well-being.component';
import { NationalSchoolLunchProgramComponent } from './pages/programs/national-school-lunch-program/national-school-lunch-program.component';
import { CareersComponent } from './pages/careers/careers.component';
import { EnrollmentComponent } from './pages/enrollment/enrollment.component';
import { FamilyResourcesComponent } from './pages/family-resources/family-resources.component';
import { KnowledgeCenterComponent } from './pages/knowledge-center/knowledge-center.component';
import { DonateComponent } from './pages/donate/donate.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { IonicModule } from '@ionic/angular';
import { HeroComponent } from './components/hero/hero.component';
import { SliderComponent } from './components/slider/slider.component';

import { ReactiveFormsModule } from '@angular/forms';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatGridListModule,
    IonicModule.forRoot(),
    ReactiveFormsModule
  ],
  exports: [MatMenuModule, MatGridListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
