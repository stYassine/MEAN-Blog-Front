import { Component, OnInit } from '@angular/core';

import { Category } from '../../models/category';
import { RestApiService } from '../../services/rest-api.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private  rest_api: RestApiService
  ) { }

  categories: Category[];

  ngOnInit() {

    this.rest_api.getAllCategories().subscribe(categories => {
      this.categories =categories;
    });

  }

}
