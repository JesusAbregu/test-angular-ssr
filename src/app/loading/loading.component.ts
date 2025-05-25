'@'
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';


import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [CommonModule],
  exports: [SpinnerComponent]
})
export class LoadingModule {}

@Component({
  selector: 'app-loading',
  template: '<div>Loading...</div>',
  standalone: false
})
export class LoadingComponent {}
