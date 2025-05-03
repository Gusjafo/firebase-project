import { inject, Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { Insight } from './models/insight.model';

@Injectable({ providedIn: 'root' })
export class GeneticInsightsService {
    private firestore = inject(Firestore);
    private insightsRef = collection(this.firestore, 'insights');

    getInsights(): Observable<Insight[]> {
        return collectionData(this.insightsRef, { idField: 'id' }) as Observable<Insight[]>;
    }

    addInsight(insight: Insight): Observable<void> {
        const newInsight = { ...insight };
        delete newInsight.id;
        return from(addDoc(this.insightsRef, newInsight).then(() => { }));
    }

    updateInsight(insight: Insight): Observable<void> {
        const insightDoc = doc(this.firestore, `insights/${insight.id}`);
        return from(updateDoc(insightDoc, insight as any));
    }

    deleteInsight(id: string): Observable<void> {
        const insightDoc = doc(this.firestore, `insights/${id}`);
        return from(deleteDoc(insightDoc));
    }
}
