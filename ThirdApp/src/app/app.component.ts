import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title ='Marvellous Infosystems'
  
  name = 'Yogesh'
  public fun()
  {
      return "Good evening";
  }

  public gun()
  {
      this.name="Button Clicked";
  }

}
