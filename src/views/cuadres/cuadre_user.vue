<template>
    <div class="p-6 bg-gray-100">
      <!-- Botón Superior -->
      <div class="flex justify-start mb-4">
        <Button label="Manejar Efectivo" class="p-button-success" />
      </div>
  
      <!-- Resumen -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div class="col-span-3 lg:col-span-3 text-white rounded-md mt-0 border border-solid border-teal-400">
          <div class="col-span-3 lg:col-span-3 bg-blue-700 p-4 mb-0">
            <h1 class="text-lg font-semibold text-white">Resumen</h1>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-6 gap-4 text-center text-gray-800">
            <div>
              <h3 class="text-lg font-semibold">Loterías</h3>
              <p>51,430</p>
            </div>
            <div>
              <h3 class="text-lg font-semibold">Premios Reclamados</h3>
              <p>50</p>
            </div>
            <div>
              <h3 class="text-lg font-semibold">Premios Pendientes del día</h3>
              <p>50</p>
            </div>
            <div>
              <h3 class="text-lg font-semibold">Total Loterías</h3>
              <p>51,430</p>
            </div>
            <div>
              <h3 class="text-lg font-semibold">Comisión</h3>
              <p>$143</p>
            </div>
            <div>
              <h3 class="text-lg font-semibold">Balance</h3>
              <p>$1,287</p>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Sección de Estado General -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <!-- Gráfico -->
        <div class="text-white rounded-md p-4">
          <h3 class="text-lg font-semibold mb-4 bg-blue-700 text-white rounded-md p-4">Estado General</h3>
          <Chart type="bar" :data="chartData" :options="chartOptions" />
        </div>
  
        <!-- Tablas -->
        <div class="grid grid-cols-1 gap-4">
          <!-- Modal -->
          <Dialog v-model:visible="isDialogVisible" :modal="true" class="w-3/2" :closable="false">
            <template #header>
              <div class="flex justify-between items-center bg-gray-200 p-4">
                <h2 class="text-lg font-semibold">Jugada {{ selectedTicket.codigo }}</h2>
            </div>
            <Message severity="error">Cancelada</Message> 
          </template>
  
            <template #default>
              <div class="p-4">
                <!-- Tabla Detallada -->
                <table class="w-full border-collapse border border-gray-300 mb-6">
                  <thead class="bg-gray-200">
                    <tr>
                      <th class="border border-gray-300 p-2 text-left">Combinación</th>
                      <th class="border border-gray-300 p-2 text-left">Lotería</th>
                      <th class="border border-gray-300 p-2 text-left">Horario</th>
                      <th class="border border-gray-300 p-2 text-left">Fecha</th>
                      <th class="border border-gray-300 p-2 text-left">Monto</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(detalle, index) in selectedTicket.detalles" :key="index">
                      <td class="border border-gray-300 p-2">{{ detalle.combinacion }}</td>
                      <td class="border border-gray-300 p-2">{{ detalle.loteria }}</td>
                      <td class="border border-gray-300 p-2">{{ detalle.horario }}</td>
                      <td class="border border-gray-300 p-2">{{ detalle.fecha }}</td>
                      <td class="border border-gray-300 p-2">{{ detalle.monto }}</td>
                    </tr>
                  </tbody>
                </table>
  
                <!-- Detalles adicionales -->
                <div class="m-5">
                  <p class="mb-2"><strong>Creado por:</strong> {{ selectedTicket.creadoPor }}</p>
                  <p class="mb-2"><strong>Fecha impresión:</strong> {{ selectedTicket.fechaImpresion }}</p>
                  <p><strong>Monto total:</strong> ${{ selectedTicket.montoTotal }}</p>
                </div>
              </div>
            </template>
  
            <template #footer>
              <div class="flex justify-end p-4">
                <Button label="Cerrar" class="p-button p-button-secondary" @click="isDialogVisible = false" />
              </div>
            </template>
          </Dialog>
  
          <!-- Tabla de Jugadas Loterías -->
          <div class="bg-white rounded-md shadow-md p-4">
            <h3 class="text-lg font-semibold mb-4">Jugadas Loterías</h3>
            <DataTable :value="jugadasLoterias" class="w-full">
              <Column header="Código">
                <template #body="slotProps">
                  <span
                    class="text-blue-600 cursor-pointer underline"
                    @click="openModal(slotProps.data)"
                  >
                    {{ slotProps.data.codigo }}
                  </span>
                </template>
              </Column>
              <Column field="monto" header="Monto" />
              <Column field="fecha" header="Fecha" />
            </DataTable>
          </div>
  
          <!-- Tabla de Movimiento de Efectivo -->
          <div class="bg-white rounded-md shadow-md p-4">
            <h3 class="text-lg font-semibold mb-4">Movimiento de Efectivo</h3>
            <DataTable :value="movimientosEfectivo" class="w-full">
              <Column field="descripcion" header="Descripción" />
              <Column field="monto" header="Monto" />
              <Column field="tipo" header="Tipo" />
              <Column field="fecha" header="Fecha" />
            </DataTable>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Button from "primevue/button";
import Chart from "primevue/chart";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import Dialog from "primevue/dialog";
import { ref } from "vue";
  
  export default {
    components: {
      Button,
      Chart,
      DataTable,
      Column,
      Dialog,
    },
    setup() {
      // Datos para el gráfico
      const chartData = ref({
        labels: ["Ingresos", "Gastos", "Balance"],
        datasets: [
          {
            label: "Estado General",
            data: [1000, 800, 200],
            backgroundColor: ["#22c55e", "#ef4444", "#3b82f6"],
          },
        ],
      });
  
      const chartOptions = ref({
        responsive: true,
        plugins: {
          legend: { display: false },
        },
      });
  
      // Datos de las tablas
      const jugadasLoterias = ref([
        {
          codigo: "EE/ETEX",
          monto: 204,
          fecha: "2020-05-19 19:52:27",
          jugadas: ["Quiniela: $100", "Pale: $54", "Tripleta: $50"],
          detalles: [
            { combinacion: "10-10", loteria: "FL", horario: "N", fecha: "19/May/20", monto: 20 },
            { combinacion: "10-11", loteria: "FL", horario: "N", fecha: "19/May/20", monto: 41 },
          ],
          creadoPor: "Juan López",
          fechaImpresion: "2020-05-19 19:58:27",
          montoTotal: 204,
        },
      ]);
  
      const movimientosEfectivo = ref([]);
  
      // Variables reactivas para el modal
      const isDialogVisible = ref(false);
      const selectedTicket = ref(null);
  
      // Método para abrir el modal
      const openModal = (ticket) => {
        selectedTicket.value = ticket;
        isDialogVisible.value = true;
      };
  
      return {
        chartData,
        chartOptions,
        jugadasLoterias,
        movimientosEfectivo,
        isDialogVisible,
        selectedTicket,
        openModal,
      };
    },
  };
  </script>
  