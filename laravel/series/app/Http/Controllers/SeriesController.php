<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Serie;
class SeriesController extends Controller
{
    public function index() {
        $series = Serie::get();
        return View('series.index', compact('series'));
    }

    public function create() {
        return view('series.create');
    }

    public function store(Request $req) {
        $dados = $req->except('_token');
        Serie::create($dados);
        return redirect('/series');
    }
}
