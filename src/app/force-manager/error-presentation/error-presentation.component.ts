import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-error-presentation',
  templateUrl: './error-presentation.component.html',
  styleUrls: ['./error-presentation.component.css'],
})
export class ErrorPresentationComponent implements OnInit {
  @Input() error: Error | null;
  @Output() clearError = new EventEmitter();

  constructor() {}
  ngOnInit() {}
}
