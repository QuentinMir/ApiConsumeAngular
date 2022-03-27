import { Component, OnInit } from '@angular/core';
import {ProduitService} from "../../../services/produit.service";
import {Produit} from "../../../models/produit";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products!: Produit[];
  loading: boolean = true;

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.produitService.getAll().subscribe(data => {
      this.products = data;
      this.loading = false;
    })
  }

}
