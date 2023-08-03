import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'day33lesson';

  btnClicked(event: any) {
    console.log(event);
  }

  cards: any[] = [
    {
      title: "title 1",
      content: "content 1"
    },
    {
      title: "title 2",
      content: "content 2"
    },
    {
      title: "title 3",
      content: "content 3"
    }
  ]
}
