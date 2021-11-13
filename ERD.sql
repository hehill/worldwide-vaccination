-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/Mitut6
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "country" (
    "iso_code" VARCHAR   NOT NULL,
    "country_name" VARCHAR   NOT NULL,
    "continent" VARCHAR   NOT NULL,
    "population" INT,
    "population_density" INT,
    "gdp_per_capita" INT,
    "extreme_poverty" INT,
    "life_expectancy" INT,
    "handwashing_facilities" INT,
    "hospital_beds_per_thousand" INT,
    CONSTRAINT "pk_country" PRIMARY KEY (
        "iso_code"
     )
);

CREATE TABLE "cases" (
    "iso_code" VARCHAR   NOT NULL,
    "date" VARCHAR   NOT NULL,
    "total_cases_per_million" INT,
    "new_cases_per_million" INT,
    "new_cases_smoothed_per_million" INT
);

CREATE TABLE "deaths" (
    "iso_code" VARCHAR   NOT NULL,
    "date" VARCHAR   NOT NULL,
    "total_deaths_per_million" INT,
    "new_deaths_per_million" INT,
    "new_deaths_smoothed_per_million" INT,
    "excess_mortality_cumulative_per_million" INT
);

CREATE TABLE "vaccines" (
    "iso_code" VARCHAR   NOT NULL,
    "date" VARCHAR   NOT NULL,
    "people_vaccinated_per_hundred" INT,
    "people_fully_vaccinated_per_hundred" INT,
    "total_boosters_per_hundred" INT,
    "new_vaccinations_smoothed_per_million" INT
);

CREATE TABLE "policy" (
    "iso_code" VARCHAR   NOT NULL,
    "date" VARCHAR   NOT NULL,
    "stringency_index" INT
);

ALTER TABLE "cases" ADD CONSTRAINT "fk_cases_iso_code" FOREIGN KEY("iso_code")
REFERENCES "country" ("iso_code");

ALTER TABLE "deaths" ADD CONSTRAINT "fk_deaths_iso_code" FOREIGN KEY("iso_code")
REFERENCES "country" ("iso_code");

ALTER TABLE "vaccines" ADD CONSTRAINT "fk_vaccines_iso_code" FOREIGN KEY("iso_code")
REFERENCES "country" ("iso_code");

ALTER TABLE "policy" ADD CONSTRAINT "fk_policy_iso_code" FOREIGN KEY("iso_code")
REFERENCES "country" ("iso_code");

