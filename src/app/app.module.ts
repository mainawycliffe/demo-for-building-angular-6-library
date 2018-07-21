import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestLibraryModule, TestLibConfig } from 'test-library';

const testLibConfigs: TestLibConfig = {
  title: 'World Cup Teams',
  teams: [
    {
      country: 'France',
      trophies: 2
    },
    {
      country: 'Brazil',
      trophies: 5
    },
    {
      country: 'Germany',
      trophies: 4
    },
    {
      country: 'Argentina',
      trophies: 2
    },

    {
      country: 'Spain',
      trophies: 1
    },
    {
      country: 'England',
      trophies: 1
    },
    {
      country: 'Uruguay',
      trophies: 2
    },
    {
      country: 'Italy',
      trophies: 4
    }
  ],
  sport: 'Football/Soccer'
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TestLibraryModule,
    TestLibraryModule.forRoot(testLibConfigs)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
