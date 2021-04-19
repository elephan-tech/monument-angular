import { Component, OnInit } from '@angular/core';
import { CdkDragStart } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.scss']
})
export class EventCalendarComponent implements OnInit {

  public dragging: boolean;
  public clickedInside: boolean;

  content = {
    title: 'Interested in joining our team?',
    info: '<b> Attend </b> our upcoming virtual job fair! Register below or email careers@monumentacademydc.org with any questions.',
    paragraph: 'Tuesday, March 16th, 4 PM – 6 PM Our next open board meeting is Wednesday, March 17th at 6 PM. Register here.',
    closing: 'Check out our recent feature on CBS This Morning HERE!'
  }


dragPosition = {x: 0, y: -100};

  constructor() {
  }

  ngOnInit(): void {

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


  console(word) {
    this.clickedInside = true;
    console.log(word);
  }
}
