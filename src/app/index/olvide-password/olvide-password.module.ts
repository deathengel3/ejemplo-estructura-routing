import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OlvidePasswordComponent} from './olvide-password.component';
import {RouterModule} from '@angular/router';
import {OlvidePasswordRoutes} from './olvide-password.routes';



@NgModule({
  declarations: [OlvidePasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(OlvidePasswordRoutes)
  ]
})
export class OlvidePasswordModule { }
