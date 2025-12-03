<template>
  <section>
    <div class="d-flex flex-wrap justify-content-between align-items-center mb-2">
      <div>
        <h1 class="h4 mb-1">About this dashboard</h1>
        <p class="small text-muted mb-0">
          Simple greenhouse overview built as a Vue.js front-end assignment.
        </p>
      </div>

      <div class="mt-2 mt-sm-0 text-sm-end">
        <div class="small text-muted">
          <span class="me-3">
            Framework: <strong>Vue 3</strong>
          </span>
          <span>
            UI: <strong>Bootstrap 5</strong>
          </span>
        </div>
      </div>
    </div>

    <div class="accent-section p-3 rounded-4">
      <div class="row g-3">
        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
              <h2 class="h6 mb-2">Project overview</h2>
              <p class="small text-muted mb-2">
                This dashboard is a mock control panel for a small hoop house / greenhouse. It gives a single-page view of environmental conditions, plants, zones, and daily tasks.
              </p>
              <p class="small mb-0">
                The data is static and hard-coded; the focus is on front-end structure, routing, layout, and component design rather than live sensors or a backend API.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
              <h2 class="h6 mb-2">Pages in this app</h2>
              <ul class="small mb-0 text-muted ps-3">
                <li class="mb-1">
                  <strong>Dashboard:</strong> hero image, current temperature, humidity, and quick summary cards for plants, zones, and tasks.
                </li>
                <li class="mb-1">
                  <strong>Plants:</strong> list of crops by bed, with harvest progress and last watered info.
                </li>
                <li class="mb-1">
                  <strong>Zones:</strong> zones and beds, with environment notes per zone.
                </li>
                <li class="mb-1">
                  <strong>Tasks:</strong> greenhouse checklist for watering, transplanting, and harvest-related tasks.
                </li>
                <li>
                  <strong>About:</strong> this explanation page describing structure and technology choices.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card h-100 border-0 shadow-sm">
            <div class="card-body">
              <h2 class="h6 mb-2">Tech & structure</h2>
              <ul class="small mb-2 text-muted ps-3">
                <li class="mb-1">
                  <strong>Framework:</strong> Vue 3 with the
                  <code>&lt;script setup&gt;</code> syntax.
                </li>
                <li class="mb-1">
                  <strong>Routing:</strong> Vue Router with separate views for each page.
                </li>
                <li class="mb-1">
                  <strong>Styling:</strong> Bootstrap 5 plus a single global <code>style.css</code> for custom tweaks and accents.
                </li>
                <li class="mb-1">
                  <strong>Layout:</strong> shared navbar and footer, content rendered via <code>&lt;RouterView&gt;</code> inside a container.
                </li>
                <li>
                  <strong>Deployment:</strong> Built as a static front-end app suitable for hosting on a cloud/static site provider.
                </li>
              </ul>

              <p class="small mb-0 text-muted">
                This project is intended to demonstrate component structure, reusable styling, and basic UX decisions in a small, focused front-end app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>