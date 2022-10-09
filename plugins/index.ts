import { defineNuxtPlugin } from "#app";
import Swal from 'vue-sweetalert2';
import {ethers} from 'ethers'
import web3 from "~~/public/web3";
export default defineNuxtPlugin(nuxtApp=>{
  function check_wallet(){
    if(window.ethereum){
      console.log("All good");
      return true
    }else{
      console.log("All bad");
      return false
    }
  }
  nuxtApp.provide('ethers', ethers)
  nuxtApp.provide('swal', Swal)
  //nuxtApp.vueApp.use(VueSweetalert2)
})