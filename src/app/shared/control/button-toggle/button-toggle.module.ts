import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonToggleComponent } from "../button-toggle/button-toggle.component";

@NgModule({
  declarations: [ButtonToggleComponent],
  exports: [ButtonToggleComponent],
  imports: [CommonModule],
})
export class ButtonToggleModule {}
