import { Component, OnInit } from '@angular/core';
import { ComptesService } from '../../services/comptes.service';
import { Compte } from '../../domain/compte';

@Component({
  selector: 'app-compte-list',
  templateUrl: './compte-list.component.html',
  styleUrls: ['./compte-list.component.css']
})
export class CompteListComponent implements OnInit {


  data: Compte[] ;

  constructor(private _sevice: ComptesService)  { }

  ngOnInit() {
    this._sevice.getAlllConptes().subscribe
    (
      res => this.data = res ,
      err => console.log(`Attention, Il y eu l'erreur :${err}`)
    );
  }

}
