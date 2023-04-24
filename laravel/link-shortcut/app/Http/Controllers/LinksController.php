<?php

namespace App\Http\Controllers;
use App\Models\Link;
use Illuminate\Http\Request;

class LinksController extends Controller
{
    public function index()
    {
        $links = Link::get();
        return view('links.index', [
            'links' => $links
        ]);
    }

    public function create()
    {
        return view('links.create');
    }

    

    public function store(Request $req)
    {
        $dados = $req->except('_token');
        Link::create($dados);
        return redirect('/links');
    }
}
