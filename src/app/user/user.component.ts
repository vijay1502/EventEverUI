import { AfterViewInit, Component, ElementRef, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SIGNIN_BOOL } from '../constants/navigation.constants';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit, AfterViewInit, OnDestroy {

roles = ['Event Creator','Event Organizer','Customer','Venue Owner'];
selectedRole = '';
showSignInForm = false;
animateSlideUp = false;

selectedSignupRole = '';
showSignUpForm = false;
animateSlideUpSignUp = false;
  signUpForm!: FormGroup;
  signInForm!: FormGroup;
  isSignUpMode: boolean = false;
  constructor(private fb: FormBuilder,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

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
    this.onChangeRole();
    this.isSignUpMode = true;
  }

  switchToSignIn(): void {
    this.onChangeRoleSignUp();
    this.isSignUpMode = false;
  }


  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['',Validators.required]
    });

    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });

    if (isPlatformBrowser(this.platformId)) {
      console.log(sessionStorage.getItem(SIGNIN_BOOL))
      if (sessionStorage.getItem(SIGNIN_BOOL) != null || sessionStorage.getItem(SIGNIN_BOOL) != undefined) {
        this.isSignUpMode = JSON.parse(sessionStorage.getItem(SIGNIN_BOOL) || 'false');
      }
    }
  }

  onSignUpSubmit(): void {
    if (this.signUpForm.valid) {
      console.log('Sign Up Data:', this.signUpForm.value);

    }
  }

  onSignInSubmit(): void {
    if (this.signInForm.valid) {
      console.log('Sign In Data:', this.signInForm.value);
      if(this.signInForm.get('email')?.value==='pruthvikrishna97@gmail.com'){
      this.router.navigate(['/home']);
      }else{
        this.router.navigate(['/eventOrganizer']);
      }
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.removeItem(SIGNIN_BOOL);
    }
  }

  onContinue() {
    this.selectedRole =  this.signInForm.get('role')?.value;
  if (this.selectedRole) {
    this.showSignInForm = true;
    this.animateSlideUp= false
  }
}

onContinueSignUp(){
  this.selectedSignupRole= this.signUpForm.get('role')?.value;
  if(this.selectedSignupRole){
    this.showSignUpForm = true;
    this.animateSlideUpSignUp = false;
  }
}

onChangeRoleSignUp(){
   setTimeout(() => {
    this.showSignUpForm = false;
    this.animateSlideUpSignUp = true;
    this.signUpForm.get('role')?.setValue('');
  }, 500); // match animation duration
}

onChangeRole() {
 
  setTimeout(() => {
    this.showSignInForm = false;
    this.animateSlideUp = true;
    this.signInForm.get('role')?.setValue('');
  }, 500); // match animation duration
}

}