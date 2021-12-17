import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import { Tournament } from '../../model/tournament.model';
import { TournamentRepo } from '../../model/tournament.repository';
@Component({
  selector: 'app-edit-tournament',
  templateUrl: './edit-tournament.component.html',
  styleUrls: ['./edit-tournament.component.css']
})
export class EditTournamentComponent implements OnInit {
  id!: number;
  form!: FormGroup;
  tournament: Tournament = new Tournament();

  tour!: Tournament;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private repository: TournamentRepo,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      _id: [],
      tour: ['', Validators.required],
      game: ['', Validators.required],
      date: ['', Validators.required],
      num: ['', Validators.required]
    });
    this.id = this.route.snapshot.params['id'];
    this.tour = this.repository.getTournament(this.id);
  }


  onSubmit(_id:any) {
    console.log(this.form.value)
    this.form.value['_id']= _id;
    // this.repository.updateTournament(this.form.value, this.id);
    // this.router.navigate(['tournament-list']);

    this.repository.modifyTournament(this.form.value,_id);
    this.router.navigate(['tournament-list']);


    // this.apiService.createUser(this.addForm.value)
    //   .subscribe( data => {
    //     this.router.navigate(['list-user']);
    //   });
  }
}
