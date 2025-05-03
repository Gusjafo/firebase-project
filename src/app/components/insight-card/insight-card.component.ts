import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Insight } from '../../insights/models/insight.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
    selector: 'app-insight-card',
    imports: [
        CommonModule,
        MatCardModule,
        MatIconModule,
        MatTooltipModule
    ],
    templateUrl: './insight-card.component.html',
    styleUrl: './insight-card.component.scss'
})
export class InsightCardComponent {
    @Input() insight!: Insight;

    get icon(): string {
        switch (this.insight.category) {
            case 'ancestry': return 'public';
            case 'health': return 'health_and_safety';
            case 'nutrition': return 'restaurant';
            case 'traits': return 'person';
            default: return 'info';
        }
    }

    get color(): string {
        switch (this.insight.category) {
            case 'health': return '#e57373';
            case 'ancestry': return '#64b5f6';
            case 'nutrition': return '#81c784';
            case 'traits': return '#ba68c8';
            default: return '#90a4ae';
        }
    }

}
