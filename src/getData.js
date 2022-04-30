//const fetch = require("node-fetch")

async function search( {
                           searchTerm = '',
                           facets = []
                       } = {} ) {
    //const header = new Headers();
    //header.append("Content-Type", "application/json");

    const data = JSON.stringify({
            "size": 40,
            "query": {
                "match": {
                    "fullText": {
                        "query": `"${searchTerm}"`
                    }
                }
            },
            "aggs": {
                "stringFacets": {
                    "nested": {
                        "path": "stringFacets"
                    },
                    "aggs": {
                        "facetName": {
                            "terms": {
                                "field": "stringFacets.facetName"
                            },
                            "aggs": {
                                "facetValue": {
                                    "terms": {
                                        "field": "stringFacets.facetValue"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    );

    const requestOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    };

    const response = await fetch(
        "https://development.es.ap-southeast-1.aws.found.io:9243/product_sg_dev_v1/_search?pretty=true",
        requestOptions
    )

    return await response.json();
}

//let seachObject = {searchTerm:"dog",facets:[]}


//search(seachObject).then(data=>console.log(data))


export { search };
