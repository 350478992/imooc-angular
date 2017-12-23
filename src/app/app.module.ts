import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MenuComponent} from './menu/menu.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {FooterComponent} from './footer/footer.component';
import {ContentComponent} from './content/content.component';
import {StockManageComponent} from './stock/stock-manage/stock-manage.component';
import {StarsComponent} from './stars/stars.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {DashboardComponent} from './dashboard/dashboard.component';
import { StockFormComponent } from './stock/stock-form/stock-form.component';
import {StockService} from "./stock/stock.service";
import { StockFilterPipe } from './stock/stock-filter.pipe';
import {SocketService} from "./header/socket.service";
import { TestAngularComponent } from './test-angular/test-angular.component';
import {APP_BASE_HREF} from "@angular/common";


const routeConfig: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'stock', component: StockManageComponent},
  {path: 'stock/:id', component: StockFormComponent},
  {path: 'test-angular', component: TestAngularComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    StockManageComponent,
    StarsComponent,
    DashboardComponent,
    StockFormComponent,
    StockFilterPipe,
    TestAngularComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [
    StockService,
    SocketService,
    // {provide: APP_BASE_HREF,useValue: '/angular'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
