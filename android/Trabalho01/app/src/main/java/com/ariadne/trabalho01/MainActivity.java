package com.ariadne.trabalho01;

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
        double valorPeso =
                Double.parseDouble(peso.getText().toString());

        double valorAltura =
                Double.parseDouble(altura.getText().toString());


        double calcular = valorPeso / (valorAltura * valorAltura);

        if (calcular <= 18.5) {
            msg("Resultado", "Abaixo do Peso");
        } else if (calcular >= 18.6 && calcular < 24) {
            msg("Resultado", "Peso ideal");
        } else if (calcular >= 24 && calcular < 35) {
            msg("Resultado", "Acima do Peso");
        }else{
            msg("Resultado", "Obesidade");
        }
    }

    private void msg( String mensagem, String texto) {
        Toast.makeText(this, texto, Toast.LENGTH_LONG).show();
        AlertDialog.Builder alerta = new AlertDialog.Builder(this);
        alerta.setTitle(mensagem);
        alerta.setMessage(texto);
        alerta.setNeutralButton("ok", null);
        alerta.show();
    }
}
