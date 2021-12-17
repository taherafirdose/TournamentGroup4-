import { Component } from '@angular/core';
import { Tournament } from '../model/tournament.model';
import { TournamentRepo } from '../model/tournament.repository';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-tournament-list',
  templateUrl: './tournament-list.component.html',
  styleUrls: ['./tournament-list.component.css']
})
export class TournamentListComponent {

  constructor(
    private repository: TournamentRepo,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  get tournaments(): Tournament[]{
    return this.repository.getTournaments(null);
  }

  tournament(_id: number): Tournament{
    return this.repository.getTournament(_id);
  }

  get players(): String[]{
    return this.repository.getPlayers();
  }

  deleteTour(_id:any){
    this.repository.deleteTournament(_id);
    this.router.navigate(['tournament-list']);
  }
}
