import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Inline Template</h1>
    <app-first-component>
        <h1>Hello to First Component</h1>
    </app-first-component>
    `
  ,
  styles: [`
    h1 { color: red }
  `]
})
export class AppComponent {
  title = 'app works!';
}
