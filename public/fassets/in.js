 
    var demojson = {
        "opts": {
            "hasOpenRange": true,
            "country": "Nigeria",
            "operator": "9mobile",
            "iso": "ng",
            "canOverride": true,
            "msisdn": "2348180715229"
        },
        "products": [
            {
                "product_id": "MFIN-2-OR",
                "openRange": true,
                "openRangeMin": "50",
                "openRangeMax": "200000",
                "rate": 0.945,
                "topup_currency": "NGN",
                "currency": "NGN"
            }
        ]
    };
    function syntaxHighlight(json) {
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
            var cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    cls = 'string';
                }
            } else if (/true|false/.test(match)) {
                cls = 'boolean';
            } else if (/null/.test(match)) {
                cls = 'null';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
    }

    window.addEventListener('load', (event) => {
      var jstr = JSON.stringify(demojson, null, 2);
    //document.querySelector('#reqpre').innerHTML += syntaxHighlight(jstr);
    //document.querySelector('#respre').innerHTML += syntaxHighlight(jstr);
}); 