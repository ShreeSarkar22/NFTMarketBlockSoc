async function initWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else {
      alert('Please install MetaMask to use this marketplace.');
    }
}

async function connectMetaMask() {
    if (window.ethereum) {
      try {
        // Request accounts from MetaMask
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        document.getElementById('connect-button').innerText = `Connected`;
        
        // Load contract once connected
        loadContract();
      } catch (error) {
        console.error("User denied account access:", error);
      }
    } else {
      alert('MetaMask is not installed. Please install it to use this feature.');
    }
}  

// async function connectWallet() {
//     const connectButton = document.getElementById('connect-button');
    
//     if (window.ethereum) {
//       try {
//         // Request accounts from MetaMask
//         const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        
//         // Change button text to "Connected" once account is connected
//         if (accounts.length > 0) {
//           connectButton.innerText = "Connected";
//           connectButton.disabled = true; // Optionally disable the button after connection
  
//           // Load contract after wallet connection
//           loadContract();
//         }
//       } catch (error) {
//         console.error("User denied account access:", error);
//       }
//     } else {
//       alert('MetaMask is not installed. Please install it to use this feature.');
//     }
//   }