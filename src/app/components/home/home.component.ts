import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { ApIResponse, Game } from 'src/app/services/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public sort!: string;
  public games!: Array<Game>;
  private routeSub!: Subscription;
  private gameSub!: Subscription;


  fakeUrl!: SafeUrl;

  constructor( private httpService: HttpService, private activatedRoute: ActivatedRoute, public sanitizer: DomSanitizer, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['game-search']){
        this.searchGames('metacrit', params['game-search']);
      }else {
        this.searchGames('metacrit')
      }
    })

    this.fakeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/imgs/ie/fb.png')
  }

  searchGames(elOrder: string, search?: string): void{
    this.httpService.getGameList(elOrder, search).subscribe((gameList: ApIResponse<Game>) =>{
      this.games = gameList.results;

    })

    }

    openClickDetails(id: String | number): void{
      this.router.navigate(['details',id])


    
  }

  
    ngOnDestroy(): void {
      if (this.gameSub){
        this.gameSub.unsubscribe();
      }

      if (this.routeSub){

      }
    }
  
}
