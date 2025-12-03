# U-Farm Greenhouse Dashboard - ITMD543

## Project Description

A simple to use dashboard to view simple stats about the Greenhouse that is located at the U-Farm, here at Illinois Tech. The site features a way to track plants, tasks that need to be completed at the greenhouse, as well as monitor zones & beds that are located inside of the hoop-house. It features the following pages
- **Dashboard Page** that shows some basic statistics and serves as a home page for the project
- A **Plants Page** that contains the list of all the plants at the U-Farm along with information and levels received by the sensors all around the farm.
- **Zones Page** which lists general information about the different groups of beds found at the U-Farm. It helps to see some "vitals". 
- A **Tasks Page** to see all of the things that need to be done at the farm, or that require attention.

## Setup Instructions
To run, navgate inside the `greenhouse-dashboard` folder
```bash
cd greenhouse-dashboard
```

The install the dependecies:
```bash
npm install
```

You can either run locally in developer mode (follow the URL given in the terminal):
```bash
npm run dev
```

Or build the project:
```bash
npm run build
```

## Framework Used
The following were used in creation of the project:
- **Framework**: Vue 3 (Vue Router)
- **Styling**: Bootstrap 5 + custom `src/style.css`
- **Build tool:** Vite + Node

## Deployment URL
Site is hosted on **Azure Web Static Apps**:
- Live Link: https://gray-dune-02ce71610.3.azurestaticapps.net
