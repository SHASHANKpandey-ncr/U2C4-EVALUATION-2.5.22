// write js code here corresponding to index.html
// You should add submit event on the form

var arr= JSON.parse(localStorage.getItem('schedule')) ||[]
var form=document.querySelector('form')

form.addEventListener('submit',function(event){
event.preventDefault()
var object={
number:form.matchNum.value,
teamA:form.teamA.value,
teamB:form.teamB.value,
date:form.date.value,
venue:form.venue.value

}
arr.push(object)
localStorage.setItem('schedule',JSON.stringify(arr))
window.location.href='matches.html'
console.log(arr)
})