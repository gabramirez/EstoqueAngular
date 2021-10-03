import { Component, OnInit } from '@angular/core';
import { Estoque } from './estoque';
import { Guid } from 'guid-typescript';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl  } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  templateUrl: './estoques.component.html',
  styleUrls: ['./estoques.component.css']
})
export class EstoquesComponent implements OnInit {


faCheckCircle = faCheckCircle;
estoques: Estoque[] = [];
formulario: any;
existeItem: boolean = false;

constructor() { }

  ngOnInit(): void {

      this.formulario = new FormGroup({
      estoqueId: new FormControl(),
      quantidade: new FormControl(),
      isComprado: new FormControl(),
      marca:  new FormControl(),
      modelo:  new FormControl(),
      placamae:  new FormControl(),
      memoria:  new FormControl(),
      velocidade:  new FormControl(),
      foto: new FormControl()
    });
  }
CadastrarProduto(): void{

  this.formulario.value.estoqueId = Guid.create().toString();
  this.formulario.value.isComprado = false;
  const estoque : Estoque  = this.formulario.value;
  console.log(estoque)
  this.estoques.push(estoque);
  localStorage.setItem('BD',JSON.stringify(this.estoques));
  this.existeItem = true;
  this.formulario.reset();
}
ExibirEstoque(): void{
  if(localStorage.getItem('BD')){
    this.estoques = JSON.parse(localStorage.getItem('BD')||'{}');
  }else{
    this.estoques = [];
  }
}
AtualizarEstoque(estoqueId: string): void{
 const indice : number = this.estoques.findIndex(p=>p.estoqueId === estoqueId);

  if(this.estoques[indice].isComprado){
    this.estoques[indice].isComprado = false;
 }else{
   }
    this.estoques[indice].isComprado = true;
    localStorage.setItem('BD', JSON.stringify(this.estoques));
}
DeletaEstoque(estoqueId: string): void{
  const indice : number = this.estoques.findIndex(p=>p.estoqueId === estoqueId);
  this.estoques.splice(indice, 1);

 }





}
