var enviado = document.getElementById("enviar");
var resultado = document.getElementById("resultado");
enviado.addEventListener("click", recibirEfectivo);

var dinero = 0;
var papeles = 0;
var div = 0;

class Billetes
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
  }
}
  var caja = [];
  caja.push(new Billetes(50, 100))
  caja.push(new Billetes(20, 100))
  caja.push(new Billetes(10, 100))

  var entregado = []
  entregado.push(new Billetes(this.valor, this.cantidad));

  function recibirEfectivo()
  {
    var numero = document.getElementById("solicitud");
    var dinero = parseInt(numero.value);
    for (b of caja)
    {
      if (dinero > 0)
      {
        div = Math.floor(dinero / b.valor);

        if (div > b.cantidad)
        {
          papeles = b.cantidad;
        }
        else
        {
          papeles = div;
        }
        entregado.push(new Billetes(b.valor, papeles));
        dinero = dinero - (b.valor * papeles);
      }
    }

      if (dinero > 0)
      {
        resultado.innerHTML = "¿qué onda?";
      }
      else
      {
        for (e of entregado)
        {
          if (e.cantidad > 0)
          {
            resultado.innerHTML += e. cantidad + " billetes de $"  + e.valor + " <br />";
          }
        }
      }
  }
