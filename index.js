function handleFormSubmit(event) 
{

    event.preventDefault();

    const userDetails = 
    {
      amount: event.target.amount.value,
      des: event.target.des.value,
      category: event.target.category.value,
    };
    
    localStorage.setItem(userDetails.des, JSON.stringify(userDetails));

    displayUserOnScreen(userDetails);

    document.getElementById("amount").value = "";
    document.getElementById("des").value = "";
    document.getElementById("category").value = "";
}
  

function displayUserOnScreen(userDetails) 
{

    const userItem = document.createElement("li");


    userItem.appendChild(
      document.createTextNode(
       ` ${userDetails.amount} - ${userDetails.des} - ${userDetails.category}`
      )
    );
  
    const deleteBtn = document.createElement("button");
    const editBtn =document.createElement('button');
    editBtn.appendChild(document.createTextNode("Edit Expense"));
    deleteBtn.appendChild(document.createTextNode("Delete Expense"));
    userItem.appendChild(deleteBtn);
    userItem.appendChild(editBtn);

    const userList = document.querySelector("ul");
    userList.appendChild(userItem);

    deleteBtn.addEventListener("click", function (event) 
    {
      userList.removeChild(event.target.parentElement);
      localStorage.removeItem(userDetails.des);
    });
    editBtn.addEventListener("click", function (event) 
    {
      userList.removeChild(event.target.parentElement);
      localStorage.removeItem(userDetails.des);
      document.getElementById("amount").value=userDetails.amount;
      document.getElementById("des").value=userDetails.des;
      document.getElementById("category").value=userDetails.category;
    
    });
  
}