var input_text = document.getElementById("input_text")
var submit_button = document.getElementsByClassName("submit_button");

function loading() {
    console.log("loading started!");
    input_value = input_text.value;

    console.log(input_value);
    // var contents = document.getElementById("contents");
    // contents.innerHTML = input_value;

    let loading_html = `
                        <div class="card">
                            <div class="loading-div">
                                <div class="loading" data-text="Loading...">Loading...</div>
                            </div>
                        </div>
                        
                        <div class="card">
                            <div class="loading-div">
                                <div class="loading" data-text="Loading...">Loading...</div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="loading-div">
                                <div class="loading" data-text="Loading...">Loading...</div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="loading-div">
                                <div class="loading" data-text="Loading...">Loading...</div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="loading-div">
                                <div class="loading" data-text="Loading...">Loading...</div>
                            </div>
                        </div>
                        `
    $('#contents').html(loading_html)
    
    setTimeout(function() {
        postCards();
    }, 3000);
}

function postCards() {
    console.log("Card Posting started!");
    let results_html = `<div class="card">
                            <div class="card--hover"> 
                                <h5>1st</h5>
                                <h1>ENTJ (45%)</h1>
                                <h3>Commander Personality</h3>
                                <br>
                                <p>Someone with the Extraverted, Intuitive, Thinking, and Judging personality traits.</p>
                                <p>'Steve Jobs' is this type of person you may know.</p>
                                <a href="https://www.16personalities.com/entj-personality">Find out more</a>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card--hover"> 
                                <h5>2nd</h5>
                                <h1>ENFJ (30%)</h1>
                                <h3>Protagonist Personality</h3>
                                <br>
                                <p>Someone with the Extraverted, Intuitive, Feeling, and Judging personality traits.</p>
                                <p>'Barack Obama' is this type of person you may know.</p>
                                <a href="https://www.16personalities.com/enfj-personality">Find out more</a>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card--hover"> 
                                <h5>3rd</h5>    
                                <h1>ENFP (13%)</h1>
                                <h3>Campaigner Personality</h3>
                                <br>
                                <p>Someone with the Extraverted, Intuitive, Feeling, and Prospecting personality traits.</p>
                                <p>'Robert Downey, Jr.' is this type of person you may know.</p>
                                <a href="https://www.16personalities.com/enfp-personality">Find out more</a>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card--hover"> 
                                <h5>4th</h5>
                                <h1>ESFJ (8%)</h1>
                                <h3>Consul Personality</h3>
                                <br>
                                <p>Someone with the Extraverted, Observant, Feeling, and Judging personality traits.</p>
                                <p>'Taylor Swift' is this type of person you may know.</p>
                                <a href="https://www.16personalities.com/esfj-personality">Find out more</a>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card--hover"> 
                                <h5>5th</h5>
                                <h1>ESFP (3%)</h1>
                                <h3>Entertainer Personality</h3>
                                <br>
                                <p>Someone with the the Extraverted, Observant, Feeling, and Prospecting personality traits.</p>
                                <p>'Elton John' is this type of person you may know.</p>
                                <a href="https://www.16personalities.com/esfp-personality">Find out more</a>
                            </div>
                        </div>
                        `

    $('#contents').html(results_html)

}

input_text.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        loading();
    }
});
