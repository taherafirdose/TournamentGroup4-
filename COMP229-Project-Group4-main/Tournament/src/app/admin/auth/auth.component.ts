import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../model/auth.service';

import { User } from '../../model/user.model';

@Component({
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit
{
  public user!: User;
  public errorMessage: string | undefined;

  constructor(private router: Router,
              private auth: AuthService) { }

  ngOnInit(): void
  {
    this.user = new User();
  }

  authenticate(form: NgForm): void
  {
    if (form.valid)
    {
      // perform authentication
      try{
        this.auth.getUsers().subscribe(data => {
          let userlist = data;
          this.auth.authenticate(this.user,userlist).subscribe(data => {
            if (data.success)
            {
              this.auth.storeUserData(data.token, data.user);
              this.router.navigateByUrl('/tournament-list');
            }
          });
        });
      }catch(e){
        this.errorMessage = 'Form Data Invalid';
      }
    }
    else
    {
      this.errorMessage = 'Form Data Invalid';
    }
  }

}
