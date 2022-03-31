import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    LayoutPageComponent,
    LayoutComponent
  ],
  imports: [CommonModule],
})
export class SharedModule {}
