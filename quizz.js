
fetch("document.json")
            .then(response => response.json())
            .then(json => {
                console.log(json['question'][0])
            });


            
            

// var question = getElementById("question");
// var reponse = getElementById("reponse");

