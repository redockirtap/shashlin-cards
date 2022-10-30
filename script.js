const listItem = document.querySelectorAll('span');
number = 2
console.log(listItem[0].textContent)
const addDetails = () => {
    for (let i = 0; i <= listItem.length; i++)
    listItem[i].innerText += ` ${number}`
}

addDetails()