<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  </head>
  <body>
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
      </div>
    </nav>
    <div class="container">
      <h1>Lista de links</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Link completo</th>
            <th scope="col">Link encurtado</th>
            <th scope="col">status</th>
          </tr>
        </thead>
        <tbody>
          @foreach ($links as $link)
          <tr>
            <th scope="col">{{$link->id}}</th>
            <th scope="col">{{$link->full_link}}</th>
            <th scope="col">
              <a href={{$link->short_link}} target="_blank">
                {{$link->short_link}}
              </a>
            </th>
            @if($link->status == 1)
              <th scope="col">Ativo</th>
            @else
              <th scope="col">Inativo</th>
            @endif
          </tr>
        @endforeach
        </tbody>
      </table>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
  </body>
</html>