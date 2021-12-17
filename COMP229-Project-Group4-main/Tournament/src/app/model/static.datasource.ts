import { Injectable } from "@angular/core";
import { Tournament } from "./tournament.model";
import { from, Observable } from "rxjs";

@Injectable()
export class StaticDataSource{
    private tournaments: Tournament[] = [
        new Tournament(1, 'Need for Speed', '18th Nov 2021 2PM', '5'),
        new Tournament(2, 'Call Of Duty', '18th Nov 2021 2PM', '2'),
        new Tournament(3, 'PUBG', '18th Nov 2021 2PM', '2'),
    ];
    
    getTournaments(): Observable<Tournament[]>{
        return from([this.tournaments])
    }

    
}