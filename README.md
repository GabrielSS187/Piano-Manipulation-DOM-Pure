<h1 align="center">Manipulando a DOM Puramente</h1>

<br/>

<img src="img\html-css-js.jpg"/>

<br/>

## Link do Projeto Piano : [Aqui](https://piano-dom-js.surge.sh/)

## Link do Video : [Manipulação de DOM com JavaScript, do zero, na prática](https://www.youtube.com/watch?v=UftSB4DaRU4&ab_channel=Rocketseat)

## Sites mais detalhados : [Khan Academy](https://pt.khanacademy.org/computing/computer-programming/html-css-js/html-js-dom-access/a/summary-dom-access-methods), [Broga](https://emersonbroga.com/manipulando-dom-com-textcontent-innertext-e-innerhtml/), [Como modificar atributos, classes e estilos no DOM](https://www.digitalocean.com/community/tutorials/how-to-modify-attributes-classes-and-styles-in-the-dom-pt)

<br/>

# Anotações dos Estudos de Manipulação do DOM puro

<br/>

# 1 -  Document Object Model ( Modelo de objeto de documento )

#### O Document Object Model ou simplesmente DOM é utilizado pelo navegador Web para representar a sua página Web. Quando altera-se esse modelo com o uso do Javascript altera-se também a página Web. É muito mais fácil trabalhar com DOM do que diretamente com código HTML ou CSS.

#### Um dos grandes responsáveis por isso tudo é o objeto document que é responsável por conceder ao código Javascript todo o acesso a árvore DOM do navegador Web. Portanto, qualquer coisa criado pelo navegador Web no modelo da página Web poderá ser acessado através do objeto Javascript document.

<br />

# 2 - Propriedades

<br />

- **.documentElement** : Captura o elemento raiz **html** de um documento HTML.

- **.getElementById** : Busca um elemento da página Web com o uso do atributo id do elemento.

- **.createElement** : Cria um nodo elemento na página.

- **.createAttribute** : Cria um nodo atributo na página.

- **.createTextNode** : Cria um nodo texto na página.

- **.getElementsByTagName** : Retorna um array dos elementos com o mesmo nome.

- **.appendChild** : Insere um novo elemento filho.

- **.removeChild** : Remove um elemento filho.

- **.parentNode** : Retorna o nodo pai de um nodo.

## As propriedades mais usadas e aconselhadas :

<br/>

- **.querySelector** : exemplo : .querySelector(".example") : O método querySelector() retorna o primeiro elemento filho que corresponde a um seletor CSS especificado de um elemento.

- ***Observação***: o método querySelector() retorna apenas o primeiro elemento que corresponde aos seletores especificados. Funciona igual ao CSS. quando precisamos de um classe para editar.

<br/>

- **.querySelectorAll** : Exemplo : .querySelectorAll(".example") :  O método querySelectorAll() retorna uma coleção de elementos filho de um elemento que correspondem a um seletor CSS especificado, como um objeto NodeList estático.
Um NodeList é uma coleção (lista) semelhante a um array de Node Objects . Da para si um usar o ( foEach ) para manipula-lo.

<br/><br/>

# 3 - Segue abaixo um exemplo de uma árvore DOM de uma página Web. Pode-se notar que todos os elementos da página Web estão disponíveis para serem manipulados.

<img src="img\DocumentObjectLanguage01.jpg">

<br/>

# 4 - Manipulando a DOM

<br/>

- **innerHTML** : Esse com certeza é o mais utilizado para manipulação de DOM, pois existe a mais tempo, mas existem algumas peculiaridades que devemos ficar atentos.
Como se é de esperar, quando usamos o innerHTML ele irá retornar todo o texto e o html que existem no elemento.

- **innerText** : Quando usamos o innerText, diferentemente do innerHTML, irá retornar apenas o texto, ignorando todas as tags HTML de dentro do elemento, porém innerText “entende” o CSS do elemento, então retornará apenas textos visíveis.

- **textContent** : O textContent, funciona de forma parecida com o innerText, retornando somente o texto e ignorando as tags HTML, mas o textContent trás todo o conteúdo do texto, incluindo o texto oculto pelo css assim como as quebras de linha (\\n).

<br/>

# 5 - Alterando Estilos

- **style.propriedade(camelCase)** : Exemplo : const div = document..getElementsByTagName("div")  **div.style.backgroundColor** = "black"

<br/>

# 6 - Formas de Navegação pelos Elementos

<br/>

## 1° Forma : Parents

- **.parentNode** : Serve para navegar por elementos. Exemplo : **div.parentNode.innerHTML = "aloowww"**

- **.parentElement** : Fuciona igual a o primeiro.


<br/>

## 2° Forma : Children

- **.children** : Serve para acessar elementos filhos. Ele pega o HTML Colections dai você selecionar qual elemento quer. exemplo : **div.children[0].style.backgroundColor = "pink"**. Isso significa que eu estou acessando o primeiro filho da posição 1 e o estilizando.

- **.childNodes** : Ele pega o nodeList incluindo os espaços também. Apartir dai você pode trabalhar com os elementos que tem dentro dele. como por exemplo :

- **ul.childNodes** // Retorna por exemplo : os (5) elementos que tem dentro da ul.

- **ul.childNodes.length** // Retorna á quantidade de elementos (5)
- **ul.childElementCoun**t // Faz o mesmo que o de cima (5)
- **ul.firstChild** // Pega o primeiro filho (div)
- **ul.lastChild** // Pega o ultimo elemento (div.ultimo)
- **ul.remove()** // Remove o elemento

