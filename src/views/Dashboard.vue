<script setup>
import { useLayout } from '@/layout/composables/layout';
import { ProductService } from '@/service/ProductService';
import { onMounted, ref, watch } from 'vue';

// Importar valores de tema y colores
const { getPrimary, getSurface, isDarkTheme } = useLayout();

// Declaración de referencias reactivas
const products = ref(null);
const chartData = ref(null);
const chartData2 = ref(null);
const chartOptions = ref(null);
const chartOptions2 = ref(null);

// Datos de loterías y opciones de menú
const lotteries = ref([
    { image: 'real.jpg', name: 'Loto Real', time: '18:00', winningNumbers: ['12 -34 - 56'] },
    { image: 'nacional.png', name: 'Lotería Nacional', time: '20:00', winningNumbers: ['98 - 76 -54'] },
    { image: 'loteria-florida-dia.png', name: 'Florida', time: '20:00', winningNumbers: ['09-87-65'] },
    { image: 'leidsa.jpg', name: 'Leidsa', time: '20:00', winningNumbers: ['98-89-00'] },
    { image: 'primera.jpg', name: 'Primera', time: '20:00', winningNumbers: ['98 - 76 - 54'] },
    { image: 'newyork.png', name: 'New York', time: '20:00', winningNumbers: ['76 - 54 - 56'] },
    { image: 'anguila.png', name: 'Anguila', time: '20:00', winningNumbers: ['54 - 46 - 79'] },
]);

const items = ref([
    { label: 'Add New', icon: 'pi pi-fw pi-plus' },
    { label: 'Remove', icon: 'pi pi-fw pi-trash' }
]);

// Configuración de datos y opciones de gráficos
function getChartData() {
    const documentStyle = getComputedStyle(document.documentElement);
    return {
        labels: ['Loteca', 'Leidsa', 'Nacional', 'Real'],
        datasets: [
            { type: 'line', label: 'Ganancias', backgroundColor: documentStyle.getPropertyValue('--p-primary-400'), data: [4000, 10000, 15000, 4000], barThickness: 32 },
            { type: 'line', label: 'Perdidas', backgroundColor: documentStyle.getPropertyValue('--p-primary-300'), data: [2100, 8400, 2400, 7500], barThickness: 32 },
            { type: 'line', label: 'N/A', backgroundColor: documentStyle.getPropertyValue('--p-primary-200'), data: [4100, 5200, 3400, 7400], borderRadius: { topLeft: 8, topRight: 8 }, borderSkipped: true, barThickness: 32 }
        ]
    };
}

function getChartOptions() {
    const documentStyle = getComputedStyle(document.documentElement);
    return {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        scales: {
            x: { stacked: true, ticks: { color: documentStyle.getPropertyValue('--text-color-secondary') }, grid: { color: 'transparent', borderColor: 'transparent' } },
            y: { stacked: true, ticks: { color: documentStyle.getPropertyValue('--text-color-secondary') }, grid: { color: documentStyle.getPropertyValue('--surface-border'), borderColor: 'transparent', drawTicks: false } }
        }
    };
}

function getChartData2() {
    return {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [
            { label: 'Ingresos', backgroundColor: 'rgba(34, 197, 94, 0.7)', borderColor: 'rgba(34, 197, 94, 1)', data: [5000, 7000, 6000, 8000, 7500, 9000], borderRadius: 10, barThickness: 30 },
            { label: 'Egresos', backgroundColor: 'rgba(239, 68, 68, 0.7)', borderColor: 'rgba(239, 68, 68, 1)', data: [3000, 4000, 3200, 4500, 5000, 4700], borderRadius: 10, barThickness: 30 }
        ]
    };
}

function getChartOptions2() {
    const documentStyle = getComputedStyle(document.documentElement);
    return {
        maintainAspectRatio: false,
        scales: {
            x: { stacked: false, ticks: { color: documentStyle.getPropertyValue('--text-color-secondary') }, grid: { color: 'transparent', borderColor: 'transparent' } },
            y: { stacked: false, ticks: { color: documentStyle.getPropertyValue('--text-color-secondary'), callback: (value) => `$${value.toLocaleString()}` }, grid: { color: documentStyle.getPropertyValue('--surface-border'), borderColor: 'transparent', drawTicks: false } }
        },
        plugins: {
            legend: { labels: { color: documentStyle.getPropertyValue('--text-color-secondary') } },
            tooltip: { callbacks: { label: (tooltipItem) => `${tooltipItem.dataset.label}: $${tooltipItem.raw.toLocaleString()}` } }
        }
    };
}


onMounted(() => {
    ProductService.getProductsSmall().then((data) => (products.value = data));
    chartData.value = getChartData();
    chartData2.value = getChartData2();
    chartOptions.value = getChartOptions();
    chartOptions2.value = getChartOptions2();
});


watch([getPrimary, getSurface, isDarkTheme], () => {
    chartData.value = getChartData();
    chartOptions.value = getChartOptions();
});
</script>


