import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JkafkaSharedModule } from 'app/shared/shared.module';
import { JkafkaCoreModule } from 'app/core/core.module';
import { JkafkaAppRoutingModule } from './app-routing.module';
import { JkafkaHomeModule } from './home/home.module';
import { JkafkaEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JkafkaSharedModule,
    JkafkaCoreModule,
    JkafkaHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JkafkaEntityModule,
    JkafkaAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class JkafkaAppModule {}
