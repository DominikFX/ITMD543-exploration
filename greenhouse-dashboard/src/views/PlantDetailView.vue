<template>
  <section v-if="plant">
    <h1 class="h3 mb-2">{{ plant.name }}</h1>
    <p class="text-muted mb-3">
      Bed: {{ plant.bed }} · Zone: {{ plant.zone }}
    </p>

    <div class="mb-3">
      <span class="badge bg-success me-2" v-if="plant.status === 'Healthy'">Healthy</span>
      <span class="badge bg-warning text-dark me-2" v-else>{{ plant.status }}</span>
      <span class="badge bg-light text-dark">Light: {{ plant.light }}</span>
      <span class="badge bg-light text-dark ms-2">Water: {{ plant.water }}</span>
    </div>

    <h2 class="h5 mt-4">Notes</h2>
    <p>{{ plant.notes }}</p>

    <h2 class="h5 mt-4">Next actions</h2>
    <ul>
      <li v-for="(action, index) in plant.nextActions" :key="index">
        {{ action }}
      </li>
    </ul>

    <RouterLink to="/plants" class="btn btn-outline-secondary mt-3">
      Back to plants
    </RouterLink>
  </section>

  <section v-else>
    <p>Plant not found.</p>
    <RouterLink to="/plants" class="btn btn-outline-secondary mt-3">
      Back to plants
    </RouterLink>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { plants } from '../data/plants';
import { RouterLink } from 'vue-router';

const route = useRoute();

const plant = computed(() =>
  plants.find((p) => p.id === route.params.id)
);
</script>