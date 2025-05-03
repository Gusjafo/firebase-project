import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GeneticInsightsComponent } from "./insights/genetic-insights.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GeneticInsightsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'firebase-project';
}
