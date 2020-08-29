var
    section = document.querySelector("#my-skills-section"),
    skillsArr = ["HTML5", "CSS3", "JavaScript", "Java", "C#", "dotNet", "Git"],
    articlesArr = [];

function createArticles(skillsPart) {
    var article = document.createElement('article');
    article.className = 'skills-articles';

    var ul = document.createElement('ul');
    ul.className = 'skills-ul';

    skillsPart.forEach(el => {
        var li = document.createElement('li');
        li.className = 'skill';

        if (el == "C#") {
            var img = document.createElement('img');
            img.src = "./img/csharp.svg";
            img.alt = el;
            var h3 = document.createElement('h3');
            h3.innerText = el;

            li.append(img, h3);

            ul.append(li);
            return;
        }

        var img = document.createElement('img');
        img.src = "./img/" + el.toLowerCase() + '.svg';
        img.alt = el;

        var h3 = document.createElement('h3');
        h3.innerText = el;

        li.append(img, h3);

        ul.append(li);
    });

    article.append(ul);

    return article;
}

var arr = [], m = 0;
skillsArr.forEach((el, i) => {
    m++;
    arr.push(el);
    if (m == 4 || !skillsArr[i + 1]) {
        articlesArr.push(createArticles(arr));
        arr = [];
        m = 0;
    }
});

// section.style.height = (articlesArr.length * 500) + "px";

articlesArr.forEach(el => {
    el.style.height = (100 / articlesArr.length) + "%";
    section.append(el);
});
