<template>
  <div>
    <h1>{{ isEdit ? "Edit Contact" : "New Contact" }}</h1>
    <form @submit.prevent="save">
      <input v-model="contact.name" placeholder="Name" required />
      <input v-model="contact.email" placeholder="Email" required />
      <button type="submit">💾 Save</button>
    </form>
    <router-link to="/">🔙 Back to Contacts</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { addContact, updateContact, getContact } from "../contacts";

const route = useRoute();
const router = useRouter();
const contact = ref({ name: "", email: "" });
const isEdit = ref(false);

onMounted(() => {
  if (route.params.id) {
    const existing = getContact(route.params.id);
    if (existing) {
      contact.value = { ...existing };
      isEdit.value = true;
    }
  }
});

function save() {
  if (isEdit.value) {
    updateContact(contact.value);
  } else {
    addContact(contact.value);
  }
  router.push("/");
}
</script>
