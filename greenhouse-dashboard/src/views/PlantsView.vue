<template>
  <section>
    <div class="d-flex flex-wrap justify-content-between align-items-center mb-2">
      <div>
        <h1 class="h4 mb-1">Plants</h1>
        <p class="small text-muted mb-0">
          Track each plant, harvest timing, and watering across all beds and zones.
        </p>
      </div>

      <div class="mt-2 mt-sm-0 text-sm-end">
        <div class="small text-muted">
          <span class="me-3">Total plants: <strong>{{ plantCount }}</strong></span>
          <span>Beds: <strong>{{ bedCount }}</strong></span>
        </div>
      </div>
    </div>

    <div class="d-flex flex-wrap align-items-center gap-2 mb-3">
      <span class="small text-muted me-1">Filter by bed:</span>

      <button type="button" class="btn btn-sm bed-filter-btn"
        :class="{ 'btn-success': selectedBed === 'all', 'btn-outline-success': selectedBed !== 'all' }"
        @click="selectedBed = 'all'">
        All beds
      </button>

      <button v-for="bed in uniqueBeds" :key="bed" type="button" class="btn btn-sm bed-filter-btn"
        :class="{ 'btn-success': selectedBed === bed, 'btn-outline-success': selectedBed !== bed }"
        @click="selectedBed = bed">
        {{ bed }}
      </button>
    </div>

    <div class="accent-section p-3 rounded-4">
      <div class="row g-3">
        <div v-for="plant in filteredPlants" :key="plant.id" class="col-md-6 col-lg-4">
          <PlantCard :plant="plant" />
        </div>

        <div v-if="filteredPlants.length === 0" class="col-12">
          <div class="alert alert-secondary mb-0">
            No plants found for the selected bed.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { plants as plantData } from '../data/plants';
import PlantCard from '../components/PlantCard.vue';

const selectedBed = ref('all');

const allPlants = plantData;

const uniqueBeds = computed(() => {
  const set = new Set(allPlants.map((p) => p.bed));
  return Array.from(set);
});

const filteredPlants = computed(() => {
  if (selectedBed.value === 'all') return allPlants;
  return allPlants.filter((p) => p.bed === selectedBed.value);
});

const plantCount = computed(() => allPlants.length);
const bedCount = computed(() => uniqueBeds.value.length);
</script>