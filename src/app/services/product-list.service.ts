import { Injectable, Component } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductListService{
  main = [];
  p:string[]=[];
  mymap:Map<string,object>|undefined
  constructor(){
  }

  addItem(id1:string){
    console.log("id-"+id1);
    this.p.push(id1);
    console.log("pushed");
    console.log(this.p);
  }

  getservices(product:string){

    this.mymap = new Map();

    this.mymap.set("101",{
      id: 1,
      name: 'Abayaristam',
      price: '250',
      url:'assets/image/siddha/abayaristam.jpg',
    });

    this.mymap.set("102",{
      id: 2,
      name: 'Ashokarishta',
      price: '250',
      url:'assets/image/siddha/dabur_ashokarishta_syrup_450_ml_0.jpg',
    });

    this.mymap.set("103",{
      id: 3,
      name: 'Aswagandha',
      price: '250',
      url:'assets/image/siddha/aswagandha.jpg',
    });

    this.mymap.set("104",{
      id: 4,
      name: 'Dashamula Aristam',
      price: '250',
      url:'assets/image/siddha/dashamuulaarishttamfront_300x300.webp',
    });

    this.mymap.set("105",{
      id: 5,
      name: 'Gandhaka Rasayanam',
      price: '250',
      url:'assets/image/siddha/gandhaka.jpg',
    });

    this.mymap.set("106",{
      id: 6,
      name: 'Lauhasava',
      price: '250',
      url:'assets/image/siddha/lauhasava.jpg',
    });

    this.mymap.set("107",{
      id: 7,
      name: 'Saraswataristam',
      price: '250',
      url:'assets/image/siddha/saraswatarishta.jpg',
    });

    this.mymap.set("108",{
      id: 8,
      name: 'Thippili Rasayanam',
      price: '250',
      url:'assets/image/siddha/thippili.png',
    });

   this.mymap.set("111",{
      id: 11,
      name: 'Athimathuram',
      price: '250',
      url:'assets/image/ayurvedha/athimadhuram.png',
    });

     this.mymap.set("112",{
      id: 12,
      name: 'Kadukkai',
      price: '250',
      url:'assets/image/ayurvedha/kadukkai.jpg',
    });

    this.mymap.set("113",{
      id: 13,
      name: 'Kalarchikai',
      price: '250',
      url:'assets/image/ayurvedha/kalkaraichi.jpg',
    });

    this.mymap.set("114",{
      id: 14,
      name: 'Neerkovai',
      price: '250',
      url:'assets/image/ayurvedha/neerkovai.jpg',
    });

    this.mymap.set("115",{
      id: 15,
      name: 'Ponnavarai',
      price: '250',
      url:'assets/image/ayurvedha/ponnavarai.jpg',
    });

    this.mymap.set("116",{
      id: 16,
      name: 'Thaaleesaadhi',
      price: '250',
      url:'assets/image/ayurvedha/thaaleesaadhi.jpg',
    });

    this.mymap.set("117",{
      id: 17,
      name: 'Vallarai',
      price: '250',
      url:'assets/image/ayurvedha/vallarai.jpg',
    });

    this.mymap.set("118",{
      id: 18,
      name: 'Vilvam',
      price: '250',
      url:'assets/image/ayurvedha/vilvam.jpg',
    });


    this.mymap.set("121",{
      id: 21,
      name: 'Almond',
      price: '250',
      url:'assets/image/pulses/almond.jpg',
    });

     this.mymap.set("122",{
      id: 22,
      name: 'Blackraisin',
      price: '250',
      url:'assets/image/pulses/blackraisin.jpg',
    });

    this.mymap.set("123",{
      id: 23,
      name: 'cashewnut',
      price: '250',
      url:'assets/image/pulses/cashew.jpg',
    });

    this.mymap.set("124",{
      id: 24,
      name: 'Dates',
      price: '250',
      url:'assets/image/pulses/dates.jpg',
    });

    this.mymap.set("125",{
      id: 25,
      name: 'Figfruit',
      price: '250',
      url:'assets/image/pulses/figfruit.jpg',
    });

    this.mymap.set("126",{
      id: 26,
      name: 'Pista',
      price: '250',
      url:'assets/image/pulses/pista.jpg',
    });

    this.mymap.set("127",{
      id: 27,
      name: 'Raisins',
      price: '250',
      url:'assets/image/pulses/raisins.jpg',
    });

    this.mymap.set("128",{
      id: 28,
      name: 'Walnut',
      price: '250',
      url:'assets/image/pulses/walnut.jpg',
    });

    this.mymap.set("131",{
      id: 31,
      name: 'Greentea',
      price: '250',
      url:'assets/image/herbal/greentea.jpg',
    });

    this.mymap.set("132",{
      id: 32,
      name: 'Jathikai',
      price: '250',
      url:'assets/image/herbal/jathikai.jpg',
    });

    this.mymap.set("133",{
      id: 33,
      name: 'Kabasuram',
      price: '250',
      url:'assets/image/herbal/kabasuram.jpg',
    });

    this.mymap.set("134",{
      id: 34,
      name: 'Karpuravalli',
      price: '250',
      url:'assets/image/herbal/karpuravalli.jpg',
    });

    this.mymap.set("135",{
      id: 35,
      name: 'Kuppaimeni',
      price: '250',
      url:'assets/image/herbal/kuppaimeeni.png',
    });

    this.mymap.set("136",{
      id: 36,
      name: 'Nilavembu',
      price: '250',
      url:'assets/image/herbal/nilavembu.jpg',
    });

    this.mymap.set("137",{
      id: 37,
      name: 'Sakarai kolli chooranam',
      price: '250',
      url:'assets/image/herbal/sakkarai.png',
    });

    this.mymap.set("138",{
      id: 38,
      name: 'Triphala',
      price: '250',
      url:'assets/image/herbal/triphala.jpg',
    });


      console.log("Product Id : " +product);
      console.log("MAP: " + JSON.stringify(this.mymap.get(product)));
    return this.mymap.get(product);

  }
/*
  arrayReturn()
  {
    var ele : string
    while(this.main.length > 0){
      this.main.pop();
    }
    for(var id of this.p){
      ele = this.mymap.get(id);
      this.main.push(ele);
    }
    return this.main;
  }
  */
  returnId()
  {
    return this.p;
  }


}
