import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import {Chart} from 'chart.js';
import {Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public price = [];
  public chart = [];
  public weekReport=[];
  public symbol;
  public name;
  public image;
  public flag=false;
  public time;
  public past=[];
  public days=['01/07','02/07','03/07','04/07','05/07','06/07','07/07','08/07','09/07','10/07','11/07','12/07','13/07'];
  

  constructor(private stock:StockService,private router:Router,private routes:ActivatedRoute) { }
  ngOnInit() {
    this.past = this.stock.getPast();
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: this.days,
        datasets: [
          { 
            data: this.price,
            borderColor: "#ffffff",
            backgroundColor:"#ffffff",
            fill: false
          },
        ]
      },
      options: {
        responsive:true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [{
            display: true,
            barPercentage:0.4,
             gridLines:
             {
               color:'rgba(255,255,255,0.1)'
             },
             scaleLabel: {
              display: true,
              labelString: 'DAYS OF TRADE',
              fontColor:'#ffffff'
            },
            ticks: {
              fontColor: "white",
              fontSize: 14
          }
          }],
          yAxes: [{
            display: true,
            barPercentage:0.5,
            gridLines:
             {
               zeroLineColor: 'white',
               color:'rgba(255,255,255,0.1)'
             },
             scaleLabel: {
              display: true,
              labelString: 'STOCK IN  RS',
              fontColor:'#ffffff'
            },
            ticks: {
              fontColor: "white",
              fontSize: 14
          }
          }],
        }
      }
    });
     
  }
 

  public func(value)
  {
    this.price=this.stock.getStocks(value);
    this.symbol=this.stock.getSymbol(value);
    this.name=this.stock.getName(value);
    this.image=this.stock.getImage(value);
    this.time=this.stock.getTime(value);
    this.stock.addPast(value);
    this.weekReport=this.stock.getWeekReport(value);
    this.flag=true;
  }

  public viewPage(id)
  {
     this.router.navigate(['view',id],{relativeTo:this.routes});
  }
}