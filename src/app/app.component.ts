import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { TutorialsComponent } from './pages/tutorials/tutorials.component';
import { TipsComponent } from './pages/tips/tips.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,HeroSectionComponent,FooterComponent,TutorialsComponent,TipsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first_project';
}
