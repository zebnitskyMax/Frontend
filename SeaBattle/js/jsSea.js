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

btn.onclick = function () { //создание при нажатии кнопки таблицы с сеткой

    if (ready) { //условие для отмены повторного использования функции
        return;
    }
    var aside = create_element(div, "aside"); //вызов ф-ции в не ф-ции для создания отдельного элемента(div)
    aside.setAttribute("id", "aside");

    var indiv = document.createElement("div");
    indiv.setAttribute("id", "idcontain");
    indiv.setAttribute("class", "contain");
    div.appendChild(indiv);

    var ShipBox = create_element(aside, "div");
    ShipBox.setAttribute("id", "ship");

    function blockLine() { //создание сетки(поля) игры

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

    blockLine(); //запуск ф-ции для создания сетки

    load_DandD(); //Запуск ф-ции для запуска Drag and Drop

    ready = true; //присвоение значения для отмены повторного использования ф-ции
    btn.setAttribute('disabled', true) //присвоение стиля, после чего повторно кнопка не срабатывает
}
// основная ф-ция для того чтобы не писать по 10 раз одно и тоже, 
// основной код для создания элемента
var create_element = function (parentEl, needElem) {
    /* var body = document.querySelector("body"); */
    var enterElement = document.createElement(needElem);
    parentEl.appendChild(enterElement);
    return enterElement; // возвращение результата функции и затем присваеваем новой переменной "е"
}

/* var e = create_element("aside"); */ //получение результат функции
/* e.setAttribute("id","ship"); */
function load_DandD() {
    var DragShip = document.getElementById('ship');

    DragShip.onmousedown = function (e) {
        e.stopPropagation();
        e.preventDefault();
        var coords = getCoords(DragShip);
        var shiftX = e.pageX - coords.left;
        var shiftY = e.pageY - coords.top;

        DragShip.style.position = 'absolute';
        document.body.appendChild(DragShip);
        moveAt(e);

        DragShip.style.zIndex = 1000; // над другими элементами

        function moveAt(e) {
            e.stopPropagation();
            e.preventDefault();
            DragShip.style.left = e.pageX - shiftX + 'px';
            DragShip.style.top = e.pageY - shiftY + 'px';
        }

        document.onmousemove = function (e) {
            moveAt(e);
        };

        document.onmouseup = function (e) {
            e.stopPropagation();
            e.preventDefault();
            document.onmousemove = null;
            document.onmouseup = null;
            var li = document.elementFromPoint(e.pageX, e.pageY);
           /*  li.appendChild(DragShip); */
        };

    }

    DragShip.ondragstart = function () {
        return false;
    };

    function getCoords(elem) {
        var box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }
}
/* blockLine(); */

/* dragdrop */
/* mousedown */
console.log("Hi, you stuped Ass!!!")