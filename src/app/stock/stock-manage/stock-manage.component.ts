import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {Stock, StockService} from "../stock.service";
import {FormControl} from "@angular/forms";
import "rxjs/add/operator/debounceTime";
import {Observable} from "rxjs";
import {StarsComponent} from "../../stars/stars.component";

@Component({
  selector: 'app-stock-manage',
  templateUrl: './stock-manage.component.html',
  styleUrls: ['./stock-manage.component.css']
})
export class StockManageComponent implements OnInit {

  public stocks: Observable<Stock[]>;

  public nameFilter: FormControl = new FormControl();

  public keyword:string;

  constructor(public router: Router, public stockService: StockService) {
  }

  ngOnInit() {
    this.stocks = this.stockService.getStocks();
    this.nameFilter.valueChanges
      .debounceTime(500)
      .subscribe(value=>this.keyword=value);
  }

  create() {
    this.router.navigateByUrl('/stock/');
  }

  update(stock: Stock) {
    console.log(stock.name);
    this.router.navigateByUrl('/stock/' + stock.id);
  }

  @ViewChild(StarsComponent) star: StarsComponent;

  testStar(index: number){
    this.star.testStar(index);
  }

}

