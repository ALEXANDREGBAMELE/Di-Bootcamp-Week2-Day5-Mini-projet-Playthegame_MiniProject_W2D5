
//Declaration des variables
const textOfConfirmation = "voulez-vous jouer a ce jeu ?"
let userNumber;
let computerNumber;


function playTheGame(){

    if(confirm(textOfConfirmation) == true)
        {
            
            userNumber = parseInt(prompt("entré un nombre entre 0 et 10"))
            
            if (isNaN(userNumber)){
                alert(" Désolé, pas un numéro, au revoir")
            }
                
            else if(userNumber < 0 || userNumber > 10)
                    { 
                        alert("Désolé, ce n'est pas un bon chiffre, au revoir")
                    }
                    computerNumber = Math.round((Math.random() * 10)) ;
                    console.log(computerNumber)

                     //appel de la deuxieme fontion compareNumbers
        if(userNumber === computerNumber){alert("WINNER")}
        else {
            let i = 0;
            while( i < 3)
            {
                i++
                if(userNumber != computerNumber) { compareNumbers(userNumber,computerNumber)}
                userNumber = parseInt(prompt("entré un nombre entre 0 et 10"))
            }
        }     
        } 

    else{ alert(" Pas de problème, au revoir") }

}


function compareNumbers(userNumber,computerNumber)
{
    // if(userNumber === computerNumber)
    // {
    //     alert("WINNER")
    // }

     if (userNumber > computerNumber){
        alert ("Votre numéro est plus grand que celui de l'ordinateur, devinez à nouveau") 
    }
    else if (userNumber < computerNumber){
        alert ("Votre numéro est plus petit que celui de l'ordinateur, devinez à nouveau") 
    }

}