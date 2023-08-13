<script setup>
import {Link} from '@inertiajs/vue3'
import {Alert20Regular} from '@vicons/fluent'

</script>
<template>
  <div>
    <h1>Welcome To Adonis Backoffices</h1>
    <inertia-link href="/admin/login">Home</inertia-link>
      <Nbuton>Wuil <NIcon size="40"><Alert20Regular/></NIcon></Nbuton>
  </div>
</template>

<script>
import DefaultLayout from '@/Layouts/Default'
  export default {
    layout: DefaultLayout
  }
</script>