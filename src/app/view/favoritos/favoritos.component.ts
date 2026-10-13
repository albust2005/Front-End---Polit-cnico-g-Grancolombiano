import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardNoticiaComponent } from '../../components/card-noticia/card-noticia.component';
import { FormsModule } from '@angular/forms';

interface Noticia {
  id: number;
  titulo: string;
  imagen: string;
  categoria: string;
  resumen: string;
}

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CommonModule, CardNoticiaComponent, FormsModule],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent implements OnInit {
  favoritos: Noticia[] = [];
  categorias: String[] = [];

  busqueda: String = '';
  categoriaSeleccionada: String = '';

  paginaActual: number = 1;
  porPagina: number = 6;

  async ngOnInit() {
    const respuesta = await fetch('assets/data/noticias.json');
    const noticias: Noticia[] = await respuesta.json();
    this.favoritos = noticias.slice(0, 2);
    this.categorias = [...new Set(this.favoritos.map(f => f.categoria))];
  }

  get noticiasFiltradas(): Noticia[] {
    return this.favoritos.filter(n => {
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
