<script setup>
import { ref } from 'vue';

const menuItems = ref([
    { label: 'Panel', iconClass: 'pi pi-home', routerLink: '/', submenuVisible: false, submenuItems: [] },
    { label: 'Cuadres', iconClass: 'pi pi-calendar', routerLink: '/pages/crud', submenuVisible: false, submenuItems: [] },
    { label: 'Sorteos', iconClass: 'pi pi-ticket', routerLink: '/sorteos', submenuVisible: false, submenuItems: [] },
    { label: 'Empleados', iconClass: 'pi pi-users', routerLink: '/empleados', submenuVisible: false, submenuItems: [] },
    {
        label: 'Bancas',
        iconClass: 'pi pi-building',
        routerLink: '#',
        submenuVisible: false,
        submenuItems: [
            { label: ' Listas de Bancas', iconClass: 'pi pi-list', routerLink: '/pages/listabancas' },
            { label: 'Crear Banca', iconClass: 'pi pi-plus', routerLink: '/pages/bancas/new' },
            { label: 'Duplicar', iconClass: 'pi pi-clone', routerLink: '#' }
        ]
    },
    { label: 'Reportes', iconClass: 'pi pi-chart-line', routerLink: '/reportes', submenuVisible: false, submenuItems: [] },
    { label: 'Facturación', iconClass: 'pi pi-dollar', routerLink: '/facturacion', submenuVisible: false, submenuItems: [] },
    { label: 'Ajustes', iconClass: 'pi pi-cog', routerLink: '/ajustes', submenuVisible: false, submenuItems: [] }
]);

const toggleSubMenu = (item) => {
    item.submenuVisible = !item.submenuVisible;
};
</script>

<template>
    <div class="layout-sidebar">
        <ul class="custom-layout-menu">
            <li v-for="item in menuItems" :key="item.label">
                <router-link :to="item.routerLink" class="menu-item" @click="toggleSubMenu(item)">
                    <i :class="item.iconClass"></i>
                    <span>{{ item.label }}</span>
                </router-link>
                <ul v-if="item.submenuVisible" class="submenu">
                    <li v-for="subItem in item.submenuItems" :key="subItem.label">
                        <router-link :to="subItem.routerLink" class="submenu-item">
                            <i :class="subItem.iconClass"></i>
                            <span>{{ subItem.label }}</span>
                        </router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<style scoped>
/* Tu CSS permanece igual */
.layout-sidebar {
    background-color: #fff;
    color: #888;
    height: 100vh;
    width: 250px;
    z-index: 997;
    margin-left: 10px;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow:
        0px 3px 5px rgba(0, 0, 0, 0.02),
        0px 0px 2px rgba(0, 0, 0, 0.05),
        0px 1px 4px rgba(0, 0, 0, 0.08);
    overflow-y: auto;
}

.custom-layout-menu {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 60%;
}

.menu-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
    color: #888;
    text-decoration: none;
    transition: color 0.2s ease-in-out;
}

.menu-item:hover {
    color: #007bff;
}

.menu-item i {
    font-size: 2rem;
    margin-right: 10px;
}

.menu-item span {
    font-size: 1rem;
    text-align: left;
}

.submenu {
    list-style: none;
    padding-left: 2rem;
    margin-top: 0.5rem;
    width: 100%;
}

.submenu-item {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    color: #555;
    text-decoration: none;
    transition: color 0.2s ease-in-out;
}

.submenu-item:hover {
    color: #007bff;
}

.submenu-item i {
    font-size: 1rem;
    margin-right: 10px;
}
</style>
