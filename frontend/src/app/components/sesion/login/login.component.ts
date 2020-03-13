import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Mimodelo } from 'src/app/modelos/mimodelo';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { FormBuilder, FormGroup } from '@angular/forms';

// Login redes sociales
import { AuthService } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;
  public users: Mimodelo;

  // Login socials
  private user: SocialUser;
  private loggedIn: boolean;

  constructor(private router: Router, private formBuilder: FormBuilder, private modelo: UsuariosService, private authService: AuthService) {
    this.formLogin = formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  ngOnInit() {

  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      this.loggedIn = (user != null);
      this.user = user;
      console.log(this.user);
      this.modelo.existeEmail(this.user.email).subscribe(
        res => {
          console.log(res);
          console.log(res[0]);
          console.log(res[1]);

          if (res[0] === false) {
            this.router.navigate(['/login']);
            alert('NECESARIO REGISTRO');

          } else {
            const datos = {
              email: this.user.email,
              accessToken: user.authToken
            };
            this.modelo.updateToken(datos).subscribe(
              resu => {
                console.log('res:', resu);
                if (resu) {
                  localStorage.setItem('token', datos.accessToken);
                  localStorage.setItem('id', res[1]);
                  this.router.navigate(['/perfil']);
                }

              },
              err => {
                console.log(err);
              }
            );
          }
        },
        err => {
          console.log(err);
        }
      );
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      this.loggedIn = (user != null);
      this.user = user;
      console.log(this.user);
      this.modelo.existeEmail(this.user.email).subscribe(
        res => {
          if (res[0] === false) {
            this.router.navigate(['/login']);
            console.log('NECESARIO REGISTRO');
          } else {
            const datos = {
              email: this.user.email,
              accessToken: user.authToken
            };
            this.modelo.updateToken(datos).subscribe(
              resu => {
                console.log('res:', resu);
                if (resu) {
                  localStorage.setItem('token', datos.accessToken);
                  localStorage.setItem('id', res[1]);
                  this.router.navigate(['/perfil']);
                }

              },
              err => {
                console.log(err);
              }
            );
          }
        },
        err => {
          console.log(err);
        }
      );
    });
  }

  signOut(): void {
    this.authService.signOut();
  }

  submit() {
    this.modelo.getLogin(this.formLogin.value).subscribe(
      res => {
        console.log(res);

        if (!res[0]) {
          this.router.navigate(['/login']);
        } else {
          localStorage.setItem('token', res[0]);
          localStorage.setItem('id', res[1].id);
          this.router.navigate(['/perfil']);
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  get email() {
    return this.formLogin.get('email');
  }

  get password() {
    return this.formLogin.get('password');
  }
}
