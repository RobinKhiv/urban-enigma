import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ImpressionComponent } from './impression/impression.component';
import { YunServicesComponent } from './yun-services/yun.services.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    ImpressionComponent,
    NavigationComponent,
    YunServicesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
