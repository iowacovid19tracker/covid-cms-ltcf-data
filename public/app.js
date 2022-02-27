(function () {
    var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) {
        var covidCols = [{
                id: "week_ending",
                dataType: tableau.dataTypeEnum.date
            },{
                id: "federal_provider_number",
                dataType: tableau.dataTypeEnum.string
            }, {
                id: "provider_name",
                dataType: tableau.dataTypeEnum.string
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
                id: "provider_state",
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
                id: "residents_weekly_suspected_covid_19",
                dataType: tableau.dataTypeEnum.int
            }, {
                id: "residents_total_suspected_covid_19",
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
                id: "Staff_weekly_confirmed_covid_19",
                dataType: tableau.dataTypeEnum.int
            }, {
               id: "staff_total_confirmed_covid_19",
                dataType: tableau.dataTypeEnum.int
            }, {
                id: "staff_weekly_suspected_covid_19",
                dataType: tableau.dataTypeEnum.int
            }, {
                id: "staff_total_suspected_covid_19",
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
            }, {
                id: "recent_percentage_of_current_residents_who_received_a_completed_covid_19_vaccination_at_any_time",
                dataType: tableau.dataTypeEnum.int
            }, {
                id: "percentage_of_current_residents_who_received_a_completed_covid_19_vaccination_at_any_time",
                dataType: tableau.dataTypeEnum.int
            }, {
                id: "percentage_of_current_residents_who_received_a_partial_covid_19_vaccination_at_any_time",
                dataType: tableau.dataTypeEnum.int
            }, {
                id: "recent_percentage_of_current_healthcare_personnel_who_received_a_completed_covid_19_vaccination_at_any_time-19_vaccination_at_any_time",
                dataType: tableau.dataTypeEnum.int
            }, { 
                id: "percentage_of_current_healthcare_personnel_who_received_a_completed_covid_19_vaccination_at_any_time",
                dataType: tableau.dataTypeEnum.int
            }, {
                id: "percentage_of_current_healthcare_personnel_who_received_a_partial_covid_19_vaccination_at_any_time-19_vaccination_at_any_time",
                dataType: tableau.dataTypeEnum.int
            }, {
                id: "recent_percentage_of_current_residents_with_a_completed_vaccination_who_received_a_covid_19_vaccine_booster_at_any_time",
                dataType: tableau.dataTypeEnum.int
            }, { 
                id: "percentage_of_current_residents_with_a_completed_vaccination_who_received_a_covid_19_vaccine_booster_at_any_time",
                dataType: tableau.dataTypeEnum.int
            }, {
                id: "recent_percentage_of_current_healthcare_personnel_with_a_completed_vaccination_who_received_a_covid_19_vaccine_booster_at_any_time",
                dataType: tableau.dataTypeEnum.int
            }, { 
                id: "percentage_of_current_healthcare_personnel_with_a_completed_vaccination_who_received_a_covid_19_vaccine_booster_at_any_time",
                dataType: tableau.dataTypeEnum.int
            }];

        var tableSchema = {
            id: "covid_cms_ltcf_data",
            alias: "COVID+ CMS LTCF Data",
            columns: covidCols
        };

        schemaCallback([tableSchema]);
     };

    myConnector.getData = function(table, doneCallback) {
        $.getJSON("https://data.cms.gov/data-api/v1/dataset/88265caf-7f05-4f34-bf4d-e99ae6398492/data", function(resp) {
            var feat = resp.features,
                tableData = [];

            // Iterate over the JSON object
            for (var i = 0, len = feat.length; i < len; i++) {
                tableData.push({
                    "week_ending": feat[i].date,
                    "federal_provider_number": feat[i].string,
                    "provider_name": feat[i].geometry,
                    "provider_address": feat[i].geometry,
                    "provider_city": feat[i].geometry,
                    "provider_state": feat[i].geometry,
                    "county": feat[i].geometry,
                    "submitted_data": feat[i].string,
                    "residents_weekly_admissions_covid_19": feat[i].int,
                    "residents_total_admissions_covid_19": feat[i].int,
                    "residents_weekly_confirmed_covid_19": feat[i].int,
                    "residents_total_confirmed_covid_19": feat[i].int,
                    "residents_weekly_suspected_covid_19": feat[i].int,
                    "residents_total_suspected_covid_19": feat[i].int,
                    "residents_weekly_all_deaths": feat[i].int,
                    "residents_total_all_deaths": feat[i].int,
                    "residents_weekly_covid_19_deaths": feat[i].int,
                    "residents_total_covid_19_deaths": feat[i].int,
                    "staff_weekly_confirmed_covid_19": feat[i].int,
                    "staff_total_confirmed_covid_19": feat[i].int,
                    "staff_weekly_suspected_covid_19": feat[i].int,
                    "staff_total_suspected_covid_19": feat[i].int,
                    "staff_weekly_covid_19_deaths": feat[i].int,
                    "staff_total_covid_19_deaths": feat[i].int,
                    "weekly_resident_confirmed_covid_19_cases_per_1_000_residents": feat[i].float,
                    "weekly_resident_covid_19_deaths_per_1_000_residents": feat[i].float,
                    "total_resident_confirmed_covid_19_cases_per_1_000_residents": feat[i].float,
                    "total_resident_covid_19_deaths_per_1_000_residents": feat[i].float,
                    "total_residents_covid_19_deaths_as_a_percentage_of_confirmed_covid_19_cases": feat[i].float,
                    "three_or_more_confirmed_covid_19_cases_this_week": feat[i].string,
                    "number_of_residents_with_a_new_positive_covid_19_test_result_who_are_reinfected": feat[i].int,
                    "number_of_residents_with_a_new_positive_covid_19_test_result_who_are_reinfected_and_asymptomatic": feat[i].int,
                    "number_of_residents_with_a_new_positive_covid_19_test_result_who_are_reinfected_and_symptomatic": feat[i].int,
                    "number_of_residents_with_new_influenza": feat[i].int,
                    "number_of_residents_with_acute_respiratory_illness_symptoms_excluding_covid_19_and_or_influenza": feat[i].int,
                    "number_of_residents_with_confirmed_coinfection_with_influenza_and_covid_19": feat[i].int,
                    "number_of_staff_and_or_personnel_with_a_new_positive_covid_19_test_result_who_are_reinfected": feat[i].int,
                    "number_of_staff_and_or_personnel_with_a_new_positive_covid_19_test_result_who_are_reinfected_and_symptomatic": feat[i].int,
                    "number_of_staff_and_or_personnel_with_a_new_positive_covid_19_test_result_who_are_reinfected_and_asymptomatic": feat[i].int,
                    "number_of_staff_and_or_personnel_with_new_influenza": feat[i].int,
                    "number_of_staff_and_or_personnel_with_acute_respiratory_illness_symptoms_excluding_covid_19_and_or_influenza": feat[i].int,
                    "number_of_staff_and_or_personnel_with_confirmed_coinfection_with_influenza_and_covid_19": feat[i].int,
                    "recent_percentage_of_current_residents_who_received_a_completed_covid_19_vaccination_at_any_time": feat[i].float,
                    "percentage_of_current_residents_who_received_a_completed_covid_19_vaccination_at_any_time": feat[i].float,
                    "percentage_of_current_residents_who_received_a_partial_covid_19_vaccination_at_any_time": feat[i].float,
                    "recent_percentage_of_current_healthcare_personnel_who_received_a_completed_covid_19_vaccination_at_any_time": feat[i].float,
                    "percentage_of_current_healthcare_personnel_who_received_a_completed_covid_19_vaccination_at_any_time": feat[i].gefloatometry,
                    "percentage_of_current_healthcare_personnel_who_received_a_partial_covid_19_vaccination_at_any_time": feat[i].float,
                    "recent_percentage_of_current_residents_with_a_completed_vaccination_who_received_a_covid_19_vaccine_booster_at_any_time": feat[i].float,
                    "percentage_of_current_residents_with_a_completed_vaccination_who_received_a_covid_19_vaccine_booster_at_any_time": feat[i].float,
                    "recent_percentage_of_current_healthcare_personnel_with_a_completed_vaccination_who_received_a_covid_19_vaccine_booster_at_any_time": feat[i].float,
                    "percentage_of_current_healthcare_personnel_with_a_completed_vaccination_who_received_a_covid_19_vaccine_booster_at_any_time": feat[i].float,
                });
            }

            table.appendRows(tableData);
            doneCallback();
        });
    };

    tableau.registerConnector(myConnector);

    // Create event listeners for when the user submits the form
    $(document).ready(function() {
        $("#submitButton").click(function() {
            tableau.connectionName = "CMS COVID-19 & Influenza+ Data for Long-Term Care Facilities"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();
