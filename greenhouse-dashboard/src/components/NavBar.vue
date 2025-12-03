<template>
  <header class="shadow-sm sticky-top">
    <nav class="navbar navbar-expand-md bg-body-tertiary">
      <div class="container">

        <RouterLink to="/" class="navbar-brand d-flex align-items-center gap-2">
          <div class="d-flex flex-column">
            <span class="fw-semibold">Greenhouse Dashboard</span>
            <span class="brand-subtitle text-muted">U-Farm at Illinois Tech</span>
          </div>
        </RouterLink>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar"
          aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="mainNavbar">
          <ul class="navbar-nav ms-auto mb-2 mb-md-0">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link">Dashboard</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/plants" class="nav-link">Plants</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/zones" class="nav-link">Zones</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/tasks" class="nav-link">Tasks</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>