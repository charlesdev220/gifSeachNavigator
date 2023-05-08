import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyImageComponent } from './lazy-image/lazy-image.component';



@NgModule({
  declarations: [
    LazyImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LazyImageComponent
  ]
})
export class SharedModule { }
