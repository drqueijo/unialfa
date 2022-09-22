package com.example.imcapplication;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    EditText peso, altura;
    Button calcular;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);

        peso = findViewById(R.id.peso);
        altura = findViewById(R.id.altura);
        calcular = findViewById(R.id.calcular);


        calcular.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                imc();
            }
        });
    }

    private void imc() {

        if (peso.getText().toString().trim().equals("") &&
                altura.getText().toString().trim().equals("")) {

            msg("Atenção!","Os campos vazios!");

        } else if (peso.getText().toString().trim().equals("")) {

            msg("Atenção!","O campo peso está vazio");

        } else if (altura.getText().toString().trim().equals("")) {

            msg("Atenção!","O campo altura está vazio");

        } else {

            double valorPeso = Double.parseDouble(peso.getText().toString());

            double valorAltura = Double.parseDouble(altura.getText().toString());

            double calcular = valorPeso / (valorAltura * valorAltura);

            if (calcular <= 18.5) {
                msg("Resultado", "Magreza");
            } else if (calcular >= 18.5 && calcular < 24.9) {
                msg("Resultado", "Normal");
            } else if (calcular >= 25.0 && calcular < 29.9) {
                msg("Resultado", "Sobrepeso");
            } else if (calcular >= 30.0 && calcular < 39.9) {
                msg("Resultado", "Obesidade");
            } else {
                msg("Resultado", "Obesidade Grave");
            }
        }
    }

    private void msg( String mensagem, String texto) {
        Toast.makeText(this, texto, Toast.LENGTH_LONG).show();
        AlertDialog.Builder alerta = new AlertDialog.Builder(this);
        alerta.setTitle(mensagem);
        alerta.setMessage(texto);
        alerta.setNeutralButton("Confirm", null);
        alerta.show();
    }
}