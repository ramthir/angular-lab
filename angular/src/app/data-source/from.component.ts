import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-form',
  styleUrls: ['form.component.css'],
  templateUrl: 'form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {}
