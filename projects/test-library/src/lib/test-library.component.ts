import { Component, OnInit } from '@angular/core';
import { TestLibraryService } from './test-library.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'tl-test-library',
  templateUrl: './test-library.component.html',
  styleUrls: ['./test-library.component.css']
})
export class TestLibraryComponent implements OnInit {
  public teams: Observable<{ country: string; trophies: number }[]>;
  public title$: Observable<string>;

  constructor(private testLibService: TestLibraryService) {}

  ngOnInit() {
    this.teams = this.testLibService.getTeams();
    this.title$ = this.testLibService.getTitle();
  }
}
