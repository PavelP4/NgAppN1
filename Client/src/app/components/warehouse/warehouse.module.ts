import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WarehouseComponent } from './warehouse.component';


@NgModule({
    imports: [CommonModule],
    declarations: [WarehouseComponent],
    exports: [WarehouseComponent]
})
export class WarehouseModule {    
}