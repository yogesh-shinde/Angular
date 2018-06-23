import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style="text-align:center">
  <h1>
      {{ title }}
  </h1>
  <h2>
      {{ title1 }}
  </h2>
</div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marvellous Infosystems';
  title1 = 'Educating for better tomorrow';
}
