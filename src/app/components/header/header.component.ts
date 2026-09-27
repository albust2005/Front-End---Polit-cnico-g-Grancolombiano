import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() title: string = "Nuestro logo";

  navLinks = [
    { label: 'Noticias', path: '#' },
    { label: 'Contactanos', path: '#' },
    { label: 'Tus favoritos', path: '#' },
    { label: 'Publica tu historia', path: '#' }
  ]
}
