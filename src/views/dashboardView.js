import { html } from "../../lit-html/lit-html.js";
import { getAllFacts } from "../api/data.js";

const dashboardTemplate = (data) => html` <h2>Fun Facts</h2>
  <section id="dashboard">
    ${data.length === 0 ? html`<h2>No Fun Facts yet.</h2>` : data.map(factCard)}
  </section>`;

const factCard = (data) => html` <div class="fact">
  <img src=${data.imageUrl} alt="example3" />
  <h3 class="category">${data.category}</h3>
  <p class="description">${data.description}</p>
  <a class="details-btn" href="/details/${data.objectId}">More Info</a>
</div>`;

export async function dashboardPage(ctx) {
  const facts = await getAllFacts();
  const factsArr = JSON.parse(facts);
  console.log(facts);
  console.log(factsArr);
  const allFacts = factsArr.results;
  console.log(allFacts);
  ctx.render(dashboardTemplate(allFacts));
}
