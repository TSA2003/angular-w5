import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClientService } from '../services/api-client.service';

@Component({
  selector: 'app-football-page',
  standalone: true,
  imports: [],
  templateUrl: './football-page.component.html',
  styleUrl: './football-page.component.css'
})
export class FootballPageComponent {
  public matches: any = [];  

  private appService = inject(ApiClientService)

  constructor(private router: Router) {
    
  }

  public ngOnInit() {

    this.appService.getFootballMatches().subscribe((json: any) => {

      const response = json.data;

      for(const element of response) {

        this.matches.push({
          name: element.name,
          starting_at: element.starting_at,
          result_info: element.result_info
        });
      }
    });
  }

  public backButtonClick() {
    this.router.navigate(['/home']);
  }
}
