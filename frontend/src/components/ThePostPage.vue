<template>
  <div class=" col-6 offset-3 col-sm-4 offset-sm-4 mb-5 ">
    <div class="card  ">
      <header class="card-header bg-white border-0" style="height: 35px;">
        <div class=" d-flex  justify-content-start">
          <span class="card-text  text-muted me-1 "><small>Posted By: </small></span>
          <p class="card-text  text-muted me-2   "><small>{{ author }}</small></p>
          <p class="card-text "><small id="time" class="text-muted">{{ time }}</small></p>
        </div>
      </header>
      <div class="card-body">
        <h3 class="card-title mb-4">{{ title }}</h3>

        <span class="card-text  fs-5 "> {{ body }}</span>
        <div class="mb-3">

          <ul class="nav justify-content-center shadow-none mt-5  bg-light rounded">
            <li class="nav-item  d-flex justify-content-between align-items-center">
              <a class="nav-link ">
                <font-awesome-icon icon="fa-solid fa-eye" /> Read
              </a>
              <span class="badge bg-primary rounded-pill">{{ seen }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script  >
export default {
  props: {
    author: String,
    time: String,
    title: String,
    body: String,
    seen: String
  }
}

</script>