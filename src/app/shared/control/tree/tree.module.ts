import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TreeComponent } from "../tree/tree.component";

@NgModule({
  declarations: [TreeComponent],
  exports: [TreeComponent],
  imports: [CommonModule],
})
export class TreeModule {}
