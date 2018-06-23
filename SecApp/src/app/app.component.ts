import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style="text-align:center">
  <br>
  Text Field : <input type="text">
  <h2>
      Marvellous Infosystems
  </h2>
  <app-marvellous-comp></app-marvellous-comp>
</div>`,
  styles: [`input
    {
      background: blue;
    }

    `]
})
export class AppComponent {
  title = 'Marvellous Infosystems';
}
