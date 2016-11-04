import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prop',
  template: `
    <p>
      {{result}}
    </p>
  `,
  styles: []
})
export class PropComponent {
  @Input() result: number = 0;
}
