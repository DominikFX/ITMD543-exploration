<template>
  <section>
    <div class="d-flex flex-wrap justify-content-between align-items-center mb-2">
      <div>
        <h1 class="h4 mb-1">Zones & Beds</h1>
        <p class="small text-muted mb-0">
          Information about the enviorment and setup for each zone.
        </p>
      </div>

      <div class="mt-2 mt-sm-0 text-sm-end">
        <div class="small text-muted">
          <span class="me-3">Zones: <strong>{{ zones.length }}</strong></span>
        </div>
      </div>
    </div>

    <div class="accent-section p-3 rounded-4">
      <div class="row g-3">
        <div v-for="zone in zones" :key="zone.id" class="col-md-6">
          <div class="card h-100 shadow-sm zone-card">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-start mb-1">
                <div>
                  <h2 class="h6 mb-1">{{ zone.name }}</h2>
                  <p class="small text-muted mb-1">
                    Beds: {{ zone.beds.join(', ') }}
                  </p>
                </div>
                <span class="badge bg-success-subtle text-success-emphasis">
                  Active
                </span>
              </div>

              <div class="row small mb-2">
                <div class="col-6">
                  <p class="mb-1">
                    <strong>Temp:</strong><br />
                    <span class="text-muted">{{ zone.tempRange }}</span>
                  </p>
                </div>
                <div class="col-6">
                  <p class="mb-1">
                    <strong>Humidity:</strong><br />
                    <span class="text-muted">{{ zone.humidityRange }}</span>
                  </p>
                </div>
              </div>

              <p class="small mb-0 text-muted">
                {{ zone.notes }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { zones } from '../data/zones';
</script>