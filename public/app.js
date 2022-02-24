(function () {
    var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) {var cols = [{
        id: "week_ending",
        alias: "Week Ending"
        dataType: tableau.dataTypeEnum.date
    }, {
        id: "federal_provider_number",
        alias: "Federal Provider Number",
        dataType: tableau.dataTypeEnum.string
    }, {
        id: "provider_name",
        alias: "Provider Name",
        dataType: tableau.dataTypeEnum.string
    }, {
          id: "provider_city",
        alias: "Provider City",
        dataType: tableau.dataTypeEnum.string
    }, {  
        id: "provider_state",
        alias: "Provider State",
        dataType: tableau.dataTypeEnum.string
    }, {
        id: "provider_zip_code",
        alias: "Provider Zip Code",
        dataType: tableau.dataTypeEnum.string
    }, {
        id: "provider_phone_number",
        alias: "Provider Phone Number",
        dataType: tableau.dataTypeEnum.string
    }, {
        id: "provider_state",
        alias: "Provider State",
        dataType: tableau.dataTypeEnum.string
    }, {
        id: "county",
        alias: "County",
        dataType: tableau.dataTypeEnum.string
    }, {
        id: "county",
        alias: "County",
        dataType: tableau.dataTypeEnum.string
    }, {
        id: "submitted_data",
        dataType: tableau.dataTypeEnum.string
    }, {
        id: "residents_weekly_admissions_covid_19",
        alias: "Residents - Weekly Admissions COVID-19",
        dataType: tableau.dataTypeEnum.int
    }, {
        id: "residents_total_admissions_covid_19",
        alias: "Residents - Total Admissions COVID-19",
        dataType: tableau.dataTypeEnum.int
    }, {
        id: "residents_weekly_confirmed_covid_19",
        alias: "Residents - Weekly Confirmed COVID-19",
        dataType: tableau.dataTypeEnum.int
    }, {
        id: "residents_total_confirmed_covid_19",
        alias: "Residents - Total Confirmed COVID-19",
        dataType: tableau.dataTypeEnum.int
    }, {
        id: "residents_weekly_suspected_covid_19",
        alias: "Residents - Weekly Suspected COVID-19",
        dataType: tableau.dataTypeEnum.int
    }, {
        id: "residents_total_suspected_covid_19",
        alias: "Residents - Total Suspected COVID-19",
        dataType: tableau.dataTypeEnum.int
    }, {
        id: "residents_weekly_all_deaths",
        alias: "Residents - Weekly All Deaths",
        dataType: tableau.dataTypeEnum.int
    }, {
        id: "residents_total_all_deaths",
        alias: "Residents - Total All Deaths",
        dataType: tableau.dataTypeEnum.int
    }, {
        id: "residents_weekly_covid_19_deaths",
        alias: "Residents - Weekly COVID-19 Deaths",
        dataType: tableau.dataTypeEnum.int
    }, {
        id: "residents_total_covid_19_deaths",
        alias: "Residents - Total COVID-19 Deaths",
        dataType: tableau.dataTypeEnum.int
    }, {
        id: "Staff_weekly_confirmed_covid_19",
        alias: "Staff - Weekly Confirmed COVID-19",
        dataType: tableau.dataTypeEnum.int
    }, {
        id: "staff_total_confirmed_covid_19",
        alias: "Staff - Total Confirmed COVID-19",
        dataType: tableau.dataTypeEnum.int
    }, {
        id: "Staff_weekly_suspected_covid_19",
        alias: "Staff - Weekly Suspected COVID-19",
        dataType: tableau.dataTypeEnum.int
    }, {
        id: "staff_total_suspected_covid_19",
        alias: "Staff - Total Suspected COVID-19",
        dataType: tableau.dataTypeEnum.int
    }, {
        id: "staff_weekly_covid_19_deaths",
        alias: "Staff - Weekly COVID-19 Deaths",
        dataType: tableau.dataTypeEnum.int
    }, {
        id: "staff_total_covid_19_deaths",
        alias: "Staff - Total COVID-19 Deaths",
        dataType: tableau.dataTypeEnum.int
    }, {
        id: "weekly_resident_confirmed_covid_19_cases_per_1_000_residents",
        alias: "Residents - Weekly Case Rate of Confirmed COVID-19 Cases Per 1000 Residents",
        dataType: tableau.dataTypeEnum.float
    }, {
        id: "weekly_resident_covid_19_deaths_per_1_000_residents",
        alias: "Residents - Weekly Death Rate of Confirmed COVID-19 Deaths Per 1000 Residents",
        dataType: tableau.dataTypeEnum.float
    }, {
        id: "total_resident_confirmed_covid_19_cases_per_1_000_residents",
        alias: "Residents - Total Case Rate of Confirmed COVID-19 Cases Per 1000 Residents",
        dataType: tableau.dataTypeEnum.float
    }, {
        id: "total_resident_covid_19_deaths_per_1_000_residents",
        alias: "Residents - Total Death Rate of Confirmed COVID-19 Deaths Per 1000 Residents",
        dataType: tableau.dataTypeEnum.float
    }, {
        id: "total_residents_covid_19_deaths_as_a_percentage_of_confirmed_covid_19_cases",
        alias: "Residents - Total Death Rate as a Percentage of Confirmed COVID-19 Cases",
        dataType: tableau.dataTypeEnum.float
    }, {
        id: "three_or_more_confirmed_covid_19_cases_this_week",
        alias: "Three or More Confirmed COVID-19 Cases This week",
        dataType: tableau.dataTypeEnum.string
    }, {
        id: "number_of_residents_with_a_new_positive_covid_19_test_result_who_are_reinfected",
        alias: "Residents - Weekly Reinfections with COVID-19",
        dataType: tableau.dataTypeEnum.int
    }, {
        id: "number_of_residents_with_a_new_positive_covid_19_test_result_who_are_reinfected_and_asymptomatic",
        alias: "Residents - Weekly Reinfected & Asymptomatic",
        dataType: tableau.dataTypeEnum.int
    }, {
        id: "number_of_residents_with_a_new_positive_covid_19_test_result_who_are_reinfected_and_symptomatic",
        alias: "Residents - Weekly Reinfected & Symptomatic",
        dataType: tableau.dataTypeEnum.int
    }, {
        id: "number_of_residents_with_new_influenza",
        alias: "Residents - Weekly Confirmed Influenza",
        dataType: tableau.dataTypeEnum.int
    }, {
        id: "number_of_residents_with_acute_respiratory_illness_symptoms_excluding_covid_19_and_or_influenza",
        alias: "Residents - Weekly ILI (Not COVID-19 or Influenza)",
        dataType: tableau.dataTypeEnum.int
    }, {
        id: "number_of_residents_with_confirmed_coinfection_with_influenza_and_covid_19",
        alias: "Residents - Weekly Coinfections of COVID-19 & Influenza",
        dataType: tableau.dataTypeEnum.int
    }, {
        id: "number_of_staff_and_or_personnel_with_a_new_positive_covid_19_test_result_who_are_reinfected",
        alias: "Staff - Weekly Reinfections with COVID-19",
        dataType: tableau.dataTypeEnum.int
    }, {
        id: "number_of_staff_and_or_personnel_with_a_new_positive_covid_19_test_result_who_are_reinfected_and_symptomatic",
        alias: "Staff - Weekly Reinfected & Symptomatic",
        dataType: tableau.dataTypeEnum.int
    }, {
        id: "number_of_staff_and_or_personnel_with_a_new_positive_covid_19_test_result_who_are_reinfected_and_asymptomatic",
        alias: "Staff - Weekly Reinfected & Asymptomatic",
        dataType: tableau.dataTypeEnum.int
    }, {
        id: "number_of_staff_and_or_personnel_with_new_influenza",
        alias: "Staff - Weekly Confirmed Influenza",
        dataType: tableau.dataTypeEnum.int
    }, {
        id: "number_of_staff_and_or_personnel_with_acute_respiratory_illness_symptoms_excluding_covid_19_and_or_influenza",
        alias: "Staff - Weekly ILI (Not COVID-19 or Influenza)",
        dataType: tableau.dataTypeEnum.int
    }, {
        id: "number_of_staff_and_or_personnel_with_confirmed_coinfection_with_influenza_and_covid_19",
        alias: "Staff - Weekly Coinfections of COVID-19 & Influenza",
        dataType: tableau.dataTypeEnum.int
    }, {
        id: "recent_percentage_of_current_residents_who_received_a_completed_covid_19_vaccination_at_any_time",
        alias: "Residents - Recent Completed COVID-19 Series",
        dataType: tableau.dataTypeEnum.int
    }, {
        id: "percentage_of_current_residents_who_received_a_completed_covid_19_vaccination_at_any_time",
        alias: "Residents - Completed COVID-19 Series",
        dataType: tableau.dataTypeEnum.int
    }, {
        id: "percentage_of_current_residents_who_received_a_partial_covid_19_vaccination_at_any_time",
        alias: "Residents - Partial COVID-19 Series",
        dataType: tableau.dataTypeEnum.int
    }, {
        id: "recent_percentage_of_current_healthcare_personnel_who_received_a_completed_covid_19_vaccination_at_any_time-19_vaccination_at_any_time",
        alias: "Staff - Recent Completed COVID-19 Series",
        dataType: tableau.dataTypeEnum.int
    }, { 
        id: "percentage_of_current_healthcare_personnel_who_received_a_completed_covid_19_vaccination_at_any_time",
        alias: "Staff - Completed COVID-19 Series",
        dataType: tableau.dataTypeEnum.int
    }, {
        id: "percentage_of_current_healthcare_personnel_who_received_a_partial_covid_19_vaccination_at_any_time-19_vaccination_at_any_time",
        alias: "Staff - Partial COVID-19 Series",
        dataType: tableau.dataTypeEnum.int
    }, {id: "recent_percentage_of_current_healthcare_personnel_who_received_a_completed_covid_19_vaccination_at_any_time-19_vaccination_at_any_time",
        alias: "Staff - Recent Completed COVID-19 Series",
        dataType: tableau.dataTypeEnum.int
    }, { 
        id: "percentage_of_current_healthcare_personnel_who_received_a_completed_covid_19_vaccination_at_any_time",
        alias: "Staff - Completed COVID-19 Series",
        dataType: tableau.dataTypeEnum.int
    }, {
        id: "recent_percentage_of_current_residents_with_a_completed_vaccination_who_received_a_covid_19_vaccine_booster_at_any_time",
        alias: "Residents - Recent COVID-19 Booster Recieved",
        dataType: tableau.dataTypeEnum.int
    }, { 
        id: "percentage_of_current_residents_with_a_completed_vaccination_who_received_a_covid_19_vaccine_booster_at_any_time",
        alias: "Residents - COVID-19 Booster Recieved",
        dataType: tableau.dataTypeEnum.int
    }, {
        id: "recent_percentage_of_current_healthcare_personnel_with_a_completed_vaccination_who_received_a_covid_19_vaccine_booster_at_any_time",
        alias: "Staff - Recent COVID-19 Booster Recieved",
        dataType: tableau.dataTypeEnum.int
    }, { 
        id: "percentage_of_current_healthcare_personnel_with_a_completed_vaccination_who_received_a_covid_19_vaccine_booster_at_any_time",
        alias: "Staff - COVID-19 Booster Recieved",
        dataType: tableau.dataTypeEnum.int
    }, {
    }];

    var tableSchema = {
        id: "earthquakeFeed",
        alias: "Earthquakes with magnitude greater than 4.5 in the last seven days",
        columns: cols
    };

    schemaCallback([tableSchema]);};

    myConnector.getData = function (table, doneCallback) {

    };

    tableau.registerConnector(myConnector);
})();
