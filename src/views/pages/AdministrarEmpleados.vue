<template>
    <div class="p-6">
      
  
      <!-- Header and Add Button -->
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold">Administrar Empleados</h2>
        <Button label="Agregar Empleado" class="p-button p-button-success" @click="addEmployee" />
      </div>
  
      <!-- Employees Table -->
      <div class="overflow-x-auto">
        <table class="w-full border border-gray-300 rounded-lg">
          <thead>
            <tr class="bg-gray-100">
              <th class="p-2 text-left">Nombres</th>
              <th class="p-2 text-left">Apellidos</th>
              <th class="p-2 text-left">Usuario</th>
              <th class="p-2 text-left">Hora Entrada</th>
              <th class="p-2 text-left">Hora Salida</th>
              <th class="p-2 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="employee in employees" :key="employee.user" class="border-b">
              <td class="p-2">{{ employee.firstName }}</td>
              <td class="p-2">{{ employee.lastName }}</td>
              <td class="p-2">{{ employee.user }}</td>
              <td class="p-2">{{ employee.entryTime }}</td>
              <td class="p-2">{{ employee.exitTime }}</td>
              <td class="p-2">
                <Button label="Remover de la Banca" class="p-button p-button-danger" @click="removeEmployee(employee.user)" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import Button from 'primevue/button';
import { ref } from 'vue';
  
  export default {
    components: {
      Button,
    },
    setup() {
      const employees = ref([
        { firstName: 'Juan', lastName: 'Lopez', user: 'juan', entryTime: '09:00:00 AM', exitTime: '10:00:00 PM' },
        { firstName: 'Juan', lastName: 'Lopez', user: 'juan2', entryTime: '09:00:00 AM', exitTime: '10:00:00 PM' },
        // Agrega más empleados según sea necesario
      ]);
  
      const addEmployee = () => {
        console.log("Agregar empleado");
      };
  
      const removeEmployee = (user) => {
        console.log(`Remover empleado: ${user}`);
      };
  
      return {
        employees,
        addEmployee,
        removeEmployee,
      };
    },
  };
  </script>
  