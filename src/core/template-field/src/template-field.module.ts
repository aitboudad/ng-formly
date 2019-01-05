import { NgModule } from '@angular/core';
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';
import { TemplateFieldType } from './template-field.type';

export function formlyTemplateExtension(field: FormlyFieldConfig) {
  if (field.template && !field.type) {
    field.type = <any> TemplateFieldType;
  }
}

@NgModule({
  declarations: [TemplateFieldType],
  entryComponents: [TemplateFieldType],
  imports: [
    FormlyModule.forChild({
      extensions: [
        { name: 'formly-template', extension: { prePopulate: formlyTemplateExtension } },
      ],
    }),
  ],
})
export class FormlyTemplateFieldModule { }
