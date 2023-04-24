<?php

use App\Http\Controllers\SeriesController;
use Illuminate\Support\Facades\Route;



Route::get('/', function () {
    return view('welcome');
});


Route::get('/series', [SeriesController::class, 'index'])->name('list-series');

Route::get('/series/criar', [SeriesController::class, 'create'])->name('form_criar_serie');

Route::post('/series/criar', [SeriesController::class, 'store'])->name('series.store');
