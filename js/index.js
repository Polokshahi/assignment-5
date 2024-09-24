

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





document.getElementById('blog-btn').addEventListener('click', function(){

    window.location.href = "./faq.html";

})






document.getElementById('donate-btn').addEventListener('click', function(){
    
    const donationName = document.getElementById('donateInput').innerText;
    const donation = donateAmount('input-donation');
    const modal =document.getElementById('my_modal_1');
    const allBalance = textValuById('total-balance');
    const newBalance = allBalance - donation;
    document.getElementById('total-balance').innerText = newBalance;
    const allDonateBalance = textValuById('donate-amount-show');
    const totalDonation = allDonateBalance + donation;
    // document.getElementById('donate-amount-show').innerText = totalDonation;
    if(donation > allBalance) {
        alert('Please enter a valid positive number');
    }
    if(donation <= 0 || isNaN(donation)){
        alert('Please enter a valid positive number');
        modal.classList.add('hidden');
    }else {

        document.getElementById('donate-amount-show').innerText = totalDonation;
        const newBalance = allBalance - donation;
        document.getElementById('total-balance').innerText = newBalance;
        modal.classList.remove('hidden');



        // history page

        const history = document.createElement('div');
        history.className = "bg-white p-4 rounded-xl border-2 border-gray-300 mb-4 shadow-lg";
        history.innerHTML = `
            <p class="text-lg text-gray-500" > <span class="font-bold text-orange-500"> ${donation} </span>  ${donationName} </p>
            <p class="text-md text-gray-500 hr p-3 rounded-md">${new Date().toString()}</p>
        `
        document.getElementById('history-section').appendChild(history)

    }

    

  



   
    
    
   
    
    

    

    

   
    

    const history = document.createElement('div');
    history.className = 'bg-white p-4 border-2 border-gray-300 mb-4 shadow-lg';
    history.innerHTML = `

    `

    

    

    

    
    
   


    

    


    
    
})