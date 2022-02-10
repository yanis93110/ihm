export class Product{
  id?: number;
  marque?: string;
  prix?: number;
  reference?: string;
  image?: File;
  dispo?: string;
  description?: string;
}

export interface iProduits {
  id: number;
  marque: string;
  prix: number;
  reference: string;
  image: File;
  dispo: string;
  description: string;
}

