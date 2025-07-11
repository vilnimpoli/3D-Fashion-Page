const burger = document.querySelector(".burger");
const container = document.querySelector(".container");
const screen = document.querySelectorAll(".screen")

burger.addEventListener("click", () => { //Реагувати на події
    container.classList.toggle("active");
    console.log(container.classList);
});

function replaceBg(id) { //ф-ція для перемикання видимості секцій на сторінці, роблячи одну секцію видимою, а всі інші (з колекції screen) приховуючи. Це типовий підхід для створення слайдерів, табів або перемикання контенту
    const bg = document.getElementById(id)
    screen.forEach(screen => {
        screen.style.display = "none"
    })
    bg.style.display = "block"
}



function changeBg() {
    const links = document.querySelectorAll(".link") //Це рядок коду, який знаходить усі елементи на вашій веб-сторінці, що мають CSS-клас link

    links.forEach((link, index) =>{ //forEach - це метод для перебору елементів. Дозволяє виконати певну функцію для кожного окремого елемента у колекції. Вона приймає два параметри: link - перше значення з основного div class "links" при кожній настіпній ітерації буде переходити до наступного елемента з div class "links". index - лічильник (при першій ітерації 0)
// !!!! це сновний способ для JavaScript зробити кожен елемент у колекції links інтерактивним при кліку(наведені), дозволяючи йому взаємодіяти на поточній сторінці або програмно перекидати на іншу.
        link.addEventListener("mouseenter", e => {
            e.preventDefault()
            replaceBg(e.target.dataset.link) // в () потрібно передати data-атрибут яку ми дописали в html до links. 
        })
        link.addEventListener("click", e =>{ // e - event
            e.preventDefault() //щоб наше посилання нас нікуди не вела
            container.classList.toggle("active");
        })
    })
//скриваємо всі скріни щоб був один тільки (бо зараз всі вони один під одим видимі)
    screen.forEach(screen => {
        screen.style.display = "none" //спочатку всі екрані приховали
        screens[0].style.display = "block" // а потім першому елементу задали display = "block"
    })

}
changeBg()