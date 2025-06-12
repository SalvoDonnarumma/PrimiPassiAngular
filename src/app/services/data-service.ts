import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  private initialData = [
    { id: 1, name: 'Alice', score: 42, email: 'alice@example.com' },
    { id: 2, name: 'Bob', score: 41, email: 'bob@example.com' },
    { id: 3, name: 'Carol', score: 55, email: 'carol@example.com' },
    { id: 4, name: 'David', score: 48, email: 'david@example.com' },
    { id: 5, name: 'Eva', score: 33, email: 'eva@example.com' },
    { id: 6, name: 'Frank', score: 29, email: 'frank@example.com' },
    { id: 7, name: 'Grace', score: 61, email: 'grace@example.com' },
    { id: 8, name: 'Hannah', score: 44, email: 'hannah@example.com' },
    { id: 9, name: 'Ian', score: 41, email: 'ian@example.com' },
    { id: 10, name: 'Jane', score: 50, email: 'jane@example.com' },
    { id: 11, name: 'Kevin', score: 27, email: 'kevin@example.com' },
    { id: 12, name: 'Laura', score: 53, email: 'laura@example.com' },
    { id: 13, name: 'Mike', score: 45, email: 'mike@example.com' },
    { id: 14, name: 'Nina', score: 36, email: 'nina@example.com' },
    { id: 15, name: 'Oscar', score: 40, email: 'oscar@example.com' },
    { id: 16, name: 'Paula', score: 47, email: 'paula@example.com' },
    { id: 17, name: 'Quinn', score: 35, email: 'quinn@example.com' },
    { id: 18, name: 'Rachel', score: 49, email: 'rachel@example.com' },
    { id: 19, name: 'Steve', score: 31, email: 'steve@example.com' },
    { id: 20, name: 'Tina', score: 41, email: 'tina@example.com' },
  ];

  private dataSubject = new BehaviorSubject<any[]>(this.initialData);
  data$ = this.dataSubject.asObservable();

  constructor() {}

  getData(): any[] {
    return [...this.dataSubject.value];
  }

  addItem(item: any): void {
    const currentData = this.dataSubject.value;
    const newId = Math.max(...currentData.map(i => i.id)) + 1;
    const newItem = { ...item, id: newId };
    this.dataSubject.next([...currentData, newItem]);
  }

  updateItem(updatedItem: any): void {
    const currentData = this.dataSubject.value;
    const index = currentData.findIndex(i => i.id === updatedItem.id);
    
    if (index !== -1) {
      const newData = [...currentData];
      newData[index] = { ...updatedItem };
      this.dataSubject.next(newData);
    }
  }

  deleteItem(id: number): void {
    const currentData = this.dataSubject.value;
    const index = currentData.findIndex(i => i.id === id);
    
    if (index !== -1) {
      const newData = [...currentData];
      newData.splice(index, 1);
      this.dataSubject.next(newData);
    }
  }

  resetData(): void {
    this.dataSubject.next([...this.initialData]);
  }

  getFilteredData(searchTerm: string, columns: string[]): Observable<any[]> {
    return this.data$.pipe(
      map(data => {
        if (!searchTerm) return data;
        
        return data.filter(item => {
          return columns.some(column => {
            const value = item[column];
            if (value === undefined || value === null) return false;
            return value.toString().toLowerCase().includes(searchTerm.toLowerCase());
          });
        });
      })
    );
  }
}