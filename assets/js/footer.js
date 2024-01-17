(function () {
    emailjs.init("d6YWkCI6uBTjNMC5J");
})();
document.getElementById("send").addEventListener("click", function () {
    var templateParams = {
        name: "James",
        email: "james@mail.com",
        date: "06-11-2023",
        product: "Dress, Shorts, Skirts",
    };

    emailjs.send("service_c3hw4je", "template_nf57kti", templateParams).then(
        function (response) {
            console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
            console.log("FAILED...", error);
        }
    );
});
