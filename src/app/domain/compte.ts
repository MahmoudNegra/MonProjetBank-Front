export interface Compte {

  numero: string;
  propriotaire: string;
  solde: number;
  operations?: any[]; // ? pour indiquer que c'est optionnel
}
