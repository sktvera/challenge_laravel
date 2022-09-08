<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\product;  /*import model product*/
use Illuminate\Http\Request;


class ProductController extends Controller
{
    
    //returns the products
    public function index() 
    {
        $products = Product::all();
        return $products;
    }

    //save the products
    public function store(Request $request)
    {
        $product = new Product();
        $product->description = $request->description;
        $product->price = $request->price;
        $product->stock = $request->stock;

        $product->save();
    }

    //save the product id
    public function show($id)
    {
        $product = Product::find($id);
        return $product;
    }

   //capture data log to update
    public function update(Request $request, $id)
    {
        $product = Product::findOrFail($request->id);
        $product->description = $request->description;
        $product->price = $request->price;
        $product->stock = $request->stock;

        $product->save();
        return $product;
    }

    //delete product
    public function destroy($id)
    {
        $product = Product::destroy($id);
        return $product;
    }
}
