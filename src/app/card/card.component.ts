import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  medico = {
    nome: "Dr. Matheus Marques",
    especialidade: "Cardiologia",
    imagem: "../../assets/user-1.jpg",
    imagem2: "https://cpv.ifsp.edu.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
  } 

  paciente = {
    nome: "João da Silva",
    idade: 25,
    cidade: "São Paulo",
    estado: "SP",
  }
}
