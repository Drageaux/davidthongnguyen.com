import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
  FaConfig
} from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './sections/about/about.component';
import { TestimonialsComponent } from './sections/testimonials/testimonials.component';
import { ContactComponent } from './sections/contact/contact.component';
import { TechStackComponent } from './sections/tech-stack/tech-stack.component';
import { ServicesComponent } from './sections/services/services.component';
import { ProjectsComponent } from './sections/projects/projects.component';

import {
  faUser,
  faLaptopCode,
  faPhone,
  faCommentAltSmile,
  faTasks,
  faSitemap,
  faPaperPlane,
  faChevronRight,
  faQuestionCircle,
  faLink
} from '@fortawesome/pro-regular-svg-icons';
import {
  faGithub,
  faLinkedin,
  faAngular
} from '@fortawesome/free-brands-svg-icons';
import {
  faPaw as fasPaw,
  faEye as fasEye,
  faDownload as fasDownload,
  faUser as fasUser,
  faLaptopCode as fasLaptopCode,
  faPhone as fasPhone,
  faCommentAltSmile as fasCommentAltSmile
} from '@fortawesome/pro-solid-svg-icons';
import { faPhoneLaptop as falPhoneLaptop } from '@fortawesome/pro-light-svg-icons';
import {
  faUser as fadUser,
  faLaptopCode as fadLaptopCode,
  faPhone as fadPhone,
  faCommentAltSmile as fadCommentAltSmile
} from '@fortawesome/pro-duotone-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TestimonialsComponent,
    ContactComponent,
    TechStackComponent,
    ServicesComponent,
    ProjectsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(faLibrary: FaIconLibrary, faConfig: FaConfig) {
    // Add an icon to the library for convenient access in other components

    faConfig.defaultPrefix = 'far';
    // regular
    faLibrary.addIcons(
      faUser,
      faLaptopCode,
      faPhone,
      faCommentAltSmile,
      faTasks,
      faSitemap,
      faPaperPlane,
      faChevronRight,
      faQuestionCircle,
      faLink
    );
    // brand
    faLibrary.addIcons(faGithub, faLinkedin, faAngular);
    // solid
    faLibrary.addIcons(
      fasPaw,
      fasEye,
      fasDownload,
      fasUser,
      fasLaptopCode,
      fasPhone,
      fasCommentAltSmile
    );
    // light
    faLibrary.addIcons(falPhoneLaptop);
    // duotone
    faLibrary.addIcons(fadUser, fadLaptopCode, fadPhone, fadCommentAltSmile);
  }
}
