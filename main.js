const getRandomUserData = (country) => {
    
   
};


//Get Btn And Create Function
document.getElementById('myBtn').addEventListener('click', () =>  {
    const country = document.querySelector('input[name="country"]:checked').value;

    getRandomUserData(country);
});
