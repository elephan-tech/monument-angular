import { Component, OnInit } from '@angular/core';
import { CdkDragStart } from '@angular/cdk/drag-drop';
import { EventsCalendarService } from '../../services/events/events-calendar.service';



@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.scss']
})
export class EventCalendarComponent implements OnInit {

  public dragging: boolean;
  public clickedInside: boolean;
  // content = [
  //   {type: 'title', content: 'NO EVENTS'},
  //   {type: 'info', content: 'No calendar'}
  // ]

  // content = [
  //   {type: "title",content: "Interested in joining our team?"},
  //   {type:'info', content: "<b> Attend </b> our upcoming virtual job fair! Register below or email careers@monumentacademydc.org with any questions." },
  //   {type:"paragraph",content: "Tuesday, March 16th, 4 PM – 6 PM Our next open board meeting is Wednesday, March 17th at 6 PM. <a href='/' >Register here. </a>" },
  //   {type:"closing",content: "Check out our recent feature on CBS This Morning HERE!" }
  // ]

  content: any = `
  <div> <b>April Board Meeting:</b> Wednesday, April, 21st at 6 PM </div>
  <div> <b>May Board Meeting:</b> Wednesday, May 19th at 6 PM </div>
  </br>
  <div> <b>More Information</b> and <b>Detailed Calendar</b> <a href="/updates-calendar"> HERE </a> </div>
  </br>
  <div> Check out our recent feature on CBS This Morning <a href="https://www.cbs.com/shows/cbs_this_morning/video/0BkYuV4u6P3B_DE4bL0xwnaS8CGFHdwB/monument-academy-in-washington-d-c-is-providing-a-safe-space-for-its-students-amid-pandemic/" target="_blank"> HERE!</a>  </div>
  `;

dragPosition = {x: 0, y: -100};

  constructor(private eventService: EventsCalendarService) {
  }

  ngOnInit(): void {
    this.eventService.getAll().subscribe(
        res => this.content = res,
        err => console.log('not running mock api. run npm run server'),
        () => console.log('HTTP request completed.')
);
  }

  public handleDragStart(event: CdkDragStart): void {
    this.dragging = true;
  }

  public handleClick(event: MouseEvent): void {
    if (this.dragging || this.clickedInside) {
      this.dragging = false;
      return
    }
    this.dragPosition = {x: this.dragPosition.x, y: this.dragPosition.y};
  }
}
