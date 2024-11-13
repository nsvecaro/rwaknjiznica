<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <div class="text-h5">Prijava</div>
      </q-card-section>

      <q-card-section>
        <q-input
          v-model="credentials.username"
          label="Korisničko ime"
          filled
          class="q-mb-md"
        />

        <q-input
          v-model="credentials.password"
          label="Lozinka"
          type="password"
          filled
          class="q-mb-md"
        />
      </q-card-section>

      <q-card-section>
        <q-btn
          label="Potvrdi"
          color="primary"
          @click="login"
          class="full-width"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const credentials = ref({
      username: '',
      password: '',
    });

    const login = () => {
      if (!credentials.value.username || !credentials.value.password) {
        alert('Molimo ispunite sva polja.');
        return;
      }
      alert(`Prijava uspješna za korisnika: ${credentials.value.username}`);
    };

    return {
      credentials,
      login,
    };
  },
};
</script>