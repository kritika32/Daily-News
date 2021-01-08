console.log("we are in index.js file");

let source = `bbc-news`;
let apiKey = `64e3c24adfe24efbb4cfce982839aeb1`;

let newsAccordion = document.getElementById("newsAccordion");

const xhr = new XMLHttpRequest();

// xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
let url = 'http://newsapi.org/v2/top-headlines?country=in&apiKey=64e3c24adfe24efbb4cfce982839aeb1';
// let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=64e3c24adfe24efbb4cfce982839aeb1`;
xhr.open('GET', url, true);



xhr.onload = function () {
    console.log(this.status);
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card">
                        <div class="card-header "  id="heading${index}">
                            <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                aria-expanded="false" aria-controls="collapse${index}">
                               <b>Breaking News ${index + 1} :</b> ${element["title"]}
                            </button>
                            </h2>
                        </div>

                        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                            <div class="card-body bg-dark" style="color:white"> ${element["content"]}. <a href="${element['url']}" target="_blank" style="color:rgb(202,164,114);font-size:21px;" >Read more here</a>  </div>
                        </div>
                    </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }

}
xhr.send();
