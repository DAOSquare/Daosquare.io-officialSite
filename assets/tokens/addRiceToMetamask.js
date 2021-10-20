
function addRiceToMetamask() {
    initialize();
}

const initialize = async () => {
    //Basic Actions Section
    // const onboardButton = document.getElementById('connectButton');

    //Created check function to see if the MetaMask extension is installed
    //------Inserted Code------\\
    const MetaMaskClientCheck = () => {
        //Now we check to see if MetaMask is installed
        if (typeof window.ethereum !== 'undefined') {
            console.log('MetaMask is installed!');
        } else {
            //If it is installed we change our button text
            // onboardButton.innerText = 'Connect';
            alert('MetaMask isnt installed!');
        }
    };
    MetaMaskClientCheck();
    //------/Inserted Code------\\
    // window.ethereum.request({ method: 'eth_requestAccounts' });
    const networkID = await window.ethereum.request({ method: 'net_version' });
    console.log(networkID);
    riceAddress = '0xbd9908b0cdd50386f92efcc8e1d71766c2782df0';
    if (networkID == 1) {
        riceAddress = '0xbd9908b0cdd50386f92efcc8e1d71766c2782df0';

    } else if (networkID == 100) {
        riceAddress = '0x97Edc0e345FbBBd8460847Fcfa3bc2a13bF8641F';
    } else {
        alert('Please switch to ethereum or XDai network');
        return;
    }
    window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
            type: 'ERC20',
            options: {
                address: riceAddress,
                symbol: 'RICE',
                decimals: 18,
                image: 'https://www.daosquare.io/mediakit/DAOSquareRICE-256.png',
            },
        },
    }).then((success) => {
        if (success) {
            console.log('RICE successfully added to wallet!')
        } else {
            throw new Error('Something went wrong.')
        }
    })
        .catch(console.error)
};


// const ethereumButton = document.querySelector('.enableEthereumButton');

// ethereumButton.addEventListener('click', () => {
//     //Will Start the metamask extension
//     window.ethereum.request({ method: 'eth_requestAccounts' });
// });