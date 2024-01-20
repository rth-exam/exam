const activationCodes = {
  Maruf: {
    code: 'MAR-1892' ,
    redirectURL: 'https://rth-result.rf.gd/',
  },
  Rana_SIR : {
    code: 'RAN-B9B4',
    redirectURL: 'https://rth-result.rf.gd/wp-admin/'
  },
  Rashedur_Zaman : {
    code : 'RAS-AE3E',
    redirectURL: 'https://rth-result.rf.gd/wp-admin/'
  },
  Tamim_Casc: {
    code: 'TAM-719G',
    redirectURL: 'https://rth-result.rf.gd/' 
  },
  Tamim_BAFSD: {
    code: 'TAM-IH6D',
    redirectURL: 'https://rth-result.rf.gd/'
  },
  Bandhon: {
    code: 'BAN-63C7',
    redirectURL: 'https://rth-result.rf.gd/'
  },
  // Add more users and their respective activation codes and URLs here
};

document.getElementById('activationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  const enteredCode = document.getElementById('activationInput').value;

  // Check entered code against the activation codes for different users
  for (const user in activationCodes) {
    if (activationCodes.hasOwnProperty(user)) {
      if (enteredCode === activationCodes[user].code) {
        const greeting = document.getElementById('greeting');
        greeting.textContent = `Activation successful for ${user}! Redirecting...`;

        // Redirect to the user's specified website after 2 seconds (2000 milliseconds)
        setTimeout(function() {
          window.location.href = activationCodes[user].redirectURL;
        }, 5000); // Change the delay time as needed
        return; // Exit the loop if activation code is found
      }
    }
  }

  // If no valid activation code is entered
  alert('Invalid activation code! Please try again.It means You are not allowed to go to RTH Exam WebApp.Only this is for SSC-24 Batch. other Batch will be added automaticaly latter.Thanks  ----Rashedur Zaman (Admin, RTH web Developing Team) ');
});
