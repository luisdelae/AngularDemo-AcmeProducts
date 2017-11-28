import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service'

import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

    pageTitle: string = 'Product Detail';
    product: IProduct;

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _producList: ProductService) { }

    ngOnInit() {
        let id = +this._route.snapshot.paramMap.get('id');

        this.pageTitle += `: ${id}`;

        let product = this._producList.getProduct(id);

        product.subscribe(data => this.product = data);
        
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }

}
