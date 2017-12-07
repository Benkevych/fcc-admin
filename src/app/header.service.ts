import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class HeaderService {
  private title = new Subject<any>();
  private page = new Subject<any>();
  constructor() {
  }
  changeTitle(title, subtitle) {
    if (subtitle != '')
      subtitle = '- ' + subtitle;
    this.title.next({ title: title, subtitle: subtitle });
  }
  getMessage(): Observable<any> {
    return this.title.asObservable();
  }
  setPage(page) {
    this.page.next({ page: page });
  }
  getPage(): Observable<any> {
    return this.page.asObservable();
  }
}
