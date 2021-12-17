// IIFE - Immediatelt invoked function expression
(() => {
    function Start(){
        console.log("APP STARTED !");
    }
    window.addEventListener('load', Start);
})();