class Elem {
    constructor(selector){
        this.elemSelector = document.querySelector(selector);
    }
    html(changeHTML){
        this.elemSelector.innerHTML = changeHTML;
        return this;
    }
    append(appendHTML){
        this.elemSelector.innerHTML = appendHTML + this.elemSelector.innerHTML;
        return this;
    }
    prepend(prependHTML){
        this.elemSelector.innerHTML += prependHTML;
        return this;
    }
    attr(atribute, value){
        this.elemSelector.setAttribute(atribute, value);
        return this;
    }

}

var elem = new Elem('#test');

elem.html('!'); 
elem.append('!'); 
elem.prepend('!'); 
elem.attr('class', 'www'); 


elem.html('hello').append('!').prepend('!');
elem.attr('class', 'www').attr('title', 'hello');


