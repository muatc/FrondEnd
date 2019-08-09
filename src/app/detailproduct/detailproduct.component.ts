import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent implements OnInit {
  product={
    "productId": 1,
    "productName": "Leaf Rake",
    "productCode": "GDN-0011",
    "releaseDate": "March 19, 2016",
    "description": "Leaf rake with 48-inch wooden handle.",
    "price": 19.95,
    "starRating": 3.2,
    "imageUrl": "leafrake.jpg"
};
pageTitle='Leaf Rake';
  constructor() { }

  ngOnInit() {
  }
  onBack()
  {
    window.history.back();
  }
}
