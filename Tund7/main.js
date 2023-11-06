function suurim(numbrid){





    let suurimNumber = numbrid[0];
    
    
    for (let i = 1; i < numbrid.length; i++) {
      if (numbrid[i] > suurimNumber) {
        suurimNumber = numbrid[i];
      }
    }
    
    console.log("Suurim number massiivis on: " + suurimNumber);



}



function CtoF(C){

    console.log((C * 9/5) + 32 + "°F");


}

function korrutustable(arv){

   
    
    
    
    for(let i = 1; i<=arv ; i++){
    console.log(arv + " * " + i + " = " + i*arv);
    }
    
    
    
    
}


function faktoriaal(number){
    let k = 1;
    for(let i = 1; i<=number ; i++){


k=i*k
 
    }
    console.log(k);

}

function faktoriaal(tähed){



    for(let i = 1; i<=tähed ; i++){
    
    
    
    
    }


}




function püramiid(number) {
    let output = '';
  
    for (let i = 1; i <= number; i++) {
      output += "*".padStart(i, ' ') + "\n";
    }
  
    document.write(output);
  }

  function algarv(number) {
    let k = 1;
    
    for (let i = 2; i < number; i++) {
        let jaguvus = number % i;
        
        if (jaguvus === 0) {
            k = 0;
            console.log("Pole algarv");
            break;
        }
    }
    
    if (k === 1) {
        console.log("On algarv");
    }
}