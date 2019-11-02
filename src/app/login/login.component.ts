import { Component, OnInit } from '@angular/core';
import {Socialusers} from '../model/socialusers';
import {AuthService, FacebookLoginProvider, GoogleLoginProvider} from 'angular-6-social-login';
import {SocialloginService} from '../services/sociallogin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  response;
  errorMessage;
  socialusers = new Socialusers();

  constructor(
    public OAuth: AuthService,
    private socialloginService: SocialloginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public socialSignIn(socialProvider: string) {
    const socialPlatformProvider = this.getSocialProvider(socialProvider);
    this.OAuth.signIn(socialPlatformProvider).then(result => {
      console.log('socialProvider--->', socialProvider);
      console.log('result--->', result);
      this.savesResponse(result);
    });
  }

  getSocialProvider(socialProvider: string) {
    if (socialProvider === 'facebook') {
      return FacebookLoginProvider.PROVIDER_ID;
    } else {
      return GoogleLoginProvider.PROVIDER_ID;
    }
  }

  private savesResponse(result: Socialusers) {
      this.socialloginService.saveResponse(result).subscribe((res: any) => {
        console.log('res--->', res);
        this.socialusers = res;
        this.response = res.userDetail;
        localStorage.setItem('socialusers', JSON.stringify(this.socialusers));
        this.router.navigate(['/dashboard']);
      });
  }
}
