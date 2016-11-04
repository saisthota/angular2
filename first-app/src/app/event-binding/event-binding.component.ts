import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <h1>Event Binding Example</h1>
    <button (click)="clickedMethod()">Click me</button>
    <button (clicked)="clickedEvent()">Click me event</button>
  `,
  styles: []
})
export class EventBindingComponent {

  //Normal Event
  clickedMethod() {
    alert("Button Clicked");
  }

  //using EventEmitter
  //Event emitter is an object which can wrap itself with several types. (Generic)
  //We have created a native event which can be used like: <button (clicked)>Button text</button>
  //Data can be extracted using $event
  @Output() clicked = new EventEmitter<string>();

  clickedEvent() {
    this.clicked.emit("Event Emitter Example")
  }
}
