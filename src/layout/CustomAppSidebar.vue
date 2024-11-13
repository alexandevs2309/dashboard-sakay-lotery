<template>
    <div class="layout-sidebar">
        <ul class="custom-layout-menu">
            <li v-for="item in menuItems" :key="item.label" class="menu-item-container">
                <router-link :to="item.routerLink" class="menu-item" @click="toggleSubMenu(item)">
                    <i :class="item.iconClass"></i>
                    <span>{{ item.label }}</span>
                </router-link>
                <ul v-if="item.submenuVisible" :class="['submenu', item.label === 'Bancas' ? 'floating-submenu' : '']">
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

  
  <script setup>
  import { ref } from 'vue';
  
  const menuItems = ref([
    { label: 'Panel', iconClass: 'pi pi-home', routerLink: '/'},
    { label: 'Cuadres', iconClass: 'pi pi-calendar', routerLink: '/pages/crud',  },
    { label: 'Sorteos', iconClass: 'pi pi-ticket', routerLink: '/sorteos', },
    { label: 'Empleados', iconClass: 'pi pi-users', routerLink: '/empleados', },
    {
      label: 'Bancas',
      iconClass: 'pi pi-building',
      routerLink: '#',
      submenuVisible: false,
      submenuItems: [
        { label: 'Listas de Bancas', iconClass: 'pi pi-list', routerLink: '/pages/listabancas' },
        { label: 'Crear Banca', iconClass: 'pi pi-plus', routerLink: '/pages/bancas/new' },
        { label: 'Duplicar', iconClass: 'pi pi-clone', routerLink: '#' }
      ]
    },
    { label: 'Reportes', iconClass: 'pi pi-chart-line', routerLink: '/reportes',  },
    { label: 'Facturación', iconClass: 'pi pi-dollar', routerLink: '/facturacion', },
    { label: 'Ajustes', iconClass: 'pi pi-cog', routerLink: '/ajustes',  }
  ]);
  
  const toggleSubMenu = (item) => {
    item.submenuVisible = !item.submenuVisible;
  };
  </script>
  
  <style scoped>
  .layout-sidebar {
    background-color: #fff;
    color: #888;
    height: 100vh;
    width: 180px;
    z-index: 997;
    margin-left: 10px;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: start;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.02), 0px 0px 2px rgba(0, 0, 0, 0.05),
      0px 1px 4px rgba(0, 0, 0, 0.08);
    overflow-y: visible;
  }
  
  .custom-layout-menu {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }
  
  .menu-item-wrapper {
    position: relative;
  }
  
  .menu-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
    color: #888;
    text-decoration: none;
    transition: color 0.2s ease-in-out;
    width: 100%;
  }
  
  .menu-item:hover {
    color: #007bff;
  }
  
  .menu-item i {
    font-size: 1.5rem;
    margin-right: 10px;
  }
  
  .menu-item span {
    font-size: 1rem;
    text-align: left;
  }
  
  /* Estilo del submenú flotante */
  .floating-submenu {
    position: absolute;
    top: 0;
    left: 55%;
    margin-left: 1px;
    background-color: white;
    padding: 0.5rem;
    border-radius: 5px;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.15);
    z-index: 999;
    min-width: 150px;
}

.floating-submenu .submenu-item {
    padding: 0.5rem;
}

.floating-submenu .submenu-item:hover {
    color: #007bff;
}

.menu-item-container {
    position: relative;
}


  </style>
  