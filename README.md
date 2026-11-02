# Global Olympic Sports Performance Analysis

An interactive Tableau analysis of Olympic performance (1992-2026), with two dashboards and a story, embedded in a Flask web app.

**Author:** Nandini Sethiya

## Problem
Medal, athlete and investment data are spread across separate files, so it is hard to compare nations and regions or judge the return on sports investment. This project brings them together in one interactive view.

## Dataset
Four CSV files related in Tableau on `noc_code` and `year`:

| File | Rows | Description |
|---|---|---|
| `medal_results.csv` | 910 | Medals, athletes sent, efficiency and investment level per country per Games |
| `athletes.csv` | 8,000 | Athlete records with sport category and medals |
| `games_summary.csv` | 18 | One row per Games (host, season, medals awarded) |
| `alltime_country_rankings.csv` | 60 | All-time medal totals and rank per country |

Covers 60 countries, 7 regions and 21 sport categories.

## What is built
- **Dashboard 1:** KPI cards, world medal map, medal trend, medals per athlete by sport category, and country medals with a Total/Gold/Silver/Bronze selector.
- **Dashboard 2:** Regional KPI cards, efficiency by region, investment vs medals bubble chart, host-country medals and a regional donut.
- **Story:** Two story points, Global Medal Performance and Regional Efficiency and Investment.
- **Filters:** Country, Year, Sport Category, Region, Host Country.
- **Calculated fields:** `KPI selector`, `KPI Value`, `Weighted Efficiency %`, `Efficiency check`.

## Key insights
- The United States (735), China (696) and Russia (429) lead all-time medals.
- Average medal efficiency is 31.8%; South America (49.6%) is the most efficient region.
- High-investment nations win more medals per entry (18.7) than Low (2.4), but are less efficient per athlete.

## Run the Flask app
```
pip install flask
python app.py
```
Open `http://127.0.0.1:5000`. Pages: `/` (home), `/dashboard`, `/story`.

## Links
- Story: https://public.tableau.com/app/profile/nandini.sethiya5900/viz/global_olympic_sports_performance_analytics/OLYMPICPERFORMANCESTORY?publish=yes
- Demo link:
  https://drive.google.com/file/d/1ZUveLNFejd0oSZ3FRbe0jbJsUP4dyx0p/view?usp=sharing

## Limitations
Static data (no live refresh), no year column in `athletes.csv`, and no forecasting.
