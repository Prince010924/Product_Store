import { ServicesfakestoreService } from 'src/app/servicesfakestore.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private fsService: ServicesfakestoreService){}

  products: any[] =[];

  ngOnInit(): void {
      this.fsService.getProduct().subscribe((results: any) =>{
        this.products = results
        console.table(results)
      })
  }

}
