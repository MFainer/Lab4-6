
var data = [
    "& n b s p",
    "classid",
    "& #174",
    ["Я відображаю & # 8 3 6 4",
    "Я відображаю & # x 2 0 A C"],
    ["Змінити стилі HTML елемента", 
    "Додати новий елемент до сторінки", 
    "Отримати та відобразити дані з іншого сервера"],
    "<embed src='car.jpeg'>",
    "a&#768",
    ["var", "document", "getElementById"],
    ["const", "for", "let"],
    ["form", "typemustmatch", "usemap"],

]
var counter = 0;
var k = 1;
var l = 1;

function main() {
    for(var index = 1; index <= 10; index++){
        if(index==2 || index==1 || index==3){
            var list = document.getElementsByName(`vr${index}`)
            for(var radio of list){
                if(radio.checked && radio.value == data[index-1]){
                    radio.parentElement.style.color = 'green';
                    counter++
                }
                else{
                    radio.parentElement.style.color = 'red'
                }
            }
        }
        else if(index==5 || index==4){
            var k = 0
            var list = document.getElementsByName(`v${index}`)
            for(var checkbox of list){
                for(var j = 0; j < data[index-1].length; j++){
                    if(checkbox.checked && checkbox.value == data[index-1][j]) {
                        checkbox.parentElement.style.color = 'green';
                        k++
                    }
                    else if(checkbox.parentElement.style.color != 'green') {checkbox.parentElement.style.color = 'red'}
                    
                    if(k == data[index-1].length){
                        counter++;
                    }
                }
            }
        }
        else if(index==6){
            let input1 = document.querySelector('.inputv5').value;

            if(input1 == data[index-1]){
                document.querySelector('.inputv5').style.color = 'green';
                counter++
            }
            else{
                document.querySelector('.inputv5').style.color = 'red';
            }
        }
        else if(index==7){

            let input2 = document.querySelector('.inputv6').value;
            if(input2 == data[index-1]){
                document.querySelector('.inputv6').style.color = 'green';
                counter++;
            }
            else{
                document.querySelector('.inputv6').style.color = 'red';
            }
        }
        
        else if(index==8){
            let k =0;
            for(var i=0; i < 3; i++){
                let list = document.querySelector(`.v${index+i}`).value;
                for(var j = 0; j < 3; j++){
                    if(list == data[index-1][j]){
                        document.querySelector(`.v${index+i}`).style.color = 'green';
                        k++
                    }
                    else if(document.querySelector(`.v${index+i}`).style.color!='green'){
                        document.querySelector(`.v${index+i}`).style.color = 'red';
                    }
                }         
            }
            if (k == 3){counter++}
        }

        else if(index==9){
            let k =0;
            for(var i=2; i<5; i++){
                let list1 = document.querySelector(`.v${index+i}`).value;
                for(var j = 0; j < 3; j++){
                    if(list1 == data[index-1][j]){
                        document.querySelector(`.v${index+i}`).style.color = 'green';
                        k++
                    }
                    else if(document.querySelector(`.v${index+i}`).style.color!='green'){
                        document.querySelector(`.v${index+i}`).style.color = 'red';
                    }
                }         
            }
            if (k == 3){counter++}
        }
        else if(index == 10){
            var list = document.querySelectorAll(`p[draggable="true"]`);
            for(var j = 1; j <= 3; j++){
                if(document.getElementById(`dragndrop${j}`).dataset.value == data[index-1][j]){
                    k++;
                }
            }
        }
    }
    document.querySelector('.showresults').innerHTML = `Your results ${counter} of 10`;
}    

var dragItems = document.querySelectorAll('p[draggable="true"]');
dragItems.forEach(function addListeners() {addEventListener('dragstart', dragStart)})

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
}

var dropBoxes = document.querySelectorAll('.dropbox');
dropBoxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('dropbox-active');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('dropbox-active');
}

function dragLeave(e) {
    e.target.classList.remove('dropbox-active');
}

