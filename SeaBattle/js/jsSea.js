var body = document.querySelector("body");

var div = document.createElement("div");
div.setAttribute("class", "wrapper");
body.appendChild(div);

var btn = document.createElement("input");
btn.setAttribute("id", "idbtn");
btn.setAttribute("type", "button");
btn.setAttribute("value", "Start!");
div.appendChild(btn);
var ready; // переменная для отмены повторного использования ф-ции

btn.onclick = function () {   //создание при нажатии кнопки таблицы с сеткой

    if (ready) { //условие для отмены повторного использования функции
        return;
    }
    var indiv = document.createElement("div");
    indiv.setAttribute("id", "idcontain");
    indiv.setAttribute("class", "contain");
    div.appendChild(indiv);

    var aside = create_element(div, "aside"); //вызов ф-ции в не ф-ции для создания отдельного элемента(div)
    aside.setAttribute("id", "ship");

    function blockLine() {  //создание сетки(поля) игры

        for (var j = 1; j <= 10; j++) {
            var contain = document.getElementById("idcontain");
            contain.setAttribute("id", "idcontain");
            var ul = document.createElement("ul");
            ul.setAttribute("id", "ulbox");
            contain.appendChild(ul);

            for (var i = 1; i <= 10; i++) {
                var li = document.createElement("li");
                li.setAttribute("class", "libox");
                li.textContent = i + "/" + j;
                ul.appendChild(li);
            }
        }
    }

    blockLine();  //запуск ф-ции для создания сетки

    ready = true; //присвоение значения для отмены повторного использования ф-ции
    btn.setAttribute('disabled', true) //присвоение стиля, после чего повторно кнопка не срабатывает
}

var create_element = function (parentEl, needElem) {
    /* var body = document.querySelector("body"); */
    var enterElement = document.createElement(needElem);
    parentEl.appendChild(enterElement);
    return enterElement; // возвращение результата функции и затем присваеваем новой переменной "е"
}

/* var e = create_element("aside"); */ //получение результат функции
/* e.setAttribute("id","ship"); */


/* blockLine(); */

/* dragdrop */
/* mousedown */