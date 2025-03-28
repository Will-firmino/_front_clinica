import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, HomeComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'clinica';
}
