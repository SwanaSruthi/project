import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminComponent } from './admin/admin.component';
import { AdmindetailsComponent } from './admindetails/admindetails.component';
import { AuthComponent } from './auth/auth.component';
import { AyurvedhaComponent } from './ayurvedha/ayurvedha.component';
import { CartComponent } from './cart/cart.component';
import { DryfruitsComponent } from './dryfruits/dryfruits.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { SiddhaComponent } from './siddha/siddha.component';
import { AthimathuramComponent } from './ayurvedha/athimathuram/athimathuram.component';
import { KadukkaiComponent } from './ayurvedha/kadukkai/kadukkai.component';
import { NeerkovaiComponent } from './ayurvedha/neerkovai/neerkovai.component';
import { PonnavaraiComponent } from './ayurvedha/ponnavarai/ponnavarai.component';
import { ThaaleesaadhiComponent } from './ayurvedha/thaaleesaadhi/thaaleesaadhi.component';
import { VallaraiComponent } from './ayurvedha/vallarai/vallarai.component';
import { VilvamComponent } from './ayurvedha/vilvam/vilvam.component';
import { AbayaristamComponent } from './siddha/abayaristam/abayaristam.component';
import { AshokarishtaComponent } from './siddha/ashokarishta/ashokarishta.component';
import { AswagandhaComponent } from './siddha/aswagandha/aswagandha.component';
import { DashamuulaarishttamComponent } from './siddha/dashamuulaarishttam/dashamuulaarishttam.component';
import { GandhakaComponent } from './siddha/gandhaka/gandhaka.component';
import { LauhasavaComponent } from './siddha/lauhasava/lauhasava.component';
import { SaraswatarishtaComponent } from './siddha/saraswatarishta/saraswatarishta.component';
import { ThippiliComponent } from './siddha/thippili/thippili.component';
import { AlmondComponent } from './dryfruits/almond/almond.component';
import { BlackraisinComponent } from './dryfruits/blackraisin/blackraisin.component';
import { CashewnutComponent } from './dryfruits/cashewnut/cashewnut.component';
import { DatesComponent } from './dryfruits/dates/dates.component';
import { FigfruitComponent } from './dryfruits/figfruit/figfruit.component';
import { PistaComponent } from './dryfruits/pista/pista.component';
import { RaisinsComponent } from './dryfruits/raisins/raisins.component';
import { WalnutComponent } from './dryfruits/walnut/walnut.component';
import { KalkaraichiComponent } from './ayurvedha/kalkaraichi/kalkaraichi.component';
import { HerbalComponent } from './herbal/herbal.component';
import { JathikaiComponent } from './herbal/jathikai/jathikai.component';
import { GreenteaComponent } from './herbal/greentea/greentea.component';
import { KabasuramComponent } from './herbal/kabasuram/kabasuram.component';
import { KarpuravalliComponent } from './herbal/karpuravalli/karpuravalli.component';
import { KuppaimeniComponent } from './herbal/kuppaimeni/kuppaimeni.component';
import { NilavembuComponent } from './herbal/nilavembu/nilavembu.component';
import { SakkaraiComponent } from './herbal/sakkarai/sakkarai.component';
import { TriphalaComponent } from './herbal/triphala/triphala.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    AdminComponent,
    AdmindetailsComponent,
    AuthComponent,
    AyurvedhaComponent,
    CartComponent,
    DryfruitsComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    OrderComponent,
    SiddhaComponent,
    AthimathuramComponent,
    KadukkaiComponent,
    NeerkovaiComponent,
    PonnavaraiComponent,
    ThaaleesaadhiComponent,
    VallaraiComponent,
    VilvamComponent,
    AbayaristamComponent,
    AswagandhaComponent,
    DashamuulaarishttamComponent,
    GandhakaComponent,
    LauhasavaComponent,
    SaraswatarishtaComponent,
    ThippiliComponent,
    AlmondComponent,
    BlackraisinComponent,
    CashewnutComponent,
    DatesComponent,
    FigfruitComponent,
    PistaComponent,
    RaisinsComponent,
    WalnutComponent,
    KalkaraichiComponent,
    AshokarishtaComponent,
    HerbalComponent,
    JathikaiComponent,
    GreenteaComponent,
    KabasuramComponent,
    KarpuravalliComponent,
    KuppaimeniComponent,
    NilavembuComponent,
    SakkaraiComponent,
    TriphalaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
