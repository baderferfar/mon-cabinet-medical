

export interface Soin {
    id: string 
    imageUrl: string
    title: string
    traitement: string

}

export interface Medecin {
    id: string
    imageUrl: string
    name: string
    specialite: string
    question: string
    reponse: string 
}

export interface Cabinet {
    id: string
    imageUrl: string
    title: string
}

export interface Contact {
  nom: string;
  email: string;
  telephone: string;
  soin: string;
  message: string;

}

export interface ContactInfo {
  id: string;
  iconUrl: string;
  title: string;
  libelle1: string;
  libelle2: string;
  libelle3: string;

}