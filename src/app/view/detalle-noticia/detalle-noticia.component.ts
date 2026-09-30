import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-detalle-noticia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalle-noticia.component.html',
  styleUrl: './detalle-noticia.component.css'
})
export class DetalleNoticiaComponent {
  liked = false;
  shared = false;

  article = {
    category: 'Reporte',
    title: 'Movilidad en Bogotá, hoy 29 de septiembre: se reportan dos choques entre vehículos',
    summary: 'Para planear mejor la ruta de este 29 de septiembre, se reportan novedades en las vías de Bogotá, TransMilenio y la medida de pico y placa.',
    date: '29 de septiembre de 2026',
    time: '06:28 a. m.',
    author: 'Redacción Bogotá',
    readTime: '4 min de lectura',
    source: 'El Espectador',
    sourceUrl: 'https://www.elespectador.com/bogota/movilidad-en-bogota-hoy-29-de-septiembre-se-reportan-dos-choques-entre-vehiculos/',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=85',
    paragraphs: [
      'Bogotá inició la jornada del 29 de septiembre con novedades de movilidad en diferentes corredores. La información fue actualizada durante la mañana para que los ciudadanos pudieran planear sus desplazamientos y consultar el estado de las principales vías.',
      'La Secretaría de Movilidad reportó un choque con lesionado en la avenida Ciudad de Cali con calle 71B, en sentido norte-sur, y un choque simple en la avenida Guayacanes con calle 6. Estos hechos generaron afectaciones puntuales mientras las autoridades atendían los incidentes.',
      'En la troncal Caracas también se reportó congestión debido a un siniestro vial en la avenida Caracas con calle 6. TransMilenio informó que algunos servicios presentaban atrasos por el paso restringido en la zona.',
      'Para esta jornada, la restricción de pico y placa opera entre las 6:00 a. m. y las 9:00 p. m. La medida también contempla a los taxis con placa terminada en 1 y 2, de acuerdo con la información publicada por la Secretaría de Movilidad y recogida por El Espectador.',
      'La operación de TransMilenio comenzó con normalidad y las autoridades recomendaron consultar los canales oficiales antes de iniciar el viaje, especialmente en corredores donde se presentan obras, siniestros o cambios temporales en la circulación.'
    ],
    sourceNote: 'Información basada en la publicación de El Espectador del 29 de septiembre de 2026. El contenido de esta demo está resumido y redactado para fines de demostración del frontend.'
  };

  toggleLike(): void {
    this.liked = !this.liked;
  }

  share(): void {
    this.shared = true;
    if (navigator.share) {
      navigator.share({
        title: this.article.title,
        text: this.article.summary,
        url: this.article.sourceUrl
      }).catch(() => undefined);
    }
  }
}
