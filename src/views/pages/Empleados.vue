<template>
    <div class="p-6 bg-gray-100 rounded-lg shadow-md">
        <!-- Mensaje de advertencia -->
        <div class="bg-blue-100 text-blue-700 p-4 rounded-lg mb-6">
            Para poder agregar más usuarios debe actualizar su plan
        </div>

        <!-- Botones de acción -->
        <div class="flex justify-between items-center mb-4">
            <div class="text-green-700 font-bold">Total de empleados: 3</div>
            <div class="flex space-x-2">
                <Button label="Actualizar Plan" class="p-button-info" />
                <Button label="Agregar Empleado" class="p-button-success" />
                <Button label="Mostrar deshabilitados" class="p-button-primary" />
                <Button label="Aprende a crear un empleado!" class="p-button-danger" />
            </div>
        </div>

        <!-- Tabla de empleados -->
        <DataTable :value="empleados" class="p-datatable-sm">
            <Column field="id" header="ID" />
            <Column field="nombres" header="Nombres" />
            <Column field="apellidos" header="Apellidos" />
            <Column field="horaEntrada" header="Hora Entrada" />
            <Column field="horaSalida" header="Hora Salida" />
            <Column field="codigoDispositivo" header="Código Dispositivo" />
            <Column header="Acciones">
                <!-- Aquí puedes añadir botones de acción para cada fila -->
            </Column>
        </DataTable>

        <!-- Paginación -->
        <div class="flex justify-between items-center mt-4">
            <p>Mostrando desde el 1 al 3 de 3 registros</p>
            <Pagination />
        </div>
    </div>
</template>

<script setup>
import Button from 'primevue/button';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import { ref } from 'vue';

const empleados = ref([
    { id: 1734, nombres: '1033', apellidos: '1033', horaEntrada: '07:00 AM', horaSalida: '11:00 PM', codigoDispositivo: '' },
    { id: 1735, nombres: 'Juan', apellidos: 'Lopez', horaEntrada: '09:00 AM', horaSalida: '10:00 PM', codigoDispositivo: '' },
    { id: 1736, nombres: 'Juan', apellidos: 'Lopez', horaEntrada: '09:00 AM', horaSalida: '10:00 PM', codigoDispositivo: '' },
]);
</script>

<style scoped>
/* Agrega estilos adicionales aquí si es necesario */
</style>
