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
        }, {
            id: "provider_phone_number",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "county",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "submitted_data",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "residents_weekly_admissions_covid_19",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "residents_total_admissions_covid_19",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "residents_weekly_confirmed_covid_19",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "residents_total_confirmed_covid_19",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "residents_weekly_all_deaths",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "residents_total_all_deaths",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "residents_weekly_covid_19_deaths",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "residents_total_covid_19_deaths",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "staff_weekly_confirmed_covid_19",
            dataType: tableau.dataTypeEnum.int
        }, {
           id: "staff_total_confirmed_covid_19",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "staff_weekly_covid_19_deaths",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "staff_total_covid_19_deaths",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "weekly_resident_confirmed_covid_19_cases_per_1_000_residents",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "weekly_resident_covid_19_deaths_per_1_000_residents",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "total_resident_confirmed_covid_19_cases_per_1_000_residents",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "total_resident_covid_19_deaths_per_1_000_residents",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "total_residents_covid_19_deaths_as_a_percentage_of_confirmed_covid_19_cases",
            dataType: tableau.dataTypeEnum.float
        }, {
            id: "three_or_more_confirmed_covid_19_cases_this_week",
            dataType: tableau.dataTypeEnum.string
        }, {
            id: "number_of_residents_with_a_new_positive_covid_19_test_result_who_are_reinfected",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "number_of_residents_with_a_new_positive_covid_19_test_result_who_are_reinfected_and_asymptomatic",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "number_of_residents_with_a_new_positive_covid_19_test_result_who_are_reinfected_and_symptomatic",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "number_of_residents_with_new_influenza",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "number_of_residents_with_acute_respiratory_illness_symptoms_excluding_covid_19_and_or_influenza",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "number_of_residents_with_confirmed_coinfection_with_influenza_and_covid_19",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "number_of_staff_and_or_personnel_with_a_new_positive_covid_19_test_result_who_are_reinfected",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "number_of_staff_and_or_personnel_with_a_new_positive_covid_19_test_result_who_are_reinfected_and_symptomatic",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "number_of_staff_and_or_personnel_with_a_new_positive_covid_19_test_result_who_are_reinfected_and_asymptomatic",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "number_of_staff_and_or_personnel_with_new_influenza",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "number_of_staff_and_or_personnel_with_acute_respiratory_illness_symptoms_excluding_covid_19_and_or_influenza",
            dataType: tableau.dataTypeEnum.int
        }, {
            id: "number_of_staff_and_or_personnel_with_confirmed_coinfection_with_influenza_and_covid_19",
            dataType: tableau.dataTypeEnum.int
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

        $.getJSON("https://data.cms.gov/data-api/v1/dataset/88265caf-7f05-4f34-bf4d-e99ae6398492/data.json?column=week_ending&column=federal_provider_number&column=provider_name&column=provider_address&column=provider_city&column=provider_state&column=county&column=submitted_data&column=residents_weekly_admissions_covid_19&column=residents_total_admissions_covid_19&column=residents_weekly_confirmed_covid_19&column=residents_total_confirmed_covid_19&column=residents_weekly_all_deaths&column=residents_total_all_deaths&column=residents_weekly_covid_19_deaths&column=residents_total_covid_19_deaths&column=staff_weekly_confirmed_covid_19&column=staff_total_confirmed_covid_19&column=staff_weekly_covid_19_deaths&column=staff_total_covid_19_deaths&column=weekly_resident_confirmed_covid_19_cases_per_1_000_residents&column=weekly_resident_covid_19_deaths_per_1_000_residents&column=total_resident_covid_19_deaths_per_1_000_residents&column=total_residents_covid_19_deaths_as_a_percentage_of_confirmed_covid_19_cases&column=three_or_more_confirmed_covid_19_cases_this_week&column=number_of_residents_with_a_new_positive_covid_19_test_result_who_are_reinfected&column=number_of_residents_with_a_new_positive_covid_19_test_result_who_are_reinfected_and_asymptomatic&column=number_of_residents_with_a_new_positive_covid_19_test_result_who_are_reinfected_and_symptomatic&column=number_of_residents_with_new_influenza&column=number_of_residents_with_acute_respiratory_illness_symptoms_excluding_covid_19_and_or_influenza&column=number_of_residents_with_confirmed_coinfection_with_influenza_and_covid_19&column=number_of_staff_and_or_personnel_with_a_new_positive_covid_19_test_result_who_are_reinfected&column=number_of_staff_and_or_personnel_with_a_new_positive_covid_19_test_result_who_are_reinfected_and_symptomatic&column=number_of_staff_and_or_personnel_with_a_new_positive_covid_19_test_result_who_are_reinfected_and_asymptomatic&column=number_of_staff_and_or_personnel_with_new_influenza&column=number_of_staff_and_or_personnel_with_acute_respiratory_illness_symptoms_excluding_covid_19_and_or_influenza&column=number_of_staff_and_or_personnel_with_confirmed_coinfection_with_influenza_and_covid_19", 
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
                    "county": resp[i].geometry,
                    "submitted_data": resp[i].string,
                    "residents_weekly_admissions_covid_19": resp[i].int,
                    "residents_total_admissions_covid_19": resp[i].int,
                    "residents_weekly_confirmed_covid_19": resp[i].int,
                    "residents_total_confirmed_covid_19": resp[i].int,
                    "residents_weekly_all_deaths": resp[i].int,
                    "residents_total_all_deaths": resp[i].int,
                    "residents_weekly_covid_19_deaths": resp[i].int,
                    "residents_total_covid_19_deaths": resp[i].int,
                    "staff_weekly_confirmed_covid_19": resp[i].int,
                    "staff_total_confirmed_covid_19": resp[i].int,
                    "staff_weekly_covid_19_deaths": resp[i].int,
                    "staff_total_covid_19_deaths": resp[i].int,
                    "weekly_resident_confirmed_covid_19_cases_per_1_000_residents": resp[i].float,
                    "weekly_resident_covid_19_deaths_per_1_000_residents": resp[i].float,
                    "total_resident_confirmed_covid_19_cases_per_1_000_residents": resp[i].float,
                    "total_resident_covid_19_deaths_per_1_000_residents": resp[i].float,
                    "total_residents_covid_19_deaths_as_a_percentage_of_confirmed_covid_19_cases": resp[i].float,
                    "three_or_more_confirmed_covid_19_cases_this_week": resp[i].string,
                    "number_of_residents_with_a_new_positive_covid_19_test_result_who_are_reinfected": feat[i].int,
                    "number_of_residents_with_a_new_positive_covid_19_test_result_who_are_reinfected_and_asymptomatic": resp[i].int,
                    "number_of_residents_with_a_new_positive_covid_19_test_result_who_are_reinfected_and_symptomatic": resp[i].int,
                    "number_of_residents_with_new_influenza": resp[i].int,
                    "number_of_residents_with_acute_respiratory_illness_symptoms_excluding_covid_19_and_or_influenza": resp[i].int,
                    "number_of_residents_with_confirmed_coinfection_with_influenza_and_covid_19": resp[i].int,
                    "number_of_staff_and_or_personnel_with_a_new_positive_covid_19_test_result_who_are_reinfected": resp[i].int,
                    "number_of_staff_and_or_personnel_with_a_new_positive_covid_19_test_result_who_are_reinfected_and_symptomatic": resp[i].int,
                    "number_of_staff_and_or_personnel_with_a_new_positive_covid_19_test_result_who_are_reinfected_and_asymptomatic": resp[i].int,
                    "number_of_staff_and_or_personnel_with_new_influenza": resp[i].int,
                    "number_of_staff_and_or_personnel_with_acute_respiratory_illness_symptoms_excluding_covid_19_and_or_influenza": resp[i].int,
                    "number_of_staff_and_or_personnel_with_confirmed_coinfection_with_influenza_and_covid_19": resp[i].int,
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
