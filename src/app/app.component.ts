import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//criando a tag que serve pra inserir esse componente em outro no html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-manager';

  name: string = 'john'
}
