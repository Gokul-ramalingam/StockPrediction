import { Stocks } from "./stock";

export const stock:Stocks[] = 
[
    {symbol:'GOOGL',
     price:[10,-20,30,50,70,-25,60,-25,90,45,65,-43,-77],
     name:'Google',
     image:'/assets/images/google.png',
     time:'10 mins ago',
     weekReport:[203.2,180.1,205.3,205.4,160.9,200.01,199.9],
     id:0
     },
    {symbol:'APPL',
    price:[100,-200,320,-205,120,355,-260,230,-320,-250,-300,150,250],
    name:'Apple',
    image:'/assets/images/apple.png',
    time:'1 hour ago',
    weekReport:[403.1,302.5,500.3,250.5,432.3,333.03,120.1],
    id:1
   },
   {symbol:'INSTA',
    price:[150,-200,50,205,-120,-355,260,-230,320,-250,300,-150,-250],
    name:'Instagram',
    image:'/assets/images/instagram.png',
    time:'30 min ago',
    weekReport:[405.1,303.5,505.3,150.5,332.3,333.07,122.1],
    id:2
   }
];