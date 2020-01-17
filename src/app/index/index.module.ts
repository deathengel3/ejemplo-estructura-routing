import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {IndexComponent} from './index.component';
import { OlvidePasswordComponent } from './olvide-password/olvide-password.component';



@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IndexModule { }
