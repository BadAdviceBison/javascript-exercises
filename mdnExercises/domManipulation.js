const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = ('This is some text. Rad!');

container.appendChild(content);

const peeContent = document.createElement('p');
peeContent.textContent = ('This is more text, but it comes first!');
peeContent.setAttribute('style', 'color:blue;'); //.setAttribute needs (nameOfAttribute, value)

container.insertBefore(peeContent, content);

const ehtch3 = document.createElement('h3');
ehtch3.textContent = ('This text is slightly thicc');

container.appendChild(ehtch3);

const boxDiv = document.createElement('div');
boxDiv.setAttribute('style', 'border: 4px solid black; background: pink')

container.appendChild(boxDiv);

const ehtch1 = document.createElement('h1');
ehtch1.textContent = ('I\'m in a div')

boxDiv.appendChild(ehtch1)

const peeCon2 = document.createElement('p')
peeCon2.textContent = ('ME TOO!')

boxDiv.appendChild(peeCon2)

