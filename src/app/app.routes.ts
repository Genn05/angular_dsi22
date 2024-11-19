import { Routes } from '@angular/router';
import { CommandeComponent } from './commande/commande.component';
import { AccueilComponent } from './accueil/accueil.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PanierComponent } from './panier/panier.component';
import { ConnexionComponent } from './connexion/connexion.component';

export const routes: Routes = [
    {path:'commande',component:CommandeComponent},
    {path:'acceuil',component:AccueilComponent},
    {path:'inscription',component:InscriptionComponent},
    {path:'panier',component:PanierComponent},
    {path:'connexion',component:ConnexionComponent},
];
