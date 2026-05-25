function orderGame(gameName){
    let phone = "963981260267";
    let msg = "أريد شراء حساب لعبة " + gameName;
    window.open("https://wa.me/" + phone + "?text=" + msg, "_blank");
}function searchGame(){
    let input = document.getElementById("search").value.toLowerCase();
    let games = document.getElementsByClassName("game-card");

    for(let i=0;i<games.length;i++){
        let name = games[i].getElementsByTagName("h2")[0].innerText.toLowerCase();

        if(name.includes(input)){
            games[i].style.display="block";
        } else {
            games[i].style.display="none";
        }
    }
}let cart = [];

function addToCart(game){
    cart.push(game);
    alert(game + " تم إضافته للسلة 🛒");
}function buy(game, price){
    let confirmBuy = confirm("شراء " + game + " بسعر " + price + "$؟");

    if(confirmBuy){
        orderGame(game);
    }
}window.onload = function(){
    console.log("تم تحميل المتجر بنجاح 🎮");
}
