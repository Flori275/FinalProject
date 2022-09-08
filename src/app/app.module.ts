import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CouponecodeComponent } from './couponecode/couponecode.component';
import { ShopComponent } from './shop/shop.component';
import { OptionsComponent } from './options/options.component';
import { TextComponent } from './text/text.component';
import { CardsComponent } from './cards/cards.component';
import { SellersComponent } from './sellers/sellers.component';
import { ProductsComponent } from './products/products.component';
import { DisovermoreComponent } from './disovermore/disovermore.component';
import { TextreviewComponent } from './textreview/textreview.component';
import { FooterComponent } from './footer/footer.component';
import { SliderimageComponent } from './sliderimage/sliderimage.component';
import { ShopperComponent } from './shopper/shopper.component';
import { ReviewsComponent } from './reviews/reviews.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavbarComponent,
    CouponecodeComponent,
    ShopComponent,
    OptionsComponent,
    TextComponent,
    CardsComponent,
    SellersComponent,
    ProductsComponent,
    DisovermoreComponent,
    TextreviewComponent,
    FooterComponent,
    SliderimageComponent,
    ShopperComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
