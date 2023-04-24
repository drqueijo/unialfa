<?php

use App\Http\Controllers\LinksController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/links', [LinksController::class, 'index'])->name('links.index');

Route::get('/links/create', [LinksController::class, 'create'])->name('links.create');

Route::post('/links/create', [LinksController::class, 'store'])->name('links.store');
