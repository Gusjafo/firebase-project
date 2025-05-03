import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Insight } from '../../insights/models/insight.model';

@Component({
    selector: 'app-insight-card',
    imports: [],
    templateUrl: './insight-card.component.html',
    styleUrl: './insight-card.component.scss'
})
export class InsightCardComponent {
    @Input() insight!: Insight;

}
