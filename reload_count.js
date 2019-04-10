var counter = localStorage.getItem("count");
counter++;
localStorage.setItem("count", counter);
if(counter < 50) {
    location.reload();
}