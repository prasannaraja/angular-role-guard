import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RadioButtonComponent } from "../radio-button/radio-button.component";

@NgModule({
  declarations: [RadioButtonComponent],
  exports: [RadioButtonComponent],
  imports: [CommonModule],
})
export class RadioButtonModule {}
