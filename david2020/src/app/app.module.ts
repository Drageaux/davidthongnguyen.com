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
  faPaperPlane,
  faChevronRight,
  faQuestionCircle,
  faLink,
  faCoffeeTogo,
  faBookSpells,
  faExternalLink
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
  faUserTie as fasUserTie,
  faLaptopCode as fasLaptopCode,
  faPhone as fasPhone,
  faCommentAltSmile as fasCommentAltSmile,
  faUserHeadset as fasUserHeadset,
  faTools as fasTools
} from '@fortawesome/pro-solid-svg-icons';
import {
  faPhoneLaptop as falPhoneLaptop,
  faProjectDiagram as falProjectDiagram
} from '@fortawesome/pro-light-svg-icons';
import {
  faUser as fadUser,
  faLaptopCode as fadLaptopCode,
  faPhone as fadPhone,
  faCommentAltSmile as fadCommentAltSmile,
  faCheckCircle as fadCheckCircle
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
      faPaperPlane,
      faChevronRight,
      faQuestionCircle,
      faLink,
      faCoffeeTogo,
      faBookSpells,
      faExternalLink
    );
    // brand
    faLibrary.addIcons(faGithub, faLinkedin, faAngular);
    // solid
    faLibrary.addIcons(
      fasPaw,
      fasEye,
      fasDownload,
      fasUserTie,
      fasLaptopCode,
      fasPhone,
      fasCommentAltSmile,
      fasUserHeadset,
      fasTools
    );
    // light
    faLibrary.addIcons(falPhoneLaptop, falProjectDiagram);
    // duotone
    faLibrary.addIcons(
      fadUser,
      fadLaptopCode,
      fadPhone,
      fadCommentAltSmile,
      fadCheckCircle
    );
  }
}
