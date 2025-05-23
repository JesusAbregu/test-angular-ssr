'@'
import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: '<div>Loading...</div>',
  standalone: false
})
export class LoadingComponent {}
"@ | Set-Content src\app\loading\loading.component.ts
