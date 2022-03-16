import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpErrorResponse, HttpHeaderResponse, HTTP_INTERCEPTORS } from '@angular/common/http'
import { GaugeModule } from 'angular-gauge';
import { MatTabsModule } from '@angular/material/tabs'
import { MatIconModule } from '@angular/material/icon'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeComponent } from './components/home/home.component'
import { HttpHeadersIntercaptor } from './components/interceptor/http-headers.interceptor';
import { HttpErrorsInterceptor } from './components/interceptor/http-errors.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GaugeModule.forRoot(),
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule

    
    
  ],
  providers: [
    
      { provide: HTTP_INTERCEPTORS, useClass: HttpHeadersIntercaptor, multi: true},
      { provide: HTTP_INTERCEPTORS, useClass: HttpErrorsInterceptor, multi: true}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
