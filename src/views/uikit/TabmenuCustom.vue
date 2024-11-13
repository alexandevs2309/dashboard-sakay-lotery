<script setup>
import { onMounted, ref, watch } from 'vue';
import AdministrarEmpleados from '../pages/AdministrarEmpleados.vue';
import AdminModulos from '../pages/AdminModulos.vue';
import AdminPremios from '../pages/AdminPremios.vue';
import AdminPresupuestos from '../pages/AdminPresupuestos.vue';
import BancaAdmin from '../pages/BancaAdmin.vue';
import MontosGenrales from '../pages/MontosGenrales.vue';

// Definir el estado inicial
const activeTab = ref('datos');

// Asegurarse de que se establezca el tab inicial al montar el componente
onMounted(() => {
    activeTab.value = 'datos';
    console.log('Componente montado');
});

watch(activeTab, (newValue) => {
    console.log('Tab activo:', newValue);
});
</script>
    
<template>
    <div class="card">
        <Tabs v-model="activeTab" defaultValue="datos">
            <TabList>
                <Tab value="datos">Datos</Tab>
                <Tab value="montos">Montos</Tab>
                <Tab value="presup">Presupuestos</Tab>
                <Tab value="premios">Premios</Tab>
                <Tab value="empleados">Empleados</Tab>
                <Tab value="modulos">Módulos</Tab>
            </TabList>
            <TabPanels>
                <TabPanel value="datos">
                    <BancaAdmin />
                </TabPanel>
                <TabPanel value="montos">
                    <MontosGenrales />
                </TabPanel>
                <TabPanel value="presup">
                    <AdminPresupuestos />
                </TabPanel>
                <TabPanel value="premios">
                    <AdminPremios />
                </TabPanel>
                <TabPanel value="empleados">
                    <AdministrarEmpleados />
                </TabPanel>
                <TabPanel value="modulos">
                    <AdminModulos />
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>