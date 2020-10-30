import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { ProductListComponent } from './product-list.component';

import { ConvertToSpacesPipe} from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { ProductDetailComponent } from './product-detail.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id',
      canActivate:[ProductDetailGuard],
      component: ProductDetailComponent
     },
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductDetailComponent
  ]
  
})
export class ProductModule { }
