import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { Compte } from '../../domain/compte';
import { ComptesService } from '../../services/comptes.service';

@Component({
  selector: 'app-comptes-delete',
  templateUrl: './comptes-delete.component.html',
  styleUrls: ['./comptes-delete.component.css']
})
export class ComptesDeleteComponent implements OnInit {
  numCompte: string;
  compte: Compte = {
    numero: '',
    propriotaire: '',
    solde: 0
  };

  constructor(
    private _router: ActivatedRoute,
    private _routers: Router,
    private _service: ComptesService
  ) {}

  ngOnInit() {
    this._router.params.subscribe(
      parametres => {
        this.numCompte = parametres['id'];
        this.getCompteById(this.numCompte);
      },
      error =>
        console.log(
          'ATTENTION - Il y a erreur lors de la navigation vers Delete ' + error
        )
    );
    // Initialiser le compte
  }

  getCompteById(id) {
    this._service.getCompteById(id).subscribe(resp => (this.compte = resp));
  }

  annulerDeleete() {
    this._routers.navigate(['/list']);
    console.log('Annulation du delete');
  }

    confirmerDeleete() {
      this._service.deleteCompteById(this.numCompte).subscribe(
        resp => {
          this._routers.navigate(['/list']);
          console.log('Confirmation du delete');

        },
        err => console.log('Erreur du delete')
      );
  }
}
