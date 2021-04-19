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

  content = [
    {type: "title",content: "Interested in joining our team?"},
    {type:'info', content: "<b> Attend </b> our upcoming virtual job fair! Register below or email careers@monumentacademydc.org with any questions." },
    {type:"paragraph",content: "Tuesday, March 16th, 4 PM – 6 PM Our next open board meeting is Wednesday, March 17th at 6 PM. Register here." },
    {type:"closing",content: "Check out our recent feature on CBS This Morning HERE!" }
  ]

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
