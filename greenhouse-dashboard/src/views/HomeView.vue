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
            <p class="lead mb-0">
              Live snapshot of the Illinois Tech U-Farm environment, beds, and tasks.
            </p>
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
                    <p class="fs-4 fw-semibold mb-0">
                      {{ currentConditions.temp }}°F
                    </p>
                    <p class="small opacity-75 mb-0">
                      Target {{ currentConditions.tempTarget }}
                    </p>
                  </div>
                  <div class="col-4">
                    <p class="text-uppercase small mb-1 opacity-75">Humidity</p>
                    <p class="fs-4 fw-semibold mb-0">
                      {{ currentConditions.humidity }}%
                    </p>
                    <p class="small opacity-75 mb-0">
                      Target {{ currentConditions.humidityTarget }}
                    </p>
                  </div>
                  <div class="col-4">
                    <p class="text-uppercase small mb-1 opacity-75">Vents</p>
                    <p class="fs-4 fw-semibold mb-0">
                      {{ currentConditions.vents }}
                    </p>
                    <p class="small opacity-75 mb-0">
                      Fans: {{ currentConditions.fans }}
                    </p>
                  </div>
                </div>

                <hr class="border-secondary my-3" />

                <div class="small d-flex flex-wrap justify-content-between">
                  <span>Last updated: {{ currentConditions.lastUpdated }}</span>
                  <span>Sensor location: {{ currentConditions.sensorLocation }}</span>
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
            <h2 class="h4 mb-1">{{ totalPlants }} plants</h2>
            <p class="small text-muted mb-3">
              Spread across beds: {{ bedNames.join(', ') }}
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
            <h2 class="h4 mb-1">
              {{ totalZones }} zones & {{ totalBeds }} beds
            </h2>
            <p class="small text-muted mb-3">
              {{ zoneTemperatureLine }}
            </p>
            <RouterLink to="/zones" class="btn btn-sm btn-outline-success">
              View zones
            </RouterLink>
          </div>
        </div>
      </div>

      <!-- Tasks -->
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <p class="text-uppercase small text-muted mb-1">Tasks</p>
            <h2 class="h4 mb-1">{{ totalTasks }} open tasks</h2>
            <p class="small text-muted mb-3">
              {{ highPriorityCount }} high priority,
              {{ lowPriorityCount }} low priority
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
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

import { plants } from '../data/plants';
import { zones } from '../data/zones';
import { tasks } from '../data/tasks';
import { currentConditions } from '../data/conditions';

const totalPlants = computed(() => plants.length);

const totalZones = computed(() => zones.length);

const bedNames = computed(() => {
  const set = new Set();
  zones.forEach((zone) => {
    if (Array.isArray(zone.beds)) {
      zone.beds.forEach((bed) => set.add(bed));
    }
  });
  return Array.from(set);
});

const totalBeds = computed(() => bedNames.value.length);

const zoneTemperatureLine = computed(() => {
  if (!zones.length) return 'No zones configured yet.';
  const zone = zones[0];
  return `${zone.name} zone is ${zone.tempRange}`;
});

const totalTasks = computed(() => tasks.length);

const highPriorityCount = computed(
  () => tasks.filter((t) => t.priority === 'High').length
);

const lowPriorityCount = computed(
  () => tasks.filter((t) => t.priority === 'Low').length
);
</script>