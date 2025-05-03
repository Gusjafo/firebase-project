import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneticInsightsService } from './genetic-insights.service';
import { Insight } from './models/insight.model';
import { InsightCardComponent } from '../components/insight-card/insight-card.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-genetic-insights',
    imports: [CommonModule, InsightCardComponent],
    templateUrl: './genetic-insights.component.html',
    styleUrl: './genetic-insights.component.scss'
})
export class GeneticInsightsComponent implements OnInit {
    insights$!: Observable<Insight[]>;

    constructor(private insightsService: GeneticInsightsService) { }

    ngOnInit() {
        this.insights$ = this.insightsService.getInsights();
    }
}
