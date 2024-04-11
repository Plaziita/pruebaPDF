import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  data: any[] = [
    { id: 1, nombre: 'John', apellido: 'Doe', pdfSrc: "../assets/ejemplo.pdf" },
    { id: 2, nombre: 'Jane', apellido: 'Smith', pdfSrc: "../assets/ejemplo.pdf" },
    { id: 1, nombre: 'John', apellido: 'Doe', pdfSrc: "../assets/ejemplo.pdf" },
    { id: 2, nombre: 'Jane', apellido: 'Smith', pdfSrc: "../assets/ejemplo.pdf" },
    { id: 1, nombre: 'John', apellido: 'Doe', pdfSrc: "../assets/ejemplo.pdf" },
    { id: 2, nombre: 'Jane', apellido: 'Smith', pdfSrc: "../assets/ejemplo.pdf" },
  ];

  title = 'pruebaPDF';
  showPdf: boolean = false;
  zoomLevel: number = 1.0; // Inicializar el nivel de zoom
  pdfSrc = "../assets/ejemplo.pdf";

  constructor(){
    (window as any).pdfWorkerSrc = '../assets/pdf.worker.min.js';
  }
  zoomIn() {
    this.zoomLevel += 0.1; // Incrementar el nivel de zoom
  }

  zoomOut() {
    this.zoomLevel -= 0.1; // Decrementar el nivel de zoom
  }
  togglePdfViewer() {
    this.showPdf = !this.showPdf;
  }
}