function drop(e) {
    e.target.classList.remove('dropbox-active');

    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    draggable.dataset.value = draggable.innerHTML;
    
    if (!e.target.hasChildNodes()) {
        draggable.parentNode.dataset.value = null;
        e.target.appendChild(draggable);
        e.target.dataset.value = draggable.dataset.value;
    }
    draggable.classList.remove('hide');
}
addEventListener('click', (event) => {
    if (event.target.classList.contains('GetResults')){
        main();
    }
    if (event.target.classList.contains('Submit')){
        let a = document.querySelector('.input-group').value;
        document.querySelector('.name-group').innerHTML = a
    }

    if (event.target.classList.contains('buttonshowdata')){
        StudentOBJ.prototype.setData = function()
        {
            document.getElementById(coppyresults) = `Speciality: ${this.getSpeciality} Group:${this.getGroup}`
        }
    }
    if (event.target.classList.contains('buttonns')){
        var name = document.querySelector('.inputname').value;
        var surname = document.querySelector('.inputsurname').value;
        if(name == ''||surname == ''){
            alert('Write name and username')
            return;
        }
        namesurname.name = name;
        namesurname.surname = surname;
        console.log(namesurname);
        document.querySelector('.output-ns').innerHTML = `Name: ${name}\ Surname: ${surname}`;

    }
    if (event.target.classList.contains('buttonsg')){
        var group = document.querySelector('.inputgroup').value;
        var speciality = document.querySelector('.inputspeciality').value;
        
        if(speciality == ''||group == ''){
            alert('Write speciality and group')
            return;
        }
        StudentOBJ.speciality = speciality;
        StudentOBJ.group = group;

        console.log(StudentOBJ);
        document.querySelector('.output-sg').innerHTML = `Speciality: ${speciality}\ Group: ${group}`;
    }
    if (event.target.classList.contains('buttonclearspeciality')){
        var specialitydel = document.querySelector('.inputspeciality');
        specialitydel.value = '';
        StudentOBJ.clearSpeciality;
        document.querySelector('.output-sg').innerHTML = `Speciality: ${StudentOBJ.getspeciality}\ Group: ${StudentOBJ.getgroup}`;
    }
    if (event.target.classList.contains('buttoncleargroup')){
        var groupdel = document.querySelector('.inputgroup');
        groupdel.value = '';
        StudentOBJ.clearGroup;
        document.querySelector('.output-sg').innerHTML = `Speciality: ${StudentOBJ.getspeciality}\ Group: ${StudentOBJ.getgroup}`;
    }
    if (event.target.classList.contains('buttoncoppyuser')){
        copyUser();
    }
    if (event.target.classList.contains('buttoncoppystudent')){
        copyStudent();
    }
    
    
})


function namesurname(name,surname){
    this.name = name;
    this.surname = surname;
}

function StudentOBJ(speciality, group){
    this.speciality = speciality;
    this.group = group;

    this.setspeciality = function(value) {
        this.speciality = value;
    }

    this.setGroup = function(value) {
        this.group = value;
    }

    this.getSurname = function() {
        return this.surname;
    }

    this.getName = function() {
        return this.name;
    }

    this.getspeciality = function() {
        return this.speciality;
    }

    this.getGroup = function() {
        return this.group;
    }

    this.clearName = function() {
        this.name = '';
    }

    this.clearSurname = function() {
        this.surname = '';
    }

    this.clearSpeciality = function() {
        this.speciality = '';
    }

    this.clearGroup = function() {
        this.group = '';
    }
}

var Progress = {
    ...StudentOBJ,
    test: '',
    attempt: 0,
    grades: [],

    getAvarageGrade(){
        let sum=0;
        for(let i=0;i<this.grades.lenght;i++)
            sum+=this.grades[i];
        return sum/this.grades.lenght
    },

    showData() {
        console.log('Specialty: ' + this.specialty + '\nGroup: ' + this.group + '\nTest: ' + this.test + '\nAttempt: ' + this.attempt  + '\nGrades: ' + this.grades + '\nAverage grade: ' + this.getAverageGrade());
    } 

}

class StudentClass{

    constructor(speciality,group){
        this.speciality = speciality;
        this.group = group;
    }
    set setSpeciality(speciality){
        this.speciality = speciality;
    }
    get getSpeciality(){
        return this.speciality;
    }
    set setGroup(group){
        this.group = group
    }
    get getGroup(){
        return this.group;
    }
    ShowData(){
        console.log(`Speciality: ${this.speciality} Group: ${this.group}`);
    }
}

function copyUser(){
    var namesurname2 ={
        ...namesurname
    }
    document.querySelector('.coppyresults').innerHTML = `Name: ${name}\ Surname: ${surname}`;
}

function copyStudent(){
    var StudentOBJ2 ={
        ...StudentOBJ
    }
    document.querySelector('.coppyresults').innerHTML = `Speciality: ${speciality}\ Group: ${group}`;

}


