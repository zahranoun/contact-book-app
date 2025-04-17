<template>
  <div>
    <h1>Contact List</h1>
    <router-link to="/new">➕ Add New Contact</router-link>
    <ul>
      <li v-for="contact in contacts" :key="contact.id">
        <router-link :to="`/contact/${contact.id}`">{{ contact.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getContacts } from "../contacts";

const contacts = ref([]);

onMounted(() => {
  contacts.value = getContacts();
});
</script>
