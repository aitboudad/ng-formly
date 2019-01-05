import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-template-field-type',
  template: `<div [innerHtml]="field.template"></div>`,
})
export class TemplateFieldType extends FieldType {}