<template>


    <!-- Información del usuario -->
    <div class="flex justify-between items-center p-6 bg-gray-100 rounded-lg shadow-md mb-10">
        <div class="flex flex-col">
            <h4 class="font-bold text-3xl text-gray-800 tracking-wide">Juan de los Santos</h4>
            <p class="text-sm text-gray-500 mt-1 italic">
                Última Actualización: <span class="font-semibold text-gray-700">2024 / 05 / 19 7:55:33 PM</span>
            </p>
        </div>
        <div class="flex space-x-2">
            <Button label="Enviar alerta" icon="pi pi-exclamation-triangle" class="p-button-warning" />
            <Button label="Ver Ticket" icon="pi pi-eye" class="p-button-info" />
        </div>
    </div>

    <!-- Grilla de tarjetas de resumen -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Tarjeta: Loterías -->
        <div class="card mb-0 bg-white rounded-lg shadow-md">
            <div class="flex justify-between mb-4">
                <div>
                    <span class="block text-gray-500 font-medium mb-2 ">Loterías</span>
                    <div class="flex gap-4">
                        <div class="text-center">
                            <div class="text-xl font-semibold text-gray-800">2,200</div>
                            <p class="text-sm text-gray-500">Premios</p>
                        </div>
                        <div class="text-center">
                            <div class="text-xl font-semibold text-gray-800">5,800</div>
                            <p class="text-sm text-gray-500">Venta</p>
                        </div>
                        <div class="text-center">
                            <div class="text-xl font-semibold text-gray-800">0,000</div>
                            <p class="text-sm text-gray-500">Comisión</p>
                        </div>
                        <div class="text-center">
                            <div class="text-xl font-semibold text-gray-800">5,800</div>
                            <p class="text-sm text-gray-500">Utilidad</p>
                        </div>
                    </div>
                </div>
                <i class="pi pi-dollar text-orange-500 text-2xl"></i>
            </div>
            <span class="text-green-500 font-medium">+52%</span> <span class="text-gray-400">desde la última
                semana</span>
        </div>

        <!-- Tarjeta: Premios de hoy -->
        <div class="card p-6 bg-white rounded-lg shadow-md">
            <div class="flex justify-between mb-4 ">
                <div>
                    <span class="block text-gray-500 font-medium mb-2">Premios de hoy</span>
                    <div class="text-xl font-semibold text-gray-800">0</div>
                </div>
                <i class="pi pi-users text-cyan-500 text-2xl"></i>
            </div>
            <div class="flex justify-between mb-2">
                <div class="text-center">
                    <span class="block text-gray-500 font-medium">Premios reclamados</span>
                    <div class="text-xl font-semibold text-gray-800">0</div>
                </div>
                <div class="text-center">
                    <span class="block text-gray-500 font-medium">Premios pendientes</span>
                    <div class="text-xl font-semibold text-gray-800">0</div>
                </div>
            </div>
            <hr class="mb-2 border-gray-200">
            <div class="text-right">
                <span class="block text-gray-500 font-medium">Premios Total</span>
                <div class="text-xl font-semibold text-gray-800">0</div>
            </div>
        </div>

        <!-- Tabla de resultados de loterías -->
        <div class="card p-6 bg-white rounded-lg shadow-md">
            <div class="bg-green-500 text-white font-semibold p-3 rounded-t-lg">Resultados</div>
            <DataTable :value="lotteries" :rows="5" :paginator="true" responsiveLayout="scroll">
                <Column style="width: 20%" header="Lotería">
                    <template #body="slotProps">
                        <img :src="`/demo/images/Lotery/${slotProps.data.image}`" alt="Lotería" width="50"
                            class="rounded-full shadow-md" />
                    </template>
                </Column>
                <Column field="name" header="Nombre" :sortable="true"></Column>
                <Column field="time" header="Hora" :sortable="true"></Column>
                <Column field="winningNumbers" header="Números Ganadores">
                    <template #body="slotProps">
                        <span class="text-green-600">{{ slotProps.data.winningNumbers.join(', ') }}</span>
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>

    <!-- Gráfico de ventas y notificaciones -->
    <div class="grid grid-cols-1 gap-8 mt-10">
        <!--  Grafico  Ganancias de ultimo mes -->

        <div class="card p-6 bg-white rouded-lg shadow-md">
            <div class="bg-green-500 text-white font-semibold p-3 rounded-t-lg">
                Ganancias del ultimo mes
            </div>
            <Chart type="line" :data="chartData" :options="chartOptions" class="h-[30rem]" />

        </div>

        <!-- Gráfico de flujo de ingresos -->
        <div class="card p-6 bg-white rounded-lg shadow-md">
            <div class="bg-green-500 text-white font-semibold p-3 rounded-t-lg">Flujo de ingresos</div>
            <Chart type="bar" :data="chartData2" :options="chartOptions2" class="h-80" />
        </div>








        <div class="card shadow-lg rounded-lg">
            <!-- Encabezado de la tarjeta -->
            <div class="bg-green-500 text-white font-semibold p-3 rounded-t-lg">
                Terminales
            </div>

            <!-- Contenido de la tarjeta con datos de terminales en formato de tabla -->
            <div class="overflow-x-auto bg-white p-4 rounded-b-lg">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="text-gray-600 border-b border-gray-300">
                            <th class="py-2 px-4 font-medium">Usuario</th>
                            <th class="py-2 px-4 font-medium">Total Loterías</th>
                            <th class="py-2 px-4 font-medium">Premios Pagos</th>
                            <th class="py-2 px-4 font-medium">Premios Pendientes</th>
                            <th class="py-2 px-4 font-medium">Mov. Efectivo</th>
                            <th class="py-2 px-4 font-medium">Comisión</th>
                            <th class="py-2 px-4 font-medium">Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Aquí podrías agregar filas de datos dinámicamente usando un v-for -->
                        <tr>
                            <td colspan="7" class="py-4 px-4 text-end text-gray-500">
                                Actualmente no hay información que mostrar
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
