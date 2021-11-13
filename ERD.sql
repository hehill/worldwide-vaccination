-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/Mitut6
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "country" (
    "iso_code" VARCHAR   NOT NULL,
    "country_name" VARCHAR   NOT NULL,
    "continent" VARCHAR   NOT NULL,
    "population" INT   NOT NULL,
    "population_density" INT   NOT NULL,
    "gdp_per_capita" INT   NOT NULL,
    "extreme_poverty" INT   NOT NULL,
    "life_expectancy" INT   NOT NULL,
    "handwashing_facilities" INT   NOT NULL,
    "hospital_beds_per_thousand" INT   NOT NULL,
    CONSTRAINT "pk_country" PRIMARY KEY (
        "iso_code"
     )
);

CREATE TABLE "cases" (
    "iso_code" VARCHAR   NOT NULL,
    "date" VARCHAR   NOT NULL,
    "total_cases_per_million" INT   NOT NULL,
    "new_cases_per_million" INT   NOT NULL,
    "new_cases_smoothed_per_million" INT   NOT NULL
);

CREATE TABLE "deaths" (
    "iso_code" VARCHAR   NOT NULL,
    "date" VARCHAR   NOT NULL,
    "total_deaths_per_million" INT   NOT NULL,
    "new_deaths_per_million" INT   NOT NULL,
    "new_deaths_smoothed_per_million" INT   NOT NULL,
    "excess_mortality_cumulative_per_million" INT   NOT NULL
);

CREATE TABLE "vaccines" (
    "iso_code" VARCHAR   NOT NULL,
    "date" VARCHAR   NOT NULL,
    "people_vaccinated_per_hundred" INT   NOT NULL,
    "people_fully_vaccinated_per_hundred" INT   NOT NULL,
    "total_boosters_per_hundred" INT   NOT NULL,
    "new_vaccinations_smoothed_per_million" INT   NOT NULL
);

CREATE TABLE "policy" (
    "iso_code" VARCHAR   NOT NULL,
    "date" VARCHAR   NOT NULL,
    "stringency_index" INT   NOT NULL
);

ALTER TABLE "cases" ADD CONSTRAINT "fk_cases_iso_code" FOREIGN KEY("iso_code")
REFERENCES "country" ("iso_code");

ALTER TABLE "deaths" ADD CONSTRAINT "fk_deaths_iso_code" FOREIGN KEY("iso_code")
REFERENCES "country" ("iso_code");

ALTER TABLE "vaccines" ADD CONSTRAINT "fk_vaccines_iso_code" FOREIGN KEY("iso_code")
REFERENCES "country" ("iso_code");

ALTER TABLE "policy" ADD CONSTRAINT "fk_policy_iso_code" FOREIGN KEY("iso_code")
REFERENCES "country" ("iso_code");

