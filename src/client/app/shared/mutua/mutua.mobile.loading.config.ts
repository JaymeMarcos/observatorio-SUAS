
/*******************************************************
** AUTOMATICALLY CREATED MOBILE LOADING CONFIGURATION **
*******************************************************/

// Please, do not edit this file. It is automatically generated by 'build.mutua.ts' task on every build with information present in 'mutua.instance-project.config.ts' and 'mutua.available.modules.and.components.config.ts'

// Included by 'nativescript/.../components.modules.ts' to load the needed components and modules and make them available to the application

// components
/////////////

import { AppComponent } from '../../components/app.component';
import { MPHomeComponent } from '../../components/pages/mp-home/mp-home.component';
import { MPDadosEIndicadoresComponent } from '../../components/pages/mp-dados-e-indicadores/mp-dados-e-indicadores.component';
import { MPInspecoesComponent } from '../../components/pages/mp-inspecoes/mp-inspecoes.component';

export const MutuaExportedComponents: any[] = [AppComponent,MPHomeComponent,MPDadosEIndicadoresComponent,MPInspecoesComponent];

// routes
/////////

import { MPHomeRoutes } from '../../components/pages/mp-home/mp-home.routes';
import { MPDadosEIndicadoresRoutes } from '../../components/pages/mp-dados-e-indicadores/mp-dados-e-indicadores.routes';
import { MPInspecoesRoutes } from '../../components/pages/mp-inspecoes/mp-inspecoes.routes';

export const MutuaExportedRoutes: any[] = [...MPHomeRoutes,...MPDadosEIndicadoresRoutes,...MPInspecoesRoutes];

// modules
//////////


export const MutuaExportedModules: any[] = [];

export const MutuaAppComponent: any = AppComponent;
