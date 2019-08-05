import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';
import {Chart} from'chart.js';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public id;
  public stocks;
  public price;
  public chart;
  public days=['01/07','02/07','03/07','04/07','05/07','06/07','07/07','08/07','09/07','10/07','11/07','12/07','13/07'];
  constructor(private stock:StockService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap)=>
    {
     let id = parseInt(params.get('id'))
     this.id = id;
    });
    this.stocks = this.stock.getStockId(this.id);
    this.price = this.stock.getPrice(this.id);


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
  back()
  {
    this.router.navigate(['../../'],{relativeTo : this.route})
  }
}
