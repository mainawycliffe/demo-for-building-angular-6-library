import { Injectable, Inject } from '@angular/core';
import { TestLibConfigService, TestLibConfig } from './test-library.module';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestLibraryService {
  // inject our configuration into our service
  constructor(@Inject(TestLibConfigService) private config: TestLibConfig) {
    console.log(config);
  }

  // You can now use your configuration as you normally would
  // if it was a http request, then you could return observables which you can subscribe to
  getConfig(): Observable<TestLibConfig> {
    return of(this.config);
  }

  getTitle(): Observable<string> {
    return of(this.config.title);
  }

  getTeams(): Observable<{ country: string; trophies: number }[]> {
    // just for fun, lets sort this by descending order
    // we shall use, buble sort

    const sorted = this.config.teams.slice();

    for (let i = 0; i < sorted.length; i++) {
      for (let j = 0; j < sorted.length - 1; j++) {
        if (sorted[j].trophies < sorted[j + 1].trophies) {
          const swap = sorted[j];
          sorted[j] = sorted[j + 1];
          sorted[j + 1] = swap;
        }
      }
    }

    return of(sorted);
  }

  getSport(): Observable<string> {
    return of(this.config.sport);
  }
}
