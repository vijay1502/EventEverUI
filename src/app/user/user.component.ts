import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit,AfterViewInit{
  
  signUpForm!: FormGroup;
  signInForm!: FormGroup;
  isSignUpMode: boolean = false;
  constructor(private fb: FormBuilder,
    private router: Router
  ) {}
  //   @ViewChild('signUpBtn') signUpBtn!: ElementRef<HTMLButtonElement>;
  // @ViewChild('signInBtn') signInBtn!: ElementRef<HTMLButtonElement>;
  // @ViewChild('container') container!: ElementRef<HTMLDivElement>;
  
  ngAfterViewInit(): void {
    // this.signUpBtn.nativeElement.addEventListener('click', () => {
    //   this.container.nativeElement.classList.add('right-panel-active');
    // });

    // this.signInBtn.nativeElement.addEventListener('click', () => {
    //   this.container.nativeElement.classList.remove('right-panel-active');
    // });
  }

   switchToSignUp(): void {
    this.isSignUpMode = true;
  }

  switchToSignIn(): void {
    this.isSignUpMode = false;
  }
    

  ngOnInit(): void {
     this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSignUpSubmit(): void {
    if (this.signUpForm.valid) {
      console.log('Sign Up Data:', this.signUpForm.value);
      
    }
  }

  onSignInSubmit(): void {
    if (this.signInForm.valid) {
      console.log('Sign In Data:', this.signInForm.value);
      this.router.navigate(['/home']);
    }
  }
}