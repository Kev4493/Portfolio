import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { PortfolioSectionComponent } from './portfolio-section/portfolio-section.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FooterSectionComponent } from './footer-section/footer-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeSectionComponent,
    SkillsSectionComponent,
    PortfolioSectionComponent,
    AboutMeSectionComponent,
    ContactSectionComponent,
    FooterSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
