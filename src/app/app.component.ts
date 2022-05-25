import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { noUndefined } from '@angular/compiler/src/util';
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { 
        this.registerForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

     // convenience getter for easy access to form fields
     get f() { return this.registerForm.controls; }

     onSubmit() {
         this.submitted = true;
         if (this.registerForm.invalid){
             return;
         }
         console.log("data", this.registerForm.value);
     }
}
