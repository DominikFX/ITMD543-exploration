<template>
  <div class="card task-card h-100 border-0 shadow-sm">
    <div class="card-body d-flex flex-column">
      <div class="d-flex justify-content-between align-items-start mb-1">
        <h3 class="h6 mb-1">{{ task.title }}</h3>
        <span class="badge" :class="priorityClass">
          {{ task.priority }}
        </span>
      </div>

      <p class="small mb-1 text-muted">
        {{ task.type }} · {{ task.zone }} zone
      </p>

      <p class="small mb-2">
        <strong>Due:</strong> {{ task.due }}
      </p>

      <div class="mt-auto d-flex justify-content-between align-items-center pt-1 small text-muted">
        <span class="badge bg-light text-muted border small">
          {{ task.bucketLabel }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  task: {
    type: Object,
    required: true
  }
});

const priorityClass = computed(() => {
  if (props.task.priority === 'High') return 'bg-danger-subtle text-danger-emphasis';
  if (props.task.priority === 'Medium') return 'bg-warning-subtle text-warning-emphasis';
  return 'bg-secondary-subtle text-secondary-emphasis';
});
</script>