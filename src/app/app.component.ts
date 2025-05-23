import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
onDeactivate($event: any) {
throw new Error('Method not implemented.');
}
onAttach($event: unknown) {
throw new Error('Method not implemented.');
}
onDetach($event: unknown) {
throw new Error('Method not implemented.');
}
  title = 'usuarios-app';
}
