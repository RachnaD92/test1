import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ArunComponent } from './arun/arun.component';
import { RachnaComponent } from './rachna/rachna.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [ ArunComponent, RachnaComponent ],
})

export class AppModule { }