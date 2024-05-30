import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClientService } from '../services/api-client.service';

@Component({
  selector: 'app-cricket-page',
  standalone: true,
  imports: [],
  templateUrl: './cricket-page.component.html',
  styleUrl: './cricket-page.component.css'
})
export class CricketPageComponent {
  public matches: any = [];  

  private appService = inject(ApiClientService)

  constructor(private router: Router) {
    
  }

  public ngOnInit() {

    this.appService.getCricketMatches().subscribe((json: any) => {

      const response = json.data;

      for(const element of response) {

        this.matches.push({
          note: element.note,
          starting_at: element.starting_at
        });
      }
    });
  }

  public backButtonClick() {
    this.router.navigate(['/home']);
  }
}
