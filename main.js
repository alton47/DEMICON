const getRandomUserData = (country) => {
    
    //Get API
    fetch('https://randomuser.me/api/?nat=${country}') //?nat=us,dk,fr,gb
        .then(res => res.json())
        .then(data => {
            // console.log(data);

            let author = data.results;
            // console.log(author);

            //Get Data Value
            let output = "<h2><center>Get User Data</center></h2>";

            //Get Data Loop Through
            author.forEach(function (lists) {
                output += `
                <div class="container">
                    <div class="card mt-4 bg-light">
                        <ul class="list-group">
                            <li class="list-group-item"><h2>Name: ${lists.name.first}</h2></li>
                            <li class="list-group-item">Email ID: ${lists.email}</li>
                            <li class="list-group-item">Gender: ${lists.gender}</li>
                            <li class="list-group-item">Country: ${lists.location.country}</li>
                        </ul>
                    </div>
                </div> `;
            });
           


            //Show On Our Screen All Data
            document.getElementById('output').innerHTML = output;

        });
};


//Get Btn And Create Function
document.getElementById('myBtn').addEventListener('click', () =>  {
    const country = document.querySelector('input[name="country"]:checked').value;

    getRandomUserData(country);
});
