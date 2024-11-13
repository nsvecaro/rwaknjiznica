<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <div class="text-h5">Pretraga knjige</div>
      </q-card-section>

      <q-card-section>
        <q-input
          v-model="searchTitle"
          placeholder="Unesi naslov knjige"
          @input="searchBook"
          outlined
          clearable
        />
      </q-card-section>

      <q-card-section>
        <q-table
          v-if="filteredBooks.length > 0"
          :rows="filteredBooks"
          :columns="columns"
          row-key="id"
          flat
        />
        <div v-else class="text-subtitle1 text-grey-7">
          Knjiga nije pronađena.
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const allBooks = [
    { id: 1, title: 'Biblija', author: 'Anđeli Čuvari' },
    { id: 2, title: 'Zločin i kazna', author: 'Fjodor Dostojevski' },
    { id: 3, title: 'Kuća', author: 'Ludwig Bauer' },
    { id: 4, title: 'Pupčana Vrpca', author: 'Lucija Tunković' },
    { id: 5, title: 'Priče iz davnine', author: 'Ivana Brlić-Mažuranić' },
    { id: 6, title: '1984', author: 'George Orwell' },
    { id: 7, title: 'Mali princ', author: 'Antoine de Saint-Exupéry' },
    { id: 8, title: 'Ana Karenjina', author: 'Lav Tolstoj' },
    { id: 9, title: 'Harry Potter i Kamen mudraca', author: 'J.K. Rowling' },
    { id: 10, title: 'Lovac u žitu', author: 'J.D. Salinger' },
    { id: 11, title: 'Gospodar prstenova', author: 'J.R.R. Tolkien' },
    { id: 12, title: 'Alkemičar', author: 'Paulo Coelho' },
    { id: 13, title: 'Bratstvo', author: 'John Grisham' },
    { id: 14, title: 'Ponos i predrasude', author: 'Jane Austen' },
    { id: 15, title: 'Rat i mir', author: 'Lav Tolstoj' },
    ];

    const columns = [
      { name: 'id', label: 'ID', field: 'id', align: 'left' },
      { name: 'title', label: 'Naslov', field: 'title', align: 'left' },
      { name: 'author', label: 'Autor', field: 'author', align: 'left' },
    ];

    const searchTitle = ref('');
    
    const filteredBooks = computed(() => {
      return allBooks.filter((book) =>
        book.title.toLowerCase().includes(searchTitle.value.toLowerCase())
      );
    });

    const searchBook = () => {
      if (searchTitle.value.trim() === '') {
        return allBooks;
      }
    };

    return {
      searchTitle,
      columns,
      filteredBooks,
      searchBook,
    };
  },
};
</script>
