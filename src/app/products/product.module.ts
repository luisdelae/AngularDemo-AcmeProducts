import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';

import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';
import { SharedModule } from './../shared/shared.module'

@NgModule({
  imports: [
      RouterModule.forChild([
          { path: 'products', component: ProductListComponent },
          {
              path: 'products/:id',
              canActivate: [ProductGuardService],
              component: ProductDetailComponent
          }
      ]),
      SharedModule
    ],
    declarations: [
        ProductDetailComponent,
        ProductListComponent,
    ],
    providers: [
        ProductService,
        ProductGuardService
    ]
})
export class ProductModule { }
