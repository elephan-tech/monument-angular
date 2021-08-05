import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input() background: string;
  @Input() height: string;
  @Input() shadow: boolean;
  @Input() color: string;

  @Input() src: string;
  @Input() alt: string;
  @Input() headerSections: object;

  public styleObject: object;

  constructor(private router: Router) {}

  currentRoute: string;

  ngOnInit(): void {
    this.styleObject = {
      'background-color': this.background,
      height: this.height,
      'box-shadow': this.shadow
        ? '-3px -2px 30px 14px rgba(0,0,0,0.425)'
        : 'none',
      color: this.color,
    };
  }
}
