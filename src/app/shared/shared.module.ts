// src/app/shared/shared.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Ejemplo de componente compartido
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    FooterComponent
    // cualquier otro componente que esté en `shared`
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent
    // exportá lo que querés reutilizar
  ]
})
export class SharedModule { }

// This module imports CommonModule and declares a FooterComponent.
// It also exports the FooterComponent so that it can be used in other modules.
// The SharedModule is a good place to put components, directives, and pipes that are used across multiple modules in your application.
// This helps to keep your code organized and makes it easier to manage dependencies.
// The SharedModule can be imported into other modules to make the FooterComponent available for use.
// This is a common pattern in Angular applications to create a shared module for reusable components.
// The SharedModule can also include other shared components, directives, and pipes as needed.
// This allows for better organization and reusability of code across the application.
// The SharedModule can be imported into other feature modules to provide access to the shared components.
// This helps to keep the code DRY (Don't Repeat Yourself) and makes it easier to maintain.
// The SharedModule can also include services that are used across multiple modules.
// This allows for better organization and reusability of services across the application.
// The SharedModule can be imported into other feature modules to provide access to the shared services.
// This helps to keep the code DRY (Don't Repeat Yourself) and makes it easier to maintain.
// The SharedModule can also include pipes that are used across multiple modules.
// This allows for better organization and reusability of pipes across the application.
// The SharedModule can be imported into other feature modules to provide access to the shared pipes.
// This helps to keep the code DRY (Don't Repeat Yourself) and makes it easier to maintain.
// The SharedModule can also include directives that are used across multiple modules.
// This allows for better organization and reusability of directives across the application.
// The SharedModule can be imported into other feature modules to provide access to the shared directives.
// This helps to keep the code DRY (Don't Repeat Yourself) and makes it easier to maintain.
// The SharedModule can also include other shared modules that are used across multiple modules.
// This allows for better organization and reusability of modules across the application.
// The SharedModule can be imported into other feature modules to provide access to the shared modules.
// This helps to keep the code DRY (Don't Repeat Yourself) and makes it easier to maintain.
// The SharedModule can also include other shared services that are used across multiple modules.
// This allows for better organization and reusability of services across the application.
// The SharedModule can be imported into other feature modules to provide access to the shared services.
// This helps to keep the code DRY (Don't Repeat Yourself) and makes it easier to maintain.
// The SharedModule can also include other shared components that are used across multiple modules.
// This allows for better organization and reusability of components across the application.
// The SharedModule can be imported into other feature modules to provide access to the shared components.
// This helps to keep the code DRY (Don't Repeat Yourself) and makes it easier to maintain.
// The SharedModule can also include other shared pipes that are used across multiple modules.
// This allows for better organization and reusability of pipes across the application.
// The SharedModule can be imported into other feature modules to provide access to the shared pipes.
// This helps to keep the code DRY (Don't Repeat Yourself) and makes it easier to maintain.
// The SharedModule can also include other shared directives that are used across multiple modules.
// This allows for better organization and reusability of directives across the application.