<!DOCTYPE html>
<html lang="pt-br">

<head>
    <link rel="shortcut icon" href="icon-favicon.ico" type="image/x-icon">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    <link rel="stylesheet" href="CSS.css">
    <title>Calculadora</title>
</head>

<body>

    <div class="container-fluid" id="containerPrincipal">



        <div id="barraTema">

            <div id="barraTema2">


                <h2 id="calcEsquerda" class="corLetra">Calculadora</h2>


                <h4 id="tema" class="corLetra">TEMAS</h4>

                <span id="seletor">
                    <h4 id="tema1" class="corLetra">1</h4>
                    <h4 id="tema2" class="corLetra">2 </h4>
                    <h4 id="tema3" class="corLetra">3</h4>
                </span>
                <div id="botTema">
                    <input class="toggle" type="button" id="pos1">
                    <input class="toogle" type="button" id="pos2">
                    <input class="toggle" type="button" id="pos3">
                </div>
            </div>


            <p id="resultado"></p>
            <div class="content" id="content"></div>
            <div id="pads">

                <div class="row">
                    <div class="col-16" id="valores">
                        <input type="button" value="7" class="imps" id="imps1" onclick="calcNum(7)">
                        <input type="button" value="8" class="imps" id="imps2" onclick="calcNum(8)">
                        <input type="button" value="9" class="imps" id="imps3" onclick="calcNum(9)">
                        <button class="imps" id="impsDell" name="delete" onclick="limpar()"><b>DEL</b></button>
                        <input type="button" value="4" class="imps" id="imps4" onclick="calcNum(4)">
                        <input type="button" value="5" class="imps" id="imps5" onclick="calcNum(5)">
                        <input type="button" value="6" class="imps" id="imps6" onclick="calcNum(6)">
                        <input type="button" value="+" class="imps" id="soma" onclick="calcNum('+')">
                        <input type="button" value="1" class="imps" id="imps8" onclick="calcNum(1)">
                        <input type="button" value="2" class="imps" id="imps9" onclick="calcNum(2)">
                        <input type="button" value="3" class="imps" id="imps10" onclick="calcNum(3)">
                        <input type="button" value="-" class="imps" id="imps11" onclick="calcNum('-')">
                        <input type="button" value="." class="imps" id="imps12" onclick="calcNum('.')">
                        <input type="button" value="0" class="imps" id="imps13" onclick="calcNum(0)">
                        <input type="button" value="/" class="imps" id="imps14" onclick="calcNum('/')">
                        <input type="button" value="x" class="imps" id="imps15" onclick="calcNum('*')">
                        <button class="imps" id="impsReset" name="resetar" onclick="resetar()"><b>RESET</b></button>
                        <input type="button" value="=" class="imps" id="resultadoCalc" name="resultadoCalc"
                            onclick="calculou()">

                    </div>

                </div>

            </div>


        </div>




    </div>
    <script src="JavaScript.js"></script>
</body>

</html>