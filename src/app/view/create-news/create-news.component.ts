import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-news',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './create-news.component.html',
  styleUrl: './create-news.component.css'
})
export class CreateNewsComponent {


createNews(){
    Swal.fire({
      title: '<span style="color: #6c8fe3;">Se ha registrado su noticia</span>',
      text: 'Se ha creado con exito.',
      confirmButtonText: 'Volver al inicio',
      confirmButtonColor: '#718fe2'
    })
  }

}

