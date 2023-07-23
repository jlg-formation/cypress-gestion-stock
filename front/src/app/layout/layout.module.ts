import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, BodyComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, BodyComponent],
})
export class LayoutModule {}
