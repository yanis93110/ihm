export interface iCommandes {
  id: number;
  name: string;
  articles: string[];
  prix: number;
}

export class Commande {

  id?: number;
  name?: string;
  articles?: string[];
  prix?: number;

}
