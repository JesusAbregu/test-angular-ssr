import { Component } from '@angular/core';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
 constructor(public loadingService: LoadingService) {}
}


/* The following HTML and CSS were incorrectly placed within the TypeScript file.
   They should be in spinner.component.html and spinner.component.css respectively.

</div>
<style>
  .spinner-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .spinner {
    border: 16px solid #f3f3f3;
    border-top: 16px solid #3498db;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
*/
// The SpinnerComponent is a simple Angular component that uses the LoadingService to manage the loading state of the application.
// It provides a loading spinner UI element that can be displayed or hidden based on the loading state.
// The component is defined with a selector 'app-spinner', and it uses the template and styles defined in 'spinner.component.html' and 'spinner.component.css' respectively.
// The constructor injects the LoadingService, allowing the component to access its methods and properties.
// The LoadingService is responsible for managing the loading state of the application.
// The component is designed to be reusable and can be included in any part of the application where a loading spinner is needed.
// The component is defined with a selector 'app-spinner', and it uses the template and styles defined in 'spinner.component.html' and 'spinner.component.css' respectively.
// The constructor injects the LoadingService, allowing the component to access its methods and properties.
// The LoadingService is responsible for managing the loading state of the application.
// The component is designed to be reusable and can be included in any part of the application where a loading spinner is needed.
// The component is defined with a selector 'app-spinner', and it uses the template and styles defined in 'spinner.component.html' and 'spinner.component.css' respectively.
// The constructor injects the LoadingService, allowing the component to access its methods and properties.
// The LoadingService is responsible for managing the loading state of the application.
// The component is designed to be reusable and can be included in any part of the application where a loading spinner is needed.
// The component is defined with a selector 'app-spinner', and it uses the template and styles defined in 'spinner.component.html' and 'spinner.component.css' respectively.