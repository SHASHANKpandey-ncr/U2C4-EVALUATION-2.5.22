// write js code here corresponding to matches.html



var arr= JSON.parse(localStorage.getItem('schedule')) 
var f_arr= JSON.parse(localStorage.getItem('favourites')) || []
const tbody = document.querySelector('tbody');

display(arr); // displaying all data



const filter = document.querySelector('select');
filter.addEventListener('change',function(){
if(filter.value=='none'){display(arr)}
else
{
    var bag=arr.filter(function(ele){
        return ele.venue==filter.value
    })
    display(bag) // displaying filtered all data
}
})







function display(data) // function defination to display data
{
    

    document.querySelector('tbody').innerHTML=''

    data.forEach(function(ele){

        const tr = document.createElement('tr');

        const td1 = document.createElement('td');
        td1.innerText=ele.number

        const td2 = document.createElement('td');
        td2.innerText=ele.teamA

        const td3 = document.createElement('td');
        td3.innerText=ele.teamB

        const td4 = document.createElement('td');
        td4.innerText=ele.date

        const td5 = document.createElement('td');
        td5.innerText=ele.venue


        const td6 = document.createElement('td');
        td6.innerText='Favourites'
        td6.style.color='green'
        td6.style.cursor='pointer'
        td6.addEventListener('click',function(event){
            f_arr.push(ele)
            localStorage.setItem('favourites',JSON.stringify(f_arr))
            window.location.href='favourites.html'
        })

        tr.append(td1,td2,td3,td4,td5,td6) // appending data in row
        tbody.append(tr) // appending row in table 
    });
}