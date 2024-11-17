<template>
    <div class="p-6">
      <!-- Selección de Fecha y Botones de Acción -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <!-- Selección de Fecha -->
        <div class="col-span-1">
          <Calendar v-model="selectedDate" dateFormat="yy-mm-dd" placeholder="Seleccione una fecha" class="w-full" />
        </div>
  
        <!-- Botones de Acción -->
        <div class="col-span-1 md:col-span-3 flex gap-4">
          <Button 
            label="Ver cuadros" 
            class="p-button p-button-success w-full" 
            icon="pi pi-eye" 
            @click="viewReports"
          />
          <Button 
            label="Cuadrar todos" 
            class="p-button p-button-success w-full" 
            icon="pi pi-users" 
            @click="settleAll"
          />
          <Button 
            label="Cuadrar empleado" 
            class="p-button p-button-success w-full" 
            icon="pi pi-user-plus" 
            @click="settleEmployee"
          />
        </div>
      </div>
  
      <!-- Cuadre del día -->
      <h2 class="text-lg font-semibold mb-4">Cuadre del: {{ formattedDate }}</h2>
  
      <!-- Tabla de Cuadre -->
      <DataTable :value="cuadreData" responsiveLayout="scroll">
        <!-- Columnas de la Tabla -->
        <Column field="empleado" header="Empleado" />
        <Column field="ingresoLoterias" header="Ingreso Loterías" />
        <Column field="premiosPagados" header="Premios del día [Pagados | Pendientes]" />
        <Column field="totalLoterias" header="Total Loterías" />
        <Column field="totalComisiones" header="Total Comisiones" />
        <Column field="movEfectivo" header="Mov. Efectivo" />
        <Column field="balance" header="Balance" />
        <Column field="cierre" header="Cierre" />
  
        <!-- Botón de Cuadre -->
        <Column header="Acción" bodyClass="text-center">
    <template #body="slotProps">
      <Button
        label="Ir al cuadre"
        class="p-button-success w-fit"
        icon="pi pi-eye"
        @click="goToCuadre(slotProps.data)"
      />
    </template>
  </Column>
      </DataTable>
    </div>
  </template>
  
  <script>
import router from "@/router";
import Button from "primevue/button";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import DatePicker from "primevue/datepicker";
import { computed, ref } from "vue";
  
  export default {
    components: {
      DatePicker,
      Button,
      DataTable,
      Column,
    },
    setup() {
      const selectedDate = ref(new Date());
  
      // Datos de ejemplo para la tabla de cuadre
      const cuadreData = ref([
        {
          id: 1, // ID del empleado
          empleado: "Juan Lopez",
          ingresoLoterias: "0",
          premiosPagados: "0 | 0",
          totalLoterias: "0",
          totalComisiones: "0.00",
          movEfectivo: "400.00",
          balance: "400.00",
          cierre: "400.00",
        },
        {
          id: 2, // ID del empleado
          empleado: "Ana Gómez",
          ingresoLoterias: "1,430",
          premiosPagados: "0 | 0",
          totalLoterias: "1,430",
          totalComisiones: "143.00",
          movEfectivo: "0.00",
          balance: "1,287",
          cierre: "1,287.00",
        },
]);

  

      
      // Formato de fecha para mostrar en el encabezado
      const formattedDate = computed(() =>
        selectedDate.value ? new Date(selectedDate.value).toLocaleDateString() : ""
      );
  
      // Funciones de ejemplo para los botones
      const viewReports = () => {
        console.log("Mostrando cuadros para la fecha:", formattedDate.value);
      };
  
      const settleAll = () => {
        console.log("Cuadrando todos los empleados.");
      };
  
      const settleEmployee = () => {
        console.log("Cuadrando empleado individual.");
      };
  
      const goToCuadre = (data) => {

        router.push({ name: "cuadre_user", params: { id: data.id } });

        console.log("Ir al cuadre de:", data.empleado);
      };
  
      return {
        selectedDate,
        formattedDate,
        cuadreData,
        viewReports,
        settleAll,
        settleEmployee,
        goToCuadre,
      };
    },
  };
  </script>
  
  <style scoped>
 
  </style>
  