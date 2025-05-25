import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  paginate(items: any[], page: number, pageSize: number) {
    const start = (page - 1) * pageSize;
    return items.slice(start, start + pageSize);
  }

  filter(items: any[], searchTerm: string) {
    return items.filter(
      (item) =>
        item.name.includes(searchTerm) ||
        item.surname.includes(searchTerm) ||
        item.role.includes(searchTerm),
    );
  }
}
