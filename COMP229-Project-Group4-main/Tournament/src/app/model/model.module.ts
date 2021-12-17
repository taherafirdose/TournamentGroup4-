import { NgModule } from "@angular/core";
import { TournamentRepo } from "./tournament.repository";
import { StaticDataSource } from "./static.datasource";
import { AuthService } from './auth.service';
import { RestDataSource } from "./rest.datasource";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AuthGuard } from "../admin/auth/auth.guard";

@NgModule({
    imports: [HttpClientModule,FormsModule],
    providers: [TournamentRepo, StaticDataSource,
        RestDataSource, AuthService,AuthGuard]
})
export class ModelModule{

} 