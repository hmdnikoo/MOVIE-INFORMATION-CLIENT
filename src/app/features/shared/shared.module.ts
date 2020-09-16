import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule} from 'ng-zorro-antd';


const NGZORRO_MODULES = [
  NgZorroAntdModule,
];

@NgModule({
  imports: [...NGZORRO_MODULES,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [],
  exports: [
    ...NGZORRO_MODULES,
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
