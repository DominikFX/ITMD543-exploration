<template>
  <section>
    <div class="d-flex flex-wrap justify-content-between align-items-center mb-1">
      <div>
        <h1 class="h4 mb-1">Tasks Checklist</h1>
        <p class="small text-muted mb-0">
          A list of tasks to help manage greenhouse maintenance.
        </p>
      </div>
    </div>
    <div class="accent-section p-3 rounded-4 mt-3">
      <div v-if="rawTasks.length > 0" class="vstack gap-2">
        <div v-for="task in rawTasks" :key="task.id" class="card task-card border-0 shadow-sm">
          <div class="card-body d-flex align-items-start">
            <input class="task-checkbox me-2" type="checkbox" />

            <div class="flex-grow-1">
              <div class="d-flex justify-content-between align-items-center mb-1">
                <span class="small fw-semibold">
                  {{ task.title }}
                </span>
                <span class="badge ms-2" :class="priorityBadgeClass(task.priority)">
                  {{ task.priority }}
                </span>
              </div>

              <p class="small mb-1 text-muted">
                {{ task.type }} · {{ task.zone }} zone
              </p>

              <p class="small mb-0">
                <strong>Due:</strong> {{ task.due }}
              </p>
            </div>

          </div>
        </div>
      </div>

      <p v-else class="small text-muted mb-0 fst-italic">
        No tasks available.
      </p>
    </div>
  </section>
</template>

<script setup>
import { tasks as rawTasks } from '../data/tasks';

const priorityBadgeClass = (priority) => {
  if (priority === 'High') return 'bg-danger-subtle text-danger-emphasis';
  if (priority === 'Medium') return 'bg-warning-subtle text-warning-emphasis';
  return 'bg-secondary-subtle text-secondary-emphasis';
};
</script>