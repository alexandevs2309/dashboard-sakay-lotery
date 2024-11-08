
<script setup>
import AdministrarEmpleados from '../pages/AdministrarEmpleados.vue';
import AdminModulos from '../pages/AdminModulos.vue';
import AdminPremios from '../pages/AdminPremios.vue';
import AdminPresupuestos from '../pages/AdminPresupuestos.vue';
import BancaAdmin from '../pages/BancaAdmin.vue';
import MontosGenrales from '../pages/MontosGenrales.vue';

</script>
    
<template>
    <div class="card">
        <Tabs value="0">
            <TabList>
                <Tab value="datos">Datos </Tab>
                <Tab value="montos">Montos</Tab>
                <Tab value="presup">Presupuestos</Tab>
                <Tab value="premios">Premios</Tab>
                <Tab value="empleados">Empleados</Tab>
                <Tab value="modulos">Modulos</Tab>
            </TabList>
            <TabPanels >
                <TabPanel value="datos" :activeIndex="activeTab">
                    <BancaAdmin/>
                </TabPanel>
                <TabPanel value="montos">
                  <MontosGenrales/>
                </TabPanel>
                <TabPanel value="presup">
                   <AdminPresupuestos/>
                </TabPanel>
                
            </TabPanels>
            <TabPanels>
                <TabPanel value="premios">
                    <AdminPremios/>
                </TabPanel>
                <TabPanel value="empleados">
                  <AdministrarEmpleados/>
                </TabPanel>
                <TabPanel value="modulos">
                        <AdminModulos/>
                </TabPanel>
                
            </TabPanels>
        </Tabs>
    </div>
</template>
