import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent extends BasePageComponent implements OnInit {

  constructor(
    route: ActivatedRoute
  ) {
    super(route);
   }


  override ngOnInit(): void {
  }

}
