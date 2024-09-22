
document.getElementById('donate-btn').addEventListener('click', function(e){
 
    const donation = donateAmount('input-donation');

    if(donation < 0 || isNaN(donation) === true){
        alert('Please enter a valid positive number');
        
    }
    const allBalance = textValuById('total-balance');
    const newBalance = allBalance - donation;
    document.getElementById('total-balance').innerText = newBalance;
    const allDonateBalance = textValuById('donate-amount-show');
    const totalDonation = allDonateBalance + donation;
    document.getElementById('donate-amount-show').innerText = totalDonation;
    e.reload();
    
    

    

    

   
    

    

    

    

    

    
    
   


    

    


    
    
})