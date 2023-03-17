<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function index()
    {
        $clients = Product::get();
        return view('products.index', [
            'products' => $clients
        ]);
    }
}
