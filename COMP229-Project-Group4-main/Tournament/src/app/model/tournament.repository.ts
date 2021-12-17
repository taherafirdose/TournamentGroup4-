import { Injectable } from '@angular/core';
import { Tournament } from './tournament.model';
import { StaticDataSource } from './static.datasource';
import { User } from './user.model';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class TournamentRepo {
    private tournaments: Tournament[] = [];
    private users: User[] = [];
    private player: String[] = [];

    constructor(private dataSource: RestDataSource) {
        dataSource.getTournaments().subscribe(data => {
            this.tournaments = data;
            this.player = this.getData(data);
        });
    }

    getData(data: any[]) {
        data.map(b => b.players)
            .filter((a, index, array) => array.indexOf(a) === index).sort()
        return data;
    }



    saveTournament(savedTournament: Tournament): void {
        if (savedTournament._id === null || savedTournament._id === 0 || savedTournament._id === undefined) {
            this.dataSource.addTournaments(savedTournament).subscribe(b => {
                this.tournaments.push(savedTournament);
            });
        }
        else {
            this.dataSource.updateTournament(savedTournament).subscribe(tournament => {
                this.tournaments.splice(this.tournaments.findIndex(b => b._id === savedTournament._id), 1, savedTournament);
            });
        }
    }

    getTournaments(player: String | null): Tournament[] {
        return this.tournaments
            .filter(b => player == null || player === b.num);
    }

    getTournament(id: any): Tournament {
        return this.tournaments.find(b => b._id == id)!;
    }

    getPlayers(): String[] {
        return this.player;
    }

    modifyTournament(savedTournament: Tournament,id: any): void {
        if (savedTournament._id === null || savedTournament._id === 0 ) {
            this.dataSource.addTournaments(savedTournament).subscribe(b => {
                this.tournaments.push(savedTournament);
            });
        }
        else {
            this.dataSource.modifyTour(savedTournament,id).subscribe(tournament => {
                this.tournaments.splice(this.tournaments.findIndex(b => b._id === savedTournament._id), 1, savedTournament);
            });
        }
    }

    createTournament(data: any) {
        this.tournaments.push(data);
    }

    updateTournament(data: any, id: number) {
        this.tournaments.find(b => b._id === id)!.tour = data.name;
        this.tournaments.find(b => b._id === id)!.num = data.players;
        this.tournaments.find(b => b._id === id)!.date = data.schedule;

    }
    // updateOrder(updatedOrder: Order): void
    // {
    //   this.dataSource.updateOrder(updatedOrder).subscribe(order => {
    //     this.orders.splice(this.orders.findIndex(o => o._id === order._id), 1, order);
    //   });
    // }

    deleteTournament(deletedTourID: number): void {

        this.dataSource.deleteTournament(deletedTourID).subscribe(tournament => {
            this.tournaments.splice(this.tournaments.findIndex(b => b._id === deletedTourID), 1);
        });
    }

    createUser(data: any) {
        this.users.push(data);
    }

    saveUser(saveUser: User): void {
      if (saveUser._id === null || saveUser._id === 0 || saveUser._id === undefined) {
          this.dataSource.addUser(saveUser).subscribe(b => {
              this.users.push(saveUser);
          });
      }
      else {
          this.dataSource.updateTournament(saveUser).subscribe(tournament => {
              this.users.splice(this.tournaments.findIndex(b => b._id === saveUser._id), 1, saveUser);
          });
      }
  }
}
