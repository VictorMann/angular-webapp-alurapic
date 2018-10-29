import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'data:image/jpeg;base64,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';
  description = 'Calopsita';
}
