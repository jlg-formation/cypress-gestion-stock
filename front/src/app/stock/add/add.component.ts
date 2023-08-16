import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faCircleNotch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { catchError, delay, finalize, of, switchMap, tap } from 'rxjs';
import { NewArticle } from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/services/article.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  errorMsg = '';
  f = new FormGroup({
    name: new FormControl('Truc', [
      Validators.required,
      Validators.maxLength(10),
    ]),
    price: new FormControl(0, [Validators.required]),
    qty: new FormControl(0, [Validators.required]),
    category: new FormControl('jardin', [Validators.required]),
    expiryDate: new FormControl('', []),
    used: new FormControl(false),
  });
  faCircleNotch = faCircleNotch;
  faPlus = faPlus;
  isAdding = false;
  type = new FormControl('');

  constructor(
    private readonly articleService: ArticleService,
    private readonly router: Router
  ) {}

  submit() {
    const newArticle: NewArticle = this.f.value as NewArticle;

    of(undefined)
      .pipe(
        tap(() => {
          this.isAdding = true;
          this.errorMsg = '';
        }),
        delay(environment.duration),
        switchMap(() => this.articleService.add(newArticle)),
        switchMap(() => this.articleService.refresh()),
        switchMap(() => this.router.navigateByUrl('/stock')),
        catchError((err) => {
          console.log('err: ', err);
          this.errorMsg = 'Erreur Technique';
          return of(undefined);
        }),
        finalize(() => {
          this.isAdding = false;
        })
      )
      .subscribe();
  }

  isInvalid() {
    if (this.f.invalid) {
      return true;
    }
    if (
      this.type.value === 'perishable' &&
      this.f.controls['expiryDate'].value === ''
    ) {
      return true;
    }
    return false;
  }
}
