import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AwardsComponent } from './pages/about-us/awards/awards.component';
import { BoardComponent } from './pages/about-us/board/board.component';
import { ContactUsComponent } from './pages/about-us/contact-us/contact-us.component';
import { PartnershipsComponent } from './pages/about-us/partnerships/partnerships.component';
import { TeamComponent } from './pages/about-us/team/team.component';
import { DonateComponent } from './pages/donate/donate.component';
import { HomeComponent } from './pages/home/home.component';
import { ProgramsComponent } from './pages/programs/programs.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, //this makes the landing page
  { path: 'about-us', component: AboutUsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'board', component: BoardComponent },

  {
    path: 'partnerships',
    component: PartnershipsComponent,
  },
  {
    path: 'awards',
    component: AwardsComponent,
  },
  {
    path: 'a-day-at-monument',
    component: ContactUsComponent,
  },
  { path: 'programs', component: ProgramsComponent },
  { path: 'donate', component: DonateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
