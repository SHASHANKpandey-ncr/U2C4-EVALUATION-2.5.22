// write js code here corresponding to favourites.html

var f_arr= JSON.parse(localStorage.getItem('favourites'))
const tbody = document.querySelector('tbody');






display(f_arr)

function display(data)
{

    document.querySelector('tbody').innerHTML=''

    data.forEach(function(ele,i){

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
        td6.innerText='Delete'
        td6.style.color='red'
        td6.style.cursor='pointer'
        td6.addEventListener('click',function(event){
            Delete(ele,i)
        })

        tr.append(td1,td2,td3,td4,td5,td6)
        tbody.append(tr)
    });
    function Delete(ele,i)
    {
        f_arr.splice(i,1)
        localStorage.setItem('favourites',JSON.stringify(f_arr))
        window.location.reload()
    }
}