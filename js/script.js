
let palavraSecretaCategoria;
let palavraSecretaSorteada;
let listaDinamica = [];
let tentativas = 6;

const palavras = [
    palavra001={
        nome: "IRLANDA",
        categoria: "LUGARES"
    },
    palavra002={
        nome: "EQUADOR",
        categoria: "LUGARES"
    },
    palavra003={
        nome: "CHILE",
        categoria: "LUGARES"
    },
    palavra004={
        nome: "INDONESIA",
        categoria: "LUGARES"
    },
    palavra005={
        nome: "MALDIVAS",
        categoria: "LUGARES"
    },
    palavra006={
        nome: "INGLATERRA",
        categoria: "LUGARES"
    },
    palavra007={
        nome: "GROENLANDIA",
        categoria: "LUGARES"
    },
    palavra008={
        nome: "UZBEQUISTAO",
        categoria: "LUGARES"
    },
    palavra009={
        nome: "CRACOVIA",
        categoria: "LUGARES"
    },
    palavra010={
        nome: "CROACIA",
        categoria: "LUGARES"
    },
    palavra011={
        nome: "ZIMBABUE",
        categoria: "LUGARES"
    },
    palavra012={
        nome: "BICICLETA",
        categoria: "TRANSPORTE"
    },
    palavra013={
        nome: "LANCHA",
        categoria: "TRANSPORTE"
    },
    palavra014={
        nome: "NAVIO",
        categoria: "TRANSPORTE"
    },
    palavra015={
        nome: "TELEFERICO",
        categoria: "TRANSPORTE"
    },
    palavra016={
        nome: "MOTOCICLETA",
        categoria: "TRANSPORTE"
    },
    palavra017={
        nome: "BARCO",
        categoria: "TRANSPORTE"
    },
    palavra018={
        nome: "TREM",
        categoria: "TRANSPORTE"
    },
    palavra019={
        nome: "CAIAQUE",
        categoria: "TRANSPORTE"
    },
    palavra020={
        nome: "AVIAO",
        categoria: "TRANSPORTE"
    },
    palavra021={
        nome: "AUTOMOVEL",
        categoria: "TRANSPORTE"
    },
    palavra022={
        nome: "ONIBUS",
        categoria: "TRANSPORTE"
    },
    palavra023={
        nome: "SINO",
        categoria: "OBJETOS"
    },
    palavra024={
        nome: "CD",
        categoria: "OBJETOS"
    },
    palavra025={
        nome: "CHUVEIRO",
        categoria: "OBJETOS"
    },
    palavra026={
        nome: "TAMBOR",
        categoria: "OBJETOS"
    },
    palavra027={
        nome: "LAMPADA",
        categoria: "OBJETOS"
    },
    palavra028={
        nome: "SOQUETE",
        categoria: "OBJETOS"
    },
    palavra029={
        nome: "CORTINA",
        categoria: "OBJETOS"
    },
    palavra030={
        nome: "LAPIS",
        categoria: "OBJETOS"
    },
    palavra031={
        nome: "PORTA",
        categoria: "OBJETOS"
    },
    palavra032={
        nome: "CADEIRA",
        categoria: "OBJETOS"
    },
    palavra033={
        nome: "LOUSA",
        categoria: "OBJETOS"
    },
    palavra034={
        nome: "JAQUETA",
        categoria: "OBJETOS"
    },
    palavra035={
        nome: "POTE",
        categoria: "OBJETOS"
    },
    palavra036={
        nome: "MELANCIA",
        categoria: "ALIMENTOS"
    },
    palavra037={
        nome: "AMENDOIM",
        categoria: "ALIMENTOS"
    },    
    palavra038={
        nome: "ESFIRRA",
        categoria: "ALIMENTOS"
    },
    palavra039={
        nome: "PIZZA",
        categoria: "ALIMENTOS"
    },
    palavra040={
        nome: "PARMEGIANA",
        categoria: "ALIMENTOS"
    },
    palavra041={
        nome: "BISNAGUINHA",
        categoria: "ALIMENTOS"
    },
    palavra042={
        nome: "FEIJAO",
        categoria: "ALIMENTOS"
    },
    palavra043={
        nome: "FEIJOADA",
        categoria: "ALIMENTOS"
    },
    palavra044={
        nome: "MANDIOCA",
        categoria: "ALIMENTOS"
    },
    palavra045={
        nome: "TAPIOCA",
        categoria: "ALIMENTOS"
    },
    palavra046={
        nome: "RISOTO",
        categoria: "ALIMENTOS"
    },
    palavra047={
        nome: "TAMARA",
        categoria: "ALIMENTOS"
    },
    palavra048={
        nome: "DRAGAO",
        categoria: "ANIMAIS"
    },
    palavra049={
        nome: "GALINHA",
        categoria: "ANIMAIS"
    },
    palavra050={
        nome: "PAVAO",
        categoria: "ANIMAIS"
    },
    palavra051={
        nome: "CAMELO",
        categoria: "ANIMAIS"
    },
    palavra052={
        nome: "ZEBRA",
        categoria: "ANIMAIS"
    },
    palavra053={
        nome: "CALANGO",
        categoria: "ANIMAIS"
    },
    palavra054={
        nome: "DROMEDARIO",
        categoria: "ANIMAIS"
    },
    palavra055={
        nome: "LAGARTIXA",
        categoria: "ANIMAIS"
    },
    palavra056={
        nome: "HIPOPOTAMO",
        categoria: "ANIMAIS"
    },
    palavra057={
        nome: "SAGUI",
        categoria: "ANIMAIS"
    },    
    palavra058={
        nome: "CARANGUEIJO",
        categoria: "ANIMAIS"
    },    
    palavra059={
        nome: "EMA",
        categoria: "ANIMAIS"
    },    
    palavra060={
        nome: "JIBOIA",
        categoria: "ANIMAIS"
    },
    palavra061={
        nome: "A ERA DO GELO",
        categoria: "TV E CINEMA"
    },
    palavra062={
        nome: "HOMEM ARANHA",
        categoria: "TV E CINEMA"
    },
    palavra063={
        nome: "CASA MONSTRO",
        categoria: "TV E CINEMA"
    },
    palavra064={
        nome: "STRANGER THINGS",
        categoria: "TV E CINEMA"
    },
    palavra065={
        nome: "O REI DO GADO",
        categoria: "TV E CINEMA"
    },
    palavra066={
        nome: "MULHER MARAVILHA",
        categoria: "TV E CINEMA"
    },
    palavra067={
        nome: "O INCRIVEL HULK",
        categoria: "TV E CINEMA"
    },
    palavra068={
        nome: "BOB ESPONJA",
        categoria: "TV E CINEMA"
    },
    palavra069={
        nome: "SENHORA DO DESTINO",
        categoria: "TV E CINEMA"
    },
    palavra070={
        nome: "SENHOR DOS ANEIS",
        categoria: "TV E CINEMA"
    },
    palavra071={
        nome: "PEAKY BLINDERS",
        categoria: "TV E CINEMA"
    },
    palavra072={
        nome: "VINGADORES",
        categoria: "TV E CINEMA"
    },
    palavra073={
        nome: "BROOKLYN NINE NINE",
        categoria: "TV E CINEMA"
    },
    palavra074={
        nome: "VELOZES E FURIOSOS",
        categoria: "TV E CINEMA"
    },
    palavra075={
        nome: "THE WITCHER",
        categoria: "TV E CINEMA"
    },
    palavra076={
        nome: "ADELE",
        categoria: "MÚSICA"
    },
    palavra077={
        nome: "BEYONCE",
        categoria: "MÚSICA"
    },
    palavra078={
        nome: "BILLIE EILISH",
        categoria: "MÚSICA"
    },
    palavra079={
        nome: "ANITA",
        categoria: "MÚSICA"
    },
    palavra080={
        nome: "LEGIAO URBANA",
        categoria: "MÚSICA"
    },
    palavra081={
        nome: "TITAS",
        categoria: "MÚSICA"
    },
    palavra082={
        nome: "OS MUTANTES",
        categoria: "MÚSICA"
    },
    palavra083={
        nome: "SEPULTURA",
        categoria: "MÚSICA"
    },
    palavra084={
        nome: "ROLLING STONES",
        categoria: "MÚSICA"
    },
    palavra085={
        nome: "ELVIS PRESLEY",
        categoria: "MÚSICA"
    },
    palavra086={
        nome: "AEROSMITH",
        categoria: "MÚSICA"
    },
    palavra087={
        nome: "PEARL JAM",
        categoria: "MÚSICA"
    },
    palavra088={
        nome: "FOO FIGHTERS",
        categoria: "MÚSICA"
    },
    palavra089={
        nome: "QUEEN",
        categoria: "MÚSICA"
    },
    palavra090={
        nome: "DEATH NOTE",
        categoria: "DESENHOS E ANIMES"
    },
    palavra091={
        nome: "DRAGON BALL",
        categoria: "DESENHOS E ANIMES"
    },
    palavra092={
        nome: "NARUTO",
        categoria: "DESENHOS E ANIMES"
    },
    palavra093={
        nome: "POKEMON",
        categoria: "DESENHOS E ANIMES"
    },
    palavra094={
        nome: "JOVENS TITAS",
        categoria: "DESENHOS E ANIMES"
    },
    palavra095={
        nome: "TOM E JERRY",
        categoria: "DESENHOS E ANIMES"
    },
    palavra096={
        nome: "CAVERNA DO DRAGAO",
        categoria: "DESENHOS E ANIMES"
    },
    palavra097={
        nome: "SCOOBY DOO",
        categoria: "DESENHOS E ANIMES"
    },
    palavra098={
        nome: "PICA PAU",
        categoria: "DESENHOS E ANIMES"
    },
    palavra099={
        nome: "FAMILY GUY",
        categoria: "DESENHOS E ANIMES"
    },
    palavra100={
        nome: "OS SIMPSONS",
        categoria: "DESENHOS E ANIMES"
    },
    palavra101={
        nome: "RICK E MORTY",
        categoria: "DESENHOS E ANIMES"
    },
    palavra102={
        nome: "MINECRAFT",
        categoria: "VIDEOGAMES"
    },
    palavra103={
        nome: "FORTNITE",
        categoria: "VIDEOGAMES"
    },
    palavra104={
        nome: "GOD OF WAR",
        categoria: "VIDEOGAMES"
    },
    palavra105={
        nome: "ASSASSINS CREED",
        categoria: "VIDEOGAMES"
    },
    palavra106={
        nome: "THE LAST OF US",
        categoria: "VIDEOGAMES"
    },
    palavra107={
        nome: "SUPER MARIO WORLD",
        categoria: "VIDEOGAMES"
    },
    palavra108={
        nome: "AMONG US",
        categoria: "VIDEOGAMES"
    },
    palavra109={
        nome: "RESIDENT EVIL",
        categoria: "VIDEOGAMES"
    },
    palavra110={
        nome: "MARIO KART",
        categoria: "VIDEOGAMES"
    },
];

criarPalavraSecreta();
function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length);

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
    console.log(indexPalavra);
    console.log(palavraSecretaSorteada);
    console.log(palavraSecretaCategoria);
}

montarPalavraNaTela();
function montarPalavraNaTela() {
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for(i = 0; i < palavraSecretaSorteada.length; i++) {
        if(listaDinamica[i] == undefined) {
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            } else {
                listaDinamica[i] = "&nbsp;"
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }

        } else {
            if (palavraSecretaSorteada[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            } else {      
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }
        }
    }
    console.log(listaDinamica);
}

function verificaLetraEscolhida(letra) {
    document.getElementById("tecla-" + letra).disabled = true;
    if (tentativas > 0) {
        mudarStyleLetra("tecla-" + letra, false);
        comparaListas(letra);
        montarPalavraNaTela();
        
        console.log(tentativas);
    }
}

function mudarStyleLetra(tecla, condicao) {
    if (condicao == false) {
        document.getElementById(tecla).style.background = "#b25";
        document.getElementById(tecla).style.color = "#fff";
    } else {
        document.getElementById(tecla).style.background = "#071";
        document.getElementById(tecla).style.color = "#fff";
    }

}

function comparaListas(letra) {
    const pos = palavraSecretaSorteada.indexOf(letra)
    if (pos < 0) {
        tentativas--;
        carregaImagemForca(); // aparecer imagem //

        if (tentativas == 0) {
            abreModal("OPS!", "Não foi dessa vez... A palavra secreta era:<br>" + palavraSecretaSorteada);
            // verificar se ainda tem tentativas //
        }

    } else {
        mudarStyleLetra("tecla-" + letra, true);
        for (i = 0; i < palavraSecretaSorteada.length; i++) {
            if (palavraSecretaSorteada[i] == letra) {
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for (i = 0; i < palavraSecretaSorteada.length; i++) {
        if (palavraSecretaSorteada[i] != listaDinamica[i]) {
            vitoria = false;
        }
    }

    if (vitoria == true) {
        abreModal("Parabéns!!!", "Você venceu!<br><br>Bora jogar novamente...");
        //mensagem na tela de vitoria //
        tentativas = 0;
    }
}

function carregaImagemForca() {
    switch(tentativas) {
        case 5:
            document.getElementById("imagem").style.background = "url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background = "url('./img/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem) {
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let bntReiniciar = document.querySelector("#btnReiniciar")
bntReiniciar.addEventListener("click", function() {
    location.reload();
});