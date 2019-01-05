import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { AppComponent } from './app.component';
import { FormlyFieldCustomInput } from './custom-input.component';
import { FormlyTemplateFieldModule } from '@ngx-formly/core/template-field';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyTemplateFieldModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
      types: [
        { name: 'custom', component: FormlyFieldCustomInput, wrappers: ['form-field'] },
      ],
    }),
  ],
  declarations: [
    AppComponent,
    FormlyFieldCustomInput,
  ],
})
export class AppModule { }
