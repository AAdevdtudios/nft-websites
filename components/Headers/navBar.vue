<template>
    <div class="nav-header px-16 mb-7 absolute mt-3 text-white bg-slate-900 top-0 right-0 z-50 w-screen">
        <div class="nav-components flex justify-between items-baseline">
            <div class="brand-others flex w-fit items-baseline">
                <h1 class="brand mr-20 font-extrabold text-3xl">Brands</h1>
                <ul class="nav-links flex gap-5 uppercase text-base">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="/Categories">Token</a>
                    </li>
                    <li>
                        <a href="/Blog">Blog</a>
                    </li>
                </ul>
            </div>
            <div>
                <a href="https://bscscan.com/token/0x7C82560505b981fAea9E8c11d5E0A04F2a0F01CA" class="mx-4 text-sm text-gray-400 font-bold">Contract-address: <span class="text-accents">0x7C82560505b981fAea9E8c11d5E0A04F2a0F01CA</span></a>
                <a href="/"
                    class="btn-shop py-2 px-10 bg-indigo-500 rounded-md hover:bg-white hover:text-black text-white font-bold leading-8 inline-block">Connect wallet</a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const {check_wallet} = useEthers()
    async function check_eth() {
        try {
            const {ethereum} = window
            if(!ethereum){
                alert("Make sure you have meta")
                return false
            }
            const accounts = await ethereum.request({
                method: 'eth_accounts'
            });
            if(accounts.length !== 0){
                const account = accounts[0];
                console.log("Not found", account);
            }
            
        } catch (error) {
            
        }
    }
    check_eth()
    
</script>