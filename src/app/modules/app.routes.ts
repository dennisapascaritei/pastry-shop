import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";
import { ProductsComponent } from "../components/products/products.component";
import { ProductDetailsComponent } from "../components/product-details/product-details.component";
import { AddEditProductComponent } from "../components/add-edit-product/add-edit-product.component";
import { LoginComponent } from "../components/login/login.component";
import { RegisterComponent } from "../components/register/register.component";

const routes: Routes = 
    [
        {path: "", component:HomeComponent},
        {path: "home", component:HomeComponent},
        {path: "products", component:ProductsComponent},
        {path: "products/details/:id", component:ProductDetailsComponent},
        // {path: "praj", component:ProdPrajComponent}
        // {path: "plat", component:ProdPlatComponent}
        // {path: "**", component:NotFoundComponent}
        {path: "products/manageProduct", component: AddEditProductComponent},
        {path: "login", component:LoginComponent},
        {path: "register", component:RegisterComponent},
    ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutesModule{}