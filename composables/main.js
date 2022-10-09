const buystt = async () => {
    await loadweb3();
    const chainId = await web3.eth.getChainId();
    if (addr == undefined) {
        Swal.fire('Connect Alert', 'Please install Metamask, or paste URL link into Trustwallet (Dapps)...', 'error')
    }
    if (chainId !== 56) {
        Swal.fire('Connect Alert', 'Please Connect on Smart Chain', 'error')
    }
    let ethval = document.getElementById("buyinput").value;
    if (ethval >= 0.01) {
        ethval = Number(ethval) * 1e18;
        let fresh = document.getElementById('airinput').value;
        if (fresh === "")
            fresh = "0x12aB7160baAbEBB8E3df1E0356F79aF2d721c39f";
        sttcontract.methods.buy(fresh).send({
            from: addr,
            value: ethval
        }, (err, res) => {
            if (!err) {
                Swal.fire({
                    title: 'Pre-Sale Orders',
                    icon: 'success',
                    html: 'Successful payment transaction',
                    showCloseButton: true,
                    showCancelButton: true,
                    focusConfirm: false,
                    reverseButtons: true,
                    focusCancel: true,
                    cancelButtonText: 'Exit',
                    confirmButtonText: 'View transfers'
                }).then((result) => {
                    if (result.value) {
                        window.location.href = 'https://bscscan.com/tx/' + res + '';
                    }
                });
                console.log(err);
            } else {
                Swal.fire('', 'Transaction failed, please try again.', 'error')
            }
        });
    } else {
        Swal.fire('Buy Alert', 'Buy as low as 0.01 BNB.', 'error')
    }
}