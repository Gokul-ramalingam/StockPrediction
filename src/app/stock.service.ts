import { Injectable } from '@angular/core';
import {stock} from './stocksClass'
@Injectable()
export class StockService {
  stocks = [];
  price = [];
  past = [];
  constructor() { }
  getStocks(name)
  {
    this.stocks = stock;
    for(let stock of this.stocks)
    {
      if(name==stock.symbol)
      this.price = stock.price; 
    }
    return this.price;
  }
  getImage(name)
  {
    this.stocks = stock;
    for(let stock of this.stocks)
    {
      if(name==stock.symbol)
       return stock.image; 
    }
    return null;
  }
  getName(name)
  {
    this.stocks = stock;
    for(let stock of this.stocks)
    {
      if(name==stock.symbol)
       return stock.name; 
    }
    return null;
  }
  getTime(name)
  {
    this.stocks = stock;
    for(let stock of this.stocks)
    {
      if(name==stock.symbol)
       return stock.time; 
    }
    return null;
  }
  getSymbol(name)
  {
    this.stocks = stock;
    for(let stock of this.stocks)
    {
      if(name==stock.symbol)
       return stock.symbol; 
    }
    return null;
  }

  addPast(name)
  {
    this.stocks = stock;
    for(let stock of this.stocks)
    {
      if(name==stock.symbol)
       {
         let count = 0;
         for(let p of this.past)
         {
           if(name==p.symbol)
           {
            this.past.splice(count,1);
           }
           count++;
         }
         this.past.splice(0,0,stock);
       }
    }
    console.log(this.past);
  }
  getPast()
  {
    return this.past;
  }
  getWeekReport(name)
  {
    this.stocks = stock;
    for(let stock of this.stocks)
    {
      if(name==stock.symbol)
       return stock.weekReport; 
    }
    return null;
  }
  getStockId(id)
  {
    this.stocks = stock;
    for(let stock of this.stocks)
    {
      if(id==stock.id)
       return stock; 
    }
    return null;
  }

  getPrice(id)
  {
    this.stocks = stock;
    for(let stock of this.stocks)
    {
      if(id==stock.id)
       return stock.price; 
    }
    return null;
  }
}

