import { NgModule } from "@angular/core";

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

const modules = [
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
]

@NgModule({
    imports: modules,
    exports: modules
})
export class MaterialModule { }