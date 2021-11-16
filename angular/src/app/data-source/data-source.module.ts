import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DataSourceRoutingModule } from './data-source-routing.module';
import { DataSourceDirective } from './data-source.directive';
import { FormComponent } from './from.component';
import { SelectComponent } from './select.component';

@NgModule({
  declarations: [DataSourceDirective, FormComponent, SelectComponent],
  imports: [CommonModule, DataSourceRoutingModule, MatInputModule, MatSelectModule, ReactiveFormsModule],
})
export class DataSourceModule {}
