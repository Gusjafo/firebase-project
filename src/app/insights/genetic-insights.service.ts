import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { collection, collectionData, Firestore, query, where } from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class GeneticInsightsService {
  private firestore = inject(Firestore);

  getInsights(): Observable<any[]> {
    const insightsRef = collection(this.firestore, 'insights');
    return collectionData(insightsRef, { idField: 'id' });
  }
}
