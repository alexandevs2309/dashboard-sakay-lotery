<template>
    <div class="p-4">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-bold">Gestión de Sorteos</h2>
        <Button label="Crear Sorteo" icon="pi pi-plus" class="p-button-success" @click="showAddSorteoDialog = true" />
      </div>
  
      <DataTable :value="sorteos" class="shadow-lg" :paginator="true" :rows="10" responsiveLayout="scroll">
        <template #header>
          <div class="flex justify-between items-center">
            <span class="text-lg font-bold">Listado de Sorteos</span>
            <span>
              <InputText v-model="searchQuery" placeholder="Buscar..." class="p-inputtext-sm" />
            </span>
          </div>
        </template>
        <Column field="id" header="ID" />
        <Column field="nombre" header="Nombre" />
        <Column field="fecha" header="Fecha" />
        <Column field="premio" header="Premio" />
        <Column header="Acciones" :body="actionTemplate" />
      </DataTable>
  
      <!-- Diálogo para crear sorteo -->
      <Dialog header="Crear Sorteo" v-model:visible="showAddSorteoDialog" modal class="w-1/3">
        <!-- Formulario de creación de sorteo aquí -->
      </Dialog>
    </div>
  </template>
  
  <script setup>
  import Button from 'primevue/button';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import { ref } from 'vue';
  
  const searchQuery = ref('');
  const sorteos = ref([]);
  const showAddSorteoDialog = ref(false);
  
  const actionTemplate = () => {
    return h('Button', {
      label: 'Ver',
      icon: 'pi pi-eye',
      class: 'p-button-info',
      onClick: viewSorteo,
    });
  };
  
  function viewSorteo(rowData) {
    console.log('Ver sorteo', rowData);
  }
  </script>
  