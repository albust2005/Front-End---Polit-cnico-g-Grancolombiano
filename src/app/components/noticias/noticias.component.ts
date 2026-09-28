import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Noticia {
  id: number;
  titulo: string;
  imagen: string;
  categoria: string;
  resumen: string;
}

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent implements OnInit {
  noticias: Noticia[] = [];
  categorias: string[] = [];

  busqueda: string = '';
  categoriaSeleccionada: string = '';

  paginaActual: number = 1;
  porPagina: number = 6;

  async ngOnInit() {
    const respuesta = await fetch('assets/data/noticias.json');
    this.noticias = await respuesta.json();
    this.categorias = [...new Set(this.noticias.map(n => n.categoria))];
  }

  get noticiasFiltradas(): Noticia[] {
    return this.noticias.filter(n => {
      const coincideNombre = n.titulo.toLowerCase().includes(this.busqueda.toLowerCase());
      const coincideCategoria = this.categoriaSeleccionada
        ? n.categoria === this.categoriaSeleccionada
        : true;
      return coincideNombre && coincideCategoria;
    });
  }

  get totalPaginas(): number {
    return Math.max(1, Math.ceil(this.noticiasFiltradas.length / this.porPagina));
  }

  get noticiasPagina(): Noticia[] {
    const inicio = (this.paginaActual - 1) * this.porPagina;
    return this.noticiasFiltradas.slice(inicio, inicio + this.porPagina);
  }

  get paginasArray(): number[] {
    return Array.from({ length: this.totalPaginas }, (_, i) => i + 1);
  }

  irAPagina(pagina: number) {
    if (pagina >= 1 && pagina <= this.totalPaginas) {
      this.paginaActual = pagina;
    }
  }

  reiniciarPagina() {
    this.paginaActual = 1;
  }
}