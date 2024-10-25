const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require("url");

const slugify = require("slugify");

const replaceTemplate = require("./module/replaceTemplate");

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const templateOverview = fs.readFileSync(
  `${__dirname}/templates/template_overview.html`,
  "utf-8"
);
const templateCard = fs.readFileSync(
  `${__dirname}/templates/template_card.html`,
  "utf-8"
);
const templateProduct = fs.readFileSync(
  `${__dirname}/templates/template_product.html`,
  "utf-8"
);

const dataObj = JSON.parse(data);

const slugs = dataObj.map((el) => slugify(el.productName, { lower: true }));
console.log(slugs);

const server = http.createServer((request, response) => {
  console.log(request.url);
  const { query, pathname } = url.parse(request.url, true);

  // Overview page
  if (pathname === "/" || pathname === "/overview") {
    response.writeHead(200, {
      "Content-type": "text/html",
    });

    const cardsHtml = dataObj
      .map((el) => replaceTemplate(templateCard, el))
      .join("");
    const output = templateOverview.replace("{%PRODUCT_CARDS%}", cardsHtml);
    response.end(output);

    // Product page
  } else if (pathname === "/product") {
    response.writeHead(200, {
      "Content-type": "text/html",
    });

    const product = dataObj[query.id];
    const output = replaceTemplate(templateProduct, product);

    console.log(query);
    response.end(output);

    // API
  } else if (pathname === "/api") {
    fs.readFile(`./dev-data/data.json`, "utf-8", (error, data) => {
      const productData = JSON.parse(data);
      response.writeHead(200, { "Content-type": "application/json" });
      response.end(data);
    });

    // Not Found
  } else {
    response.writeHead(404, { "Content-type": "text/html" });
    response.end("<h1>Page Not Found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
