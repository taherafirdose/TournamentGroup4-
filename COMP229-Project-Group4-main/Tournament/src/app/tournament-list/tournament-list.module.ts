import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { TournamentListComponent } from "./tournament-list.component";
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [ModelModule,BrowserModule,FormsModule,RouterModule,],
    declarations: [TournamentListComponent],
    exports: [TournamentListComponent]
})

export class TournamentModule{

}