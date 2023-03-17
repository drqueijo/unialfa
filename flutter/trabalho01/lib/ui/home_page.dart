import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  var resultado = 0.0;

  final distanciaController = TextEditingController();
  final precoCombustivelController = TextEditingController();
  final mediaController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Etanol x Gasolina"),
        centerTitle: true,
      ),
      body: Column(
        children: [
          criarCampoTexto("Distancia em KM: ", distanciaController, 'KM: '),
          criarCampoTexto(
              "Preço do combustivel: ", precoCombustivelController, 'R\$:  '),
          criarCampoTexto("Média de consumo: ", mediaController, 'KM/L:  '),
          ElevatedButton(
            onPressed: calcular,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: const [
                Icon(Icons.calculate_outlined),
                Text("Calcular"),
              ],
            ),
          ),
          Text("RESULTADO R\$: $resultado"),
        ],
      ),
    );
  }

  void calcular() {
    double distancia = double.parse(distanciaController.text);
    double gasolina = double.parse(precoCombustivelController.text);
    double media = double.parse(mediaController.text);
    resultado = (distancia * gasolina) / media;

    setState(() {});
  }

  Widget criarCampoTexto(
      String texto, TextEditingController controlador, String prefix) {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: TextField(
        controller: controlador,
        decoration: InputDecoration(
          labelText: texto,
          prefixText: prefix,
          border: const OutlineInputBorder(),
        ),
        keyboardType: TextInputType.number,
      ),
    );
  }
}
