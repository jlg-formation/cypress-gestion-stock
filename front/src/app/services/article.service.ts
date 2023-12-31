import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { Article, NewArticle } from '../interfaces/article';

let articles: Article[] = [
  {
    id: 'a1',
    name: 'Tournevis',
    price: 2.99,
    qty: 123,
    category: 'jardin',
    used: false,
  },
  {
    id: 'a2',
    name: 'Pelle',
    price: 1.5,
    qty: 14,
    category: 'jardin',
    used: true,
  },
];

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles$ = new BehaviorSubject<Article[] | undefined>(undefined);

  add(newArticle: NewArticle): Observable<void> {
    return of(undefined).pipe(
      tap(() => {
        const article = { ...newArticle, id: crypto.randomUUID() };
        articles.push(article);
        this.articles$.next(articles);
      })
    );
  }

  refresh(): Observable<void> {
    // throw new Error('rrr');
    return of(undefined).pipe(
      tap(() => {
        this.articles$.next(articles);
      })
    );
  }

  remove(ids: string[]): Observable<void> {
    return of(undefined).pipe(
      tap(() => {
        articles = articles.filter((a) => !ids.includes(a.id));
        this.articles$.next(articles);
      })
    );
  }
}
