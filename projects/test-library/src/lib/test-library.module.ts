import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { TestLibraryService } from './test-library.service';
import { TestLibraryComponent } from './test-library.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule, MatToolbarModule, MatCardModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

// first define an interface for our configuration
export interface TestLibConfig {
  title: string;
  teams: {
    country: string;
    trophies: number;
  }[];
  sport: string;
}

// then define injectionToken
export const TestLibConfigService = new InjectionToken<TestLibConfig>(
  'TestLibConfig'
);

@NgModule({
  imports: [BrowserModule, FlexLayoutModule, MatListModule, MatToolbarModule, MatCardModule],
  declarations: [TestLibraryComponent],
  exports: [TestLibraryComponent]
})
export class TestLibraryModule {
  static forRoot(config: TestLibConfig): ModuleWithProviders {
    return {
      ngModule: TestLibraryModule,
      providers: [
        TestLibraryService,
        {
          provide: TestLibConfigService,
          useValue: config
        }
      ]
    };
  }
}
