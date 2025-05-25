import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // Asegúrate de que esté importado correctamente
import { SpinnerComponent } from './spinner.component';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [CommonModule],   // Esto es necesario para que Angular resuelva los componentes básicos (ngIf, ngFor, etc)
  exports: [SpinnerComponent], // Haces que el componente Spinner sea accesible fuera del módulo
})
export class SpinnerModule {}

// This module imports CommonModule and declares a SpinnerComponent.
// It also exports the SpinnerComponent so that it can be used in other modules.
// The SpinnerModule is a good place to put components, directives, and pipes that are used across multiple modules in your application.
// It helps to keep your code organized and makes it easier to manage dependencies.
// The SpinnerModule can be imported into other modules to make the SpinnerComponent available for use.
// This is a common pattern in Angular applications to create a shared module for reusable components.
// The SpinnerModule can also include other shared components, directives, and pipes as needed.
// This allows for better organization and reusability of code across the application.
// The SpinnerModule can be imported into other feature modules to provide access to the shared components.
// This helps to keep the code DRY (Don't Repeat Yourself) and makes it easier to maintain.
// The SpinnerModule can also include services that are used across multiple modules.
// This allows for better organization and reusability of services across the application.
// The SpinnerModule can be imported into other feature modules to provide access to the shared services.
// This helps to keep the code DRY (Don't Repeat Yourself) and makes it easier to maintain.
// The SpinnerModule can also include pipes that are used across multiple modules.
// This allows for better organization and reusability of pipes across the application.
// The SpinnerModule can be imported into other feature modules to provide access to the shared pipes.
// This helps to keep the code DRY (Don't Repeat Yourself) and makes it easier to maintain.
// The SpinnerModule can also include directives that are used across multiple modules.
// This allows for better organization and reusability of directives across the application.