<?php

use App\Http\Controllers\Api\ProductController; /*import controller */
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//application routes
Route::controller(ProductController::class)->group(function (){
    Route::get('/products', 'index'); //all products
    Route::post('/product', 'store');//save products 
    Route::get('/product/{id}', 'show');// product id
    Route::put('/product/{id}', 'update');//update product id
    Route::delete('/product/{id}', 'destroy'); //delete  product id
});

//Api http://localhost:8000/api/products - http://localhost:8000/api/product - http://localhost:8000/api/product/1