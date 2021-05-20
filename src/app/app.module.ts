import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CustomComponent } from './custom/custom.component';
import { FullnameComponent } from './fullname/fullname.component';
import { NamePipe } from './name.pipe';
import { ErrorDirective } from './error.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomComponent,
    FullnameComponent,
    NamePipe,
    ErrorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
