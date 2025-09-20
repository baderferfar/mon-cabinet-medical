

export interface Soin {
    id: string 
    imageUrl: string
    title: string
    traitement: string
    caracteristique : {
        libelle_1:string
        libelle_2:string
        libelle_3:string
    }
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