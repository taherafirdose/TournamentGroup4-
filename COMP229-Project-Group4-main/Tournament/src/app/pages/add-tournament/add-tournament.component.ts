import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { Tournament } from '../../model/tournament.model';
import { TournamentRepo } from '../../model/tournament.repository';

// import {ApiService} from "../../service/api.service";

@Component({
  selector: 'app-add-tournament',
  templateUrl: './add-tournament.component.html',
  styleUrls: ['./add-tournament.component.css']
})
export class AddTournamentComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private repository: TournamentRepo
    // private apiService: ApiService
    ) { }

  tourForm!: FormGroup;

  ngOnInit() {
    this.tourForm = this.formBuilder.group({
      _id: [],
      tour: ['', Validators.required],
      game: ['', Validators.required],
      date: ['', Validators.required],
      num: ['', Validators.required]
    });

  }

  onSubmit() {
    console.log(this.tourForm.value)
   // this.repository.createTournament(this.tourForm.value);
   this.repository.saveTournament(this.tourForm.value);
    this.router.navigate(['tournament-list']);
    // this.apiService.createUser(this.addForm.value)
    //   .subscribe( data => {
    //     this.router.navigate(['list-user']);
    //   });
  }
}
