import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ImpressionComponent } from './impression/impression.component';
import { NavigationComponent } from './navigation/navigation.component';
import { YunServicesComponent } from './yun-services/yun.services.component';

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
