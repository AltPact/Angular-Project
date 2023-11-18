import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import {
    MatButtomModule,
    MatButtonToggleModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatToolbarModule
} from '@angular/material';
import { MatBadgeModel } from '@angular/material/badge';

const material = [
    MatButtomModule,
    MatButtonToggleModule,
    MatIconModule,
    MatBadgeModel,
    MatProgressSpinnerModule,
    MatToolbarModule
];

@NgModule({
    imports: [material],
    exports: [material]
})

export class MaterialModule {}
