import {search} from "./getData";

const searchFunc = require('getData');


function initEs() {
  $('#es-search').on('keyup',function(){
    console.log('trigger search hear')
  })

  $('#es-search').on('change', async function () {
      let seachObject = {searchTerm:"dog",facets:[]}
      let data = await search(seachObject);
      let productlisst = data.hits.hits;
      productlisst.forEach(product => {
        let element = `<div class="single-search-product d-flex">
                                <a href="#"><img src="${product.imageUrl}" alt=""></a>
                                <div class="desc">
                                    <a href="#" class="title">${product.title}</a>
                                    <div class="price">${product.price}</div>
                                </div>
                            </div>`;

        $('#products').append(element);
      })
    })
}

export {
  initEs
}