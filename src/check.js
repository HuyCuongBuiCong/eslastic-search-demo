{
    "settings": {
    "number_of_shards": 1,
        "number_of_replicas": 1
},
    "mappings": {
    "shirt": {
        "properties": {
            "entity": {
                "properties": {
                    "name": {
                        "type": "text"
                    }
                }
            },
            "keyword_facets": {
                "type": "nested",
                    "properties": {
                    "facet_name": {
                        "type": "keyword"
                    },
                    "facet_value": {
                        "type": "keyword"
                    }
                }
            },
            "long_facets": {
                "type": "nested",
                    "properties": {
                    "facet_name": {
                        "type": "keyword"
                    },
                    "facet_value": {
                        "type": "long"
                    }
                }
            }
        }
    }
}
}