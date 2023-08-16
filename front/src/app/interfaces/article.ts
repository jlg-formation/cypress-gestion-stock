export interface Article {
  id: string;
  name: string;
  used: boolean;
  price: number;
  qty: number;
  category: Category;
  expiryDate?: Date;
}

export type Category = 'jardin' | 'alimentation';

export type NewArticle = Omit<Article, 'id'>;
