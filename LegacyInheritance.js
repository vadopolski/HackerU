function Man(name, surname) {
    this.name = name;
    this.surname = surname;
}

Man.prototype.getFullName = function() {
    return this.name + ' ' + this.surname;
};

function Programmer(name, surname, language) {
    Man.call(this, name, surname);
    this.language = language;
}

Programmer.prototype = Object.create(Man.prototype);
Programmer.prototype.getLanguage = function () {
    return this.language;
};

const vadim = new Programmer('Vadim', 'Opolski', 'Java');

console.log(vadim.getFullName() + ' ' + vadim.getLanguage());