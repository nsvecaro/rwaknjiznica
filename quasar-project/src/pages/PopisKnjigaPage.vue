<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <div class="text-h5">Popis svih knjiga</div>
      </q-card-section>
      <q-card-section>
        <q-table
          :rows="allBooks"
          :columns="columns"
          row-key="id"
          flat
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  setup() {
    const allBooks = [
      { id: 1, title: 'Biblija', author: 'Anđeli Čuvari' },
      { id: 2, title: 'Zločin i kazna', author: 'Fjodor Dostojevski' },
      { id: 3, title: 'Kuća', author: 'Ludwig Bauer' },
      { id: 4, title: 'Pupčana Vrpca', author: 'Lucija Tunković' },
      { id: 5, title: 'Priče iz davnine', author: 'Ivana Brlić-Mažuranić' },
    ];

    const columns = [
      { name: 'id', label: 'ID', field: 'id', align: 'left' },
      { name: 'title', label: 'Naslov', field: 'title', align: 'left' },
      { name: 'author', label: 'Autor', field: 'author', align: 'left' },
    ];

    return {
      allBooks,
      columns,
    };
  },
};
</script>
