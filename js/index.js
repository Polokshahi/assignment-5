// History btn click

document.getElementById('history-btn').addEventListener('click', function(){
    const btn = document.getElementById('history-btn');
    const donationButton = document.getElementById('donation-btn');
    btn.style.backgroundColor = '#a2ea42'
    donationButton.style.backgroundColor = '#D2D2D2';
    const cardItem = document.getElementById('card-item');
    const historyItem = document.getElementById('history-item');
    historyItem.classList.remove('hidden');
    cardItem.classList.add('hidden');


})

// donation button click

document.getElementById('donation-btn').addEventListener('click', function(){
    const btn = document.getElementById('history-btn');
    const donationButton = document.getElementById('donation-btn');
    btn.style.backgroundColor = '#D2D2D2'
    donationButton.style.backgroundColor = '#a2ea42';
    const cardItem = document.getElementById('card-item');
    const historyItem = document.getElementById('history-item');
    historyItem.classList.add('hidden');
    cardItem.classList.remove('hidden');

})


// blog btn click


document.getElementById('blog-btn').addEventListener('click', function(){

    window.location.href = "./faq.html";

})



// donation amount click handle


// card 1 


document.getElementById('donate-btn').addEventListener('click', function(){
    
    const modal = document.getElementById('modal');

   
  
    const donationName = document.getElementById('donateInput').innerText;

    const donation = donateAmount('input-donation');  //donate amount by input value
    const allBalance = textValuById('total-balance'); //balance

  
   
   if(donation <= 0 || isNaN(donation) || donation > allBalance){
        alert('Please enter a valid positive number');
        modal.classList.add('hidden');
       
        
        
    }else {

        

       
        const newBalance = parseFloat(allBalance - donation);
        document.getElementById('total-balance').innerText = newBalance;
        const allDonateBalance = textValuById('donate-amount-show');
        const totalDonation = allDonateBalance + donation;
        document.getElementById('donate-amount-show').innerText = totalDonation;
        document.getElementById('input-donation').value = "";
        modal.classList.remove('hidden');
        
        

        



        // history page

        const date = new Date().toLocaleString();
        const history = document.createElement('div');
        history.className = "bg-white p-4 rounded-xl border-2 border-gray-300 mb-4 shadow-lg";
        history.innerHTML = `
            <p class="text-lg text-gray-500" > <span class="font-bold text-orange-500"> ${donation} </span>  ${donationName} </p>
            <p class="text-md text-gray-500 hr p-3 rounded-md">Date: ${date}</p>
        `
        document.getElementById('history-section').appendChild(history)

    }



    
});


