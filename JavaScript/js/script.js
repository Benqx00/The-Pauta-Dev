    let count = 0;
    const contador = (event) => {
        event.preventDefault();
        document.getElementById('contador').innerHTML = count;
    }

    const ex01zerar = () => {
        count = 0;
        contador(event);
    }

    const ex01menos = () => {
        count--;
        contador(event);
    }

    const ex01mais = () => {
        count++;
        contador(event);
    }

    atualizarSeletor = (event) => {
        event.preventDefault();
        let color = document.getElementById('color02').value;
        let text = "Cor Atual: " + color
        document.getElementById("colorExib").innerHTML = text;
        document.getElementById("colorpreview").style.backgroundColor = color
    }

    const somar = (event) => {
        let num1 = Number(document.getElementById('num1').value)
        let num2 = Number(document.getElementById('num2').value)

        
        let result = num1 + num2;

        document.getElementById('resultado').innerHTML = "Resultado: " + result
    }
    const subtrair = (event) => {
        let num1 = Number(document.getElementById('num1').value)
        let num2 = Number(document.getElementById('num2').value)

        
        let result = num1 - num2;

        document.getElementById('resultado').innerHTML = "Resultado: " + result
    }
    const dividir = (event) => {
        let num1 = Number(document.getElementById('num1').value)
        let num2 = Number(document.getElementById('num2').value)

        
        let result = num1 / num2;
        if (num2 == 0) {
            alert("Você não pode dividir um número por 0!")
            return
        }
        document.getElementById('resultado').innerHTML = "Resultado: " + result
    }
    const multiplicar = (event) => {
        let num1 = Number(document.getElementById('num1').value)
        let num2 = Number(document.getElementById('num2').value)

        
        let result = num1 * num2;

        document.getElementById('resultado').innerHTML = "Resultado: " + result
    }