console.log("this is working, bitch");


(function () {
    var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) {
        const covidCols = [{
            id: "week_ending",
            dataType: tableau.dataTypeEnum.date
        },{
            id: "federal_provider_number",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "provider_name",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "provider_address",
            dataType: tableau.dataTypeEnum.geometry
        }, {
            id: "provider_city",
            dataType: tableau.dataTypeEnum.geometry
        }, {  
            id: "provider_state",
            dataType: tableau.dataTypeEnum.geometry
         }, {
            id: "provider_zip_code",
            dataType: tableau.dataTypeEnum.geometry
        },
    ];

    let tableSchema = {
        id: "CMSLTCF",
        columns: covidCols,
    };

    schemaCallback([tableSchema]);

};
    myConnector.getData = function (table, doneCallback) {
        let tableData = []
        var i = 0

        $.getJSON("https://data.cms.gov/data.json", 
        function(resp) {
            for (i = 0, len = resp.length; i <len; i++){
                tableData.push({
                    "week_ending": resp[i].date,
                    "federal_provider_number": resp[i].string,
                    "provider_name": resp[i].string,
                    "provider_address": resp[i].geometry,
                    "provider_city": resp[i].geometry,
                    "provider_state": resp[i].geometry,
                    "provider_zip_code": resp[i].geometry,
                });
            }
            table.appendRows(tableData);
            doneCallback();
        }
    );
};

    tableau.registerConnector(myConnector);
})();

document.querySelector("#getData").addEventListener('click', getData)

function getData(){
    tableau.connectionName = "CMS LTCF COVID-19 and Influenza Data";
    tableau.submit()
}
