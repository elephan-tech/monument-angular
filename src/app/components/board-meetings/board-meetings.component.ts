import { Component, ViewChild, Input } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-board-meetings',
  templateUrl: './board-meetings.component.html',
  styleUrls: ['./board-meetings.component.scss'],
})

export class BoardMeetingsComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  @Input() boardMeetings: any;
  @Input() meetingName: string;

  // ponytail: old S3 bucket monument-academy is 403; map the copies we still host
  private localFiles: Record<string, string> = {
    'https://monument-academy.s3.amazonaws.com/Board_Retreat_Agenda_1_19def09680.pdf':
      'assets/documents/public-information/5di.%20Board%20Retreat%20Agenda%20%282%29.pdf',
    'https://monument-academy.s3.amazonaws.com/9_06_25_Board_Meeting_Minutes_1_6b321329ad.pdf':
      'assets/documents/public-information/5ei.%209.06.25%20Board%20Retreat%20Minutes.pdf',
    'https://monument-academy.s3.amazonaws.com/AGENDA_9_10_25_Board_Meeting_1_bb4233f7a4.pdf':
      'assets/documents/public-information/5dii.%20AGENDA%209.10.25%20Board%20Meeting.pdf',
    'https://monument-academy.s3.amazonaws.com/9_10_25_Board_Meeting_Minutes_1_79b977e0d4.pdf':
      'assets/documents/public-information/5eii.%209.10.25%20Board%20Meeting%20Minutes.pdf',
    'https://monument-academy.s3.amazonaws.com/December_Board_Meeting_Agenda_12_10_25_1_0547b5d686.pdf':
      'assets/documents/public-information/5diii.%20December%20Board%20Meeting%20Agenda%2012.10.25.pdf',
    'https://monument-academy.s3.amazonaws.com/September_10th_Board_Meeting_Agenda_b1a81993fe.pdf':
      'assets/documents/public-information/5dii.%20AGENDA%209.10.25%20Board%20Meeting.pdf',
  };

  fileHref(url: string): string {
    return this.localFiles[url] || url;
  }
}
