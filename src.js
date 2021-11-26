
var input_text = document.getElementById("input_text")
var submit_button = document.getElementsByClassName("submit_button");

function submit() {
    console.log("submit button clicked!");
    input_value = input_text.value;

    console.log(input_value);
    var contents = document.getElementById("contents");
    contents.innerHTML = input_value;
}

input_text.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        submit();
    }
});
