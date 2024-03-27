import { environment } from 'src/environments/environment';
import { isEmpty } from 'lodash';
import { ApiService } from 'src/app/services/api/api.service';
import { BehaviorSubject } from 'rxjs';
import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ToastController} from "@ionic/angular";
import {MailService} from "../../../services/mail.service";

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `<div [innerHTML]="data | safeHtml"></div>`,
})
export class MeetingComponent implements OnInit, AfterViewInit {
  contactForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  constructor(
      private route: ActivatedRoute,
      private api: ApiService,
      private mailService: MailService,
      private toast: ToastController
  ) {}
  pageTitle: string;
  heroImg: string;
  fragment: string;
  fileUrl = environment.apiUrl;
  mainLogo = 'assets/monument-main-logo.png';
  boardMeetings: any;
  archivedMeetings: any;
  boardMeetingsSub = new BehaviorSubject([]);
  fromDate: Date = new Date(Date.now());

  ngOnInit(): void {
    this.pageTitle = 'Board Meetings';
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

  onSubmit(): void {
    const data = this.contactForm.value;
    this.mailService
        .sendMeetingContactMail(data)
        .then(async () => {
          const toast = await this.toast.create({
            header: 'Message Sent!',
            message: 'We will reach out shortly',
            position: 'bottom',
            color: 'success',
          });
          await toast.present();
        })
        .catch(async (err) => {
          const toast = await this.toast.create({
            header: err,
            message: 'Close',
            position: 'bottom',
            color: 'danger',
          });
          await toast.present();
        })
        .finally(() => this.resetForm());
  }

  resetForm(): void {
    this.contactForm.reset();
  }
}
