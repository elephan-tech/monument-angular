import { Component, OnInit } from '@angular/core';
import { CdkDragStart } from '@angular/cdk/drag-drop';

interface Position {
	left: number;
	top: number;
}

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.scss']
})
export class EventCalendarComponent implements OnInit {

  public dragging: boolean;
  public clickedInside: boolean;

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
