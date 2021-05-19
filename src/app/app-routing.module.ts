import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AyurvedhaComponent } from './ayurvedha/ayurvedha.component';
import { HomeComponent } from './home/home.component';
import { SiddhaComponent } from './siddha/siddha.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ThippiliComponent } from './siddha/thippili/thippili.component';
import { SaraswatarishtaComponent } from './siddha/saraswatarishta/saraswatarishta.component';
import { LauhasavaComponent } from './siddha/lauhasava/lauhasava.component';
import { GandhakaComponent } from './siddha/gandhaka/gandhaka.component';
import { DashamuulaarishttamComponent } from './siddha/dashamuulaarishttam/dashamuulaarishttam.component';
import { AswagandhaComponent } from './siddha/aswagandha/aswagandha.component';
import { AshokarishtaComponent } from './siddha/ashokarishta/ashokarishta.component';
import { AbayaristamComponent } from './siddha/abayaristam/abayaristam.component';
import { KadukkaiComponent } from './ayurvedha/kadukkai/kadukkai.component';
import { AthimathuramComponent } from './ayurvedha/athimathuram/athimathuram.component';
import { KalkaraichiComponent } from './ayurvedha/kalkaraichi/kalkaraichi.component';
import { NeerkovaiComponent } from './ayurvedha/neerkovai/neerkovai.component';
import { PonnavaraiComponent } from './ayurvedha/ponnavarai/ponnavarai.component';
import { ThaaleesaadhiComponent } from './ayurvedha/thaaleesaadhi/thaaleesaadhi.component';
import { VallaraiComponent } from './ayurvedha/vallarai/vallarai.component';
import { VilvamComponent } from './ayurvedha/vilvam/vilvam.component';
import { DryfruitsComponent } from './dryfruits/dryfruits.component';
import { CashewnutComponent } from './dryfruits/cashewnut/cashewnut.component';
import { AlmondComponent } from './dryfruits/almond/almond.component';
import { BlackraisinComponent } from './dryfruits/blackraisin/blackraisin.component';
import { DatesComponent } from './dryfruits/dates/dates.component';
import { FigfruitComponent } from './dryfruits/figfruit/figfruit.component';
import { PistaComponent } from './dryfruits/pista/pista.component';
import { WalnutComponent } from './dryfruits/walnut/walnut.component';
import { RaisinsComponent } from './dryfruits/raisins/raisins.component';
import { AuthComponent } from './auth/auth.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { AdminComponent } from './admin/admin.component';
import { AdmindetailsComponent } from './admindetails/admindetails.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'siddha',component:SiddhaComponent},
  {path:'siddha/thippili',component:ThippiliComponent},
  {path:'siddha/saraswatarishta',component:SaraswatarishtaComponent},
  {path:'siddha/lauhasava',component:LauhasavaComponent},
  {path:'siddha/gandhaka',component:GandhakaComponent},
  {path:'siddha/dashamuulaarishttam',component:DashamuulaarishttamComponent},
  {path:'siddha/aswagandha',component:AswagandhaComponent},
  {path:'siddha/ashokarishta',component:AshokarishtaComponent},
  {path:'siddha/abayaristam',component:AbayaristamComponent},
  {path:'ayurvedha/athimathuram',component:AthimathuramComponent},
  {path:'ayurvedha/kadukkai',component:KadukkaiComponent},
  {path:'ayurvedha/kalkaraichi',component:KalkaraichiComponent},
  {path:'ayurvedha/neerkovai',component:NeerkovaiComponent},
  {path:'ayurvedha/ponnavarai',component:PonnavaraiComponent},
  {path:'ayurvedha/thaaleesaadhi',component:ThaaleesaadhiComponent},
  {path:'ayurvedha/vallarai',component:VallaraiComponent},
  {path:'ayurvedha/vilvam',component:VilvamComponent},
  {path:'ayurvedha',component:AyurvedhaComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'dryfruits',component:DryfruitsComponent},
  {path:'dryfruits/almond',component:AlmondComponent},
  {path:'dryfruits/blackraisin',component:BlackraisinComponent},
  {path:'dryfruits/cashewnut',component:CashewnutComponent},
  {path:'dryfruits/dates',component:DatesComponent},
  {path:'dryfruits/figfruit',component:FigfruitComponent},
  {path:'dryfruits/pista',component:PistaComponent},
  {path:'dryfruits/raisins',component:RaisinsComponent},
  {path:'dryfruits/walnut',component:WalnutComponent},
  {path:'auth',component:AuthComponent},
  {path:'order',component:OrderComponent},
  {path:'cart',component:CartComponent},
  {path:'admin',component:AdminComponent},
  {path:'admindetails',component:AdmindetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
