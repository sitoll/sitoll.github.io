<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Styles -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" >
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" ></script>

    </head>
    <body>
        <div class="container">
            <table class="table">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">Provinsi</th>
                        <th scope="col">Positif</th>
                        <th scope="col">Sembuh</th>
                        <th scope="col">Meninggal</th>
                      </tr>
                    </thead>
                    <tbody>
                    @foreach ($data as $datas)   
                      <tr>
                        <th scope="row">1</th>
                        <td>{{ $datas['attributes']['Provinsi'] }}</td>
                        <td>{{ $datas['attributes']['Kasus_Posi'] }}</td>
                        <td>{{ $datas['attributes']['Kasus_Semb'] }}</td>
                        <td>{{ $datas['attributes']['Kasus_Meni'] }}</td>
                      </tr>
                    @endforeach 
                    </tbody>
                  </table>
         </div>
    </body>
</html>