<br/>

# 7 - Siblings : Trabalhando com os irmãos

### Eu quero descobrir qual e o proximo irmão do "frame" então eu uso para fazer isso o "Siblings". alguns exemplos : 
### const frame = document.querySelector(".div-frame");

<br/>

- **frame.nextSibling** // Proximo irmão
- **frame.nextElementSibling** // Faz o mesmo do de cima
- **frame.previousSibling** // Pegando o irmão anterior a ele
- **frame.previousElementSibling** // faz o mesmo do de cima

<br/> 

# 8 - Criando Elementos

- **.createElement()** : Derve para criar elementos HTML por exemplo : **const h1 = document.createElement("h1")**. Acabei de criar uma tag H1.

<br/>

# 9 - Trabalhando com Propriedades dos Elementos

#### < h1 class="h1-ex" >Olá, Gabriel< h1 />
#### let h1 = querySelector(".h1-ex")

<br/>

- **.setAtrribute()** : Serve para adicinar uma nova propriedade / atributo para a tag desejada. : Exemplo : **h1.setAtrribute("id", my-id)** // primeiro vem o nome do atributo "id" ou outro atributo, depois o nome que você escolheu para esse id. Result //  < h1 class="h1-ex id="my-id">Olá, Gabriel</ h1 >

- **.getAtrribute()** : ele serve para pegar os atributos das tags : Exemplo h1.getAtrribute("id)

- **.removeAtrribute()** : Serve para remover o atributo das tags : Exemplo h1.removeAtrribute("id")

<br/>

# 10 - Inserindo o Elemento HTML Criado

### Para adicionar o elemento criado você tem que especificar o local onde você que bota-lo. No meu caso irei bota-lo no "Body" do HTML.

<br/>

#### **insert** : Significar "Colocar", **before** : Significar "Antes" e **after** : Significar "Depois"

<br/>

#### < div id="parentElement" >

#### < span id="childElement">foo bar< span />

#### < div />

<br/>

#### **Criando um novo, simples Elemento span**
#### let sp1 = document.createElement("span")
#### **Obtendo o Elemento de referência**
#### let sp2 = document.getElementsById("childElement")
#### **Inserindo o novo Elemento antes(before) do sp2**
#### parentElement.insertBefore(sp1, sp2)

<br/>

- **.insertBefore** : Ele colocar antes de algum elemento desejado. um exemplo a cima.

- **.insertAfter** : Ele colocar o elemento depois do outro. Ou seja, ele tem o mesmo comportamento do de cima só que invertido.

- **.append() / .appendChild()** // uso : document.body.append(h1). append adiciona depois da body.

- **.prepend()** : Ele adicionar o elemento antes dde tudo do elemento que nesse caso é a body.

<br/>

# 11 - Eventos

- **addEventListener()** : Para trabalharmos com event handler, precisamos associar uma função a determinado elemento. O nome disso é registrar o tratador de eventos e isso é feito com o método addEventListener, que tem a seguinte sintaxe:
**elemento.addEventListener(evento, nome_da_função, false ou true)**

<br/>

- **keydown** : O keydownevento é acionado quando uma tecla é pressionada.

- Ao contrário do keypressevento, o keydownevento é acionado para todas as chaves, independentemente de produzirem um valor de caractere.

- Bolhas:  sim
- Cancelável:  sim
- Interface:  KeyboardEvent
- Propriedade do manipulador de eventos:  onkeydown

- Os eventos keydowne keyupfornecem um código que indica qual tecla foi pressionada, enquanto keypressindica qual caractere foi inserido. Por exemplo, um "a" minúsculo será relatado como 65 por keydowne keyup, mas como 97 por keypress. Um "A" maiúsculo é relatado como 65 por todos os eventos.

<br/>

- **load** : O Navegador carregou totalmente o HTML e também recursos externos como imagens e folhas de estilo.

- ### Quando você sai da página, os seguintes eventos são acionados em sequência: 

- **beforeunload** :  É acionado antes que a página e os recursos sejam descarregados. Você pode usar este evento para mostrar uma caixa de diálogo de confirmação para confirmar se você realmente deseja sair da página. Ao fazer isso, você pode evitar a perda de dados caso esteja preenchendo um formulário e clique acidentalmente em um link para navegar para outra página.

- **unload** : É acionado quando a página é completamente descarregada. Você pode usar esse evento para enviar os dados analíticos ou para limpar recursos.

- ### -------------------------------------------------------------

<br/>

- **click** : O evento "click" ocorre quando um usuário clica em um elemento com um evento onclick atribuído .

- **scroll** : Serve para manipular eventos de scroll / rolagem na tela. É um evento muito sensivel para ser manipulado.

- **change** : É um evento que ocorre quando o elemento concluiu a alteração. por Exemplo : em campo de input onde você presisar pegar o valor digitado pelo o usúario.

- **submit** : O evento "submit" é  acionado quando o formulário é enviado, normalmente é usado para validar o formulário antes de ser enviado ao servidor ou para abortar o envio e processá-lo com JavaScript.

<br/>

# 12 - Event Propriedades

- **id** : A propriedade id define ou retorna o id de um elemento (o valor do atributo id de um elemento). Exemplo : alterando o "id" de um elemento : **document.getElementById("demo").id = "newid"**

- **className** : "O className" é a propriedade de um elemento. Ele retorna uma lista separada por espaços de classes CSS do elemento:
