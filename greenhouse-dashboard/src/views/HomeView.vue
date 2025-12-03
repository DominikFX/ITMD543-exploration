<template>
  <section class="mb-4">
    <div class="hero-section mb-4">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="row align-items-center">
          <div class="col-md-7">
            <p class="text-uppercase small mb-1 text-light opacity-75">
              U-Farm Greenhouse
            </p>
            <h1 class="display-5 fw-bold mb-2">Greenhouse Dashboard</h1>
            <p class="lead mb-3">
              Live snapshot of the Illinois Tech U-Farm environment, beds, and tasks.
            </p>
            <div class="d-flex flex-wrap gap-2">
              <RouterLink to="/plants" class="btn btn-success btn-sm px-3">
                View plants
              </RouterLink>
              <RouterLink to="/tasks" class="btn btn-outline-light btn-sm px-3">
                View tasks
              </RouterLink>
              <RouterLink to="/zones" class="btn btn-outline-light btn-sm px-3">
                Zones overview
              </RouterLink>
            </div>
          </div>

          <div class="col-md-5 mt-3 mt-md-0">
            <div class="env-card card bg-dark bg-opacity-50 border-0 text-light">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <h2 class="h6 mb-0">Current Conditions</h2>
                  <span class="badge bg-success-subtle text-success-emphasis">
                    No issues
                  </span>
                </div>

                <div class="row text-center g-2">
                  <div class="col-4">
                    <p class="text-uppercase small mb-1 opacity-75">Temp</p>
                    <p class="fs-4 fw-semibold mb-0">72°F</p>
                    <p class="small opacity-75 mb-0">Target 70-75</p>
                  </div>
                  <div class="col-4">
                    <p class="text-uppercase small mb-1 opacity-75">Humidity</p>
                    <p class="fs-4 fw-semibold mb-0">62%</p>
                    <p class="small opacity-75 mb-0">Target 55-65</p>
                  </div>
                  <div class="col-4">
                    <p class="text-uppercase small mb-1 opacity-75">Vents</p>
                    <p class="fs-4 fw-semibold mb-0">Auto</p>
                    <p class="small opacity-75 mb-0">Fans: low</p>
                  </div>
                </div>

                <hr class="border-secondary my-3" />

                <div class="small d-flex flex-wrap justify-content-between">
                  <span>Last updated: 2 min ago</span>
                  <span>Sensor Location: Middle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="dashboard-summary">
    <div class="row g-3">
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <p class="text-uppercase small text-muted mb-1">Plants</p>
            <h2 class="h4 mb-1">14 plants</h2>
            <p class="small text-muted mb-3">
              3 near harvest, 2 need water
            </p>
            <RouterLink to="/plants" class="btn btn-sm btn-outline-success">
              Open list of plants
            </RouterLink>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <p class="text-uppercase small text-muted mb-1">Beds &amp; zones</p>
            <h2 class="h4 mb-1">3 zones</h2>
            <p class="small text-muted mb-3">
              North zone is ideal, Middle zone is too warm
            </p>
            <RouterLink to="/zones" class="btn btn-sm btn-outline-success">
              View zones
            </RouterLink>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <p class="text-uppercase small text-muted mb-1">Tasks</p>
            <h2 class="h4 mb-1">6 open tasks</h2>
            <p class="small text-muted mb-3">
              2 high priority, 4 low priority
            </p>
            <RouterLink to="/tasks" class="btn btn-sm btn-outline-success">
              Review tasks
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>