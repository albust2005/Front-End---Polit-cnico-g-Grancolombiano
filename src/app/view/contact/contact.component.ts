import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {



  sendingOfInformation(){
    Swal.fire({
      title: '<span style="color: #6c8fe3;">Solicitud de mensaje</span>',
      text: 'Tu mensaje se ha enviado con exito.',
      confirmButtonText: 'Volver al inicio',
      confirmButtonColor: '#718fe2'
    })
  }

}
