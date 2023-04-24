@extends('layout')

@section('cabecalho')
  Criar series
@endsection

@section('conteudo')
  <form action="{{route('series.store')}}" method="POST">
    @csrf
    <div class="form-group">
      <div class="mb-3">
        <label for="name" class="form-label">Nome</label>
        <input type="text" class="form-control" id="name" name="name" aria-describedby="name">
      </div>
      <button type="submit" class="btn btn-primary">Criar</button>
    </div>
  </form>
@endsection