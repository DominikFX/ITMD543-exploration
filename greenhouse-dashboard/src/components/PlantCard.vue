<template>
  <div class="card h-100 shadow-sm plant-card">
    <div class="card-body d-flex flex-column">
      <div class="d-flex justify-content-between align-items-start mb-1">
        <div>
          <h3 class="h6 mb-1">{{ plant.name }}</h3>
          <p class="small text-muted mb-1">
            Bed {{ plant.bed }} - {{ plant.zone }} zone
          </p>
        </div>
        <span v-if="plant.status === 'Healthy'" class="badge bg-success-subtle text-success-emphasis">
          Healthy
        </span>
        <span v-else class="badge bg-warning-subtle text-warning-emphasis">
          {{ plant.status }}
        </span>
      </div>

      <p class="small mb-2">
        <strong>Light:</strong> {{ plant.light }} ·
        <strong>Water:</strong> {{ plant.water }}
      </p>

      <div class="mb-2">
        <div class="d-flex justify-content-between small mb-1">
          <span>Harvest progress</span>
          <span>{{ harvestPercent }}%</span>
        </div>
        <div class="progress progress-sm">
          <div class="progress-bar bg-success" role="progressbar" :style="{ width: harvestPercent + '%' }"
            :aria-valuenow="harvestPercent" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <p class="small text-muted mb-0">
          ~{{ plant.daysUntilHarvest }} days until harvest
        </p>
      </div>

      <div class="mt-auto d-flex justify-content-between align-items-center pt-2">
        <span class="small text-muted">
          Last watered: {{ plant.lastWatered }}
        </span>

        <RouterLink class="btn btn-sm btn-outline-success" :to="`/plants/${plant.id}`">
          Details
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { computed } from 'vue';

const props = defineProps({
  plant: {
    type: Object,
    required: true
  }
});

const harvestPercent = computed(() => {
  if (!props.plant.totalDays || !props.plant.daysUntilHarvest) 
    return 0;
  const done = props.plant.totalDays - props.plant.daysUntilHarvest;
  const pct = (done / props.plant.totalDays) * 100;
  return Math.max(0, Math.min(100, Math.round(pct)));
});
</script>