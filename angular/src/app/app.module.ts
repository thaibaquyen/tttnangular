import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import {Routes, RouterModule,  } from '@angular/router';
const routesConfig: Routes = [
{path: 'input' , component: InputComponent},
{path: 'compoi' , component: NewcomponentComponent}
];
import { AppRoutingModule } from './app-routing.module';
import { SinhvienService } from './service/sinhvien.service';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WordComponent } from './component/word.component';
import { WComponent } from './component/w.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { InputComponent } from './input/input.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    WComponent,
    NewcomponentComponent,
    InputComponent,
    Form1Component,
    Form2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routesConfig)
  ],
  providers: [
    SinhvienService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
