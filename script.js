window.onscroll = function() {
    scrollFunction()
};
      
function scrollFunction() {
    if (document.body.scrollTop > 90 ||
        document.documentElement.scrollTop > 90)
    {
        document.getElementById("navbar")
                    .style.padding = "10px";

        document.getElementById("logotext").style.fontSize = "20px";
        document.getElementById("logotext").style.marginLeft = "80px";
              
        document.getElementById("logo")
                .style.height = "40px";
    }
    else {
        document.getElementById("navbar")
                    .style.padding = "16px";
                      
        document.getElementById("logotext").style.fontSize = "36px";
        document.getElementById("logotext").style.marginLeft = "160px";

        document.getElementById("logo")
                    .style.height = "96px";
    }
}