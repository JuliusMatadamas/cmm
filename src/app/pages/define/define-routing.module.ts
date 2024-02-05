import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DefineComponent} from "./define.component";

const routes: Routes = [
    {
        path: '',
        component: DefineComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DefineRoutingModule { }
