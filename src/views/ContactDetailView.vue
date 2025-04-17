<template>
  <div v-if="contact">
    <h1>{{ contact.name }}</h1>
    <p>{{ contact.email }}</p>
    <router-link :to="`/edit/${contact.id}`">✏️ Edit</router-link>
    <button @click="remove">🗑️ Delete</button>
    <br /><br />
    <router-link to="/">🔙 Back to Contacts</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getContact, deleteContact } from "../contacts";

const route = useRoute();
const router = useRouter();
const contact = ref(null);

onMounted(() => {
  contact.value = getContact(route.params.id);
});

function remove() {
  deleteContact(contact.value.id);
  router.push("/");
}
</script>
