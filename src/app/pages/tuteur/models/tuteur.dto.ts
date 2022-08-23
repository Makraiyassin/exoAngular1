export interface Adresse {
  numero: number;
  boite: string;
  rue: string;
  ville: string;
  codePostal: number;
}

export interface Enfant {
  id: number;
  nom: string;
  prenom: string;
  dateNaiss: string;
  proprete: string;
  allergies: string[];
}

export interface Tuteur {
  id: number;
  prenom: string;
  nom: string;
  adresse: Adresse;
  numTel: string;
  enfants: Enfant[];
}
