async function getQuotes() {
  let url = "https://type.fit/api/quotes";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (e) {
    console.warn(e);
  }
}
async function getImage() {
  let url = "https://api.unsplash.com/photos;";
  try {
    let res = await fetch(url);
    console.log(res);
    return await res.json();
  } catch (e) {
    console.warn(e);
  }
}

function generateLightColorHex() {
  let color = "#";
  for (let i = 0; i < 3; i++)
    color += (
      "0" + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)
    ).slice(-2);
  return color;
}

function generateDarkColorHex() {
  let color = "#";
  for (let i = 0; i < 3; i++)
    color += (
      "0" + Math.floor((Math.random() * Math.pow(16, 2)) / 2).toString(16)
    ).slice(-2);
  return color;
}

async function renderQuotes() {
  let quotes = await getQuotes();
  const randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];

  let html = "";
  let htmlSegment = `
          <p class="quotes">
            <i class="fa fa-quote-left"> </i>
            ${randomQuotes.text}
          </p>
          <div class="authorContainer">
          <p class="author">
          - ${randomQuotes.author}
          </p>
          </div>
          <div class="newQuoteContainer">
            <button class="newQuote button" onclick="newQuotes()" style="border: 3px solid ${generateDarkColorHex()};">New quote</button>
          </div>
        `;

  html += htmlSegment;

  let container = document.querySelector(".container");
  container.innerHTML = html;
  document.querySelector(".container").style.backgroundColor =
    generateLightColorHex();
  document.body.style.backgroundColor = generateDarkColorHex();
}

renderQuotes();

function newQuotes() {
  renderQuotes();
}
