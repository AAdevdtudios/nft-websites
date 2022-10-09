import {useNuxtApp} from '#app'
export function useEthers(){
    const nuxtapp=useNuxtApp()
    const ethers = nuxtapp.$ethers
    return ethers
}