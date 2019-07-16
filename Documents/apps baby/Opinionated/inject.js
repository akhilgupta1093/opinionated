// Wait for document ready before executing main function
var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        main();
    }
}, 10);

function main() {

    console.log(tab.url)

}
