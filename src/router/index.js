import AppLayout from '@/layout/AppLayout.vue';
import Cuadre_user from '@/views/cuadres/cuadre_user.vue';
import AdministrarEmpleados from '@/views/pages/AdministrarEmpleados.vue';
import Reportes from '@/views/pages/Reportes.vue';
import Sorteos from '@/views/pages/Sorteos.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: () => import('@/views/Dashboard.vue')
                },
                {
                    path: '/pages/cuadre',
                    name: 'cuadre',
                    component: () => import('@/views/pages/Cuadre.vue')
                },


                {
                    path: "/cuadre_user/:id",
                    name: "cuadre_user",
                    component: Cuadre_user
                },

                {
                    path: '/uikit/formlayout',
                    name: 'formlayout',
                    component: () => import('@/views/uikit/FormLayout.vue')
                },
                {
                    path: '/uikit/input',
                    name: 'input',
                    component: () => import('@/views/uikit/InputDoc.vue')
                },
                {
                    path: '/uikit/button',
                    name: 'button',
                    component: () => import('@/views/uikit/ButtonDoc.vue')
                },
                {
                    path: '/uikit/table',
                    name: 'table',
                    component: () => import('@/views/uikit/TableDoc.vue')
                },
                {
                    path: '/uikit/list',
                    name: 'list',
                    component: () => import('@/views/uikit/ListDoc.vue')
                },
                {
                    path: '/uikit/tree',
                    name: 'tree',
                    component: () => import('@/views/uikit/TreeDoc.vue')
                },
                {
                    path: '/uikit/panel',
                    name: 'panel',
                    component: () => import('@/views/uikit/PanelsDoc.vue')
                },

                {
                    path: '/uikit/overlay',
                    name: 'overlay',
                    component: () => import('@/views/uikit/OverlayDoc.vue')
                },
                {
                    path: '/uikit/media',
                    name: 'media',
                    component: () => import('@/views/uikit/MediaDoc.vue')
                },
                {
                    path: '/uikit/message',
                    name: 'message',
                    component: () => import('@/views/uikit/MessagesDoc.vue')
                },
                {
                    path: '/uikit/file',
                    name: 'file',
                    component: () => import('@/views/uikit/FileDoc.vue')
                },
                {
                    path: '/uikit/menu',
                    name: 'menu',
                    component: () => import('@/views/uikit/MenuDoc.vue')
                },
                {
                    path: '/uikit/charts',
                    name: 'charts',
                    component: () => import('@/views/uikit/ChartDoc.vue')
                },
                {
                    path: '/uikit/misc',
                    name: 'misc',
                    component: () => import('@/views/uikit/MiscDoc.vue')
                },
                {
                    path: '/uikit/timeline',
                    name: 'timeline',
                    component: () => import('@/views/uikit/TimelineDoc.vue')
                },
                {
                    path: '/pages/empty',
                    name: 'empty',
                    component: () => import('@/views/pages/Empty.vue')
                },
                {
                    path: '/pages/crud',
                    name: 'crud',
                    component: () => import('@/views/pages/Crud.vue')
                },

                {
                    path: '/pages/listabancas',
                    name: 'listabancas',
                    component: () => import('@/views/pages/ListaBancas.vue'),
                },
                {
                    path: '/pages/bancaAdmin/:id',
                    name: 'bancaAdmin',
                    component: () => import('@/views/uikit/TabmenuCustom.vue')
                },

                {
                    path: '/pages/AnalisisdeRiesgos',
                    name: 'AnalisisdeRiesgos',
                    component: () => import('@/views/pages/AnalisisdeRiesgos.vue')
                },

                {
                    path: '/pages/ReportesPremios',
                    name: 'ReportesPremios',
                    component: () => import('@/views/pages/ReportesPremios.vue')
                },

                {
                    path: '/pages/ReporteDeEmpleados',
                    name: 'ReporteDeEmpleados',
                    component: () => import('@/views/pages/ReporteDeEmpleados.vue')
                },

                {
                    path: '/documentation',
                    name: 'documentation',
                    component: () => import('@/views/pages/Documentation.vue')
                },

                {
                    path: '/empleados',
                    name: 'empleados',
                    component: () => import('@/views/pages/Empleados.vue')
                },
                // {
                // path: '/administrar-empleados',
                // name: 'administrar-empleados',
                // component: () => import('@/views/pages/AdministrarEmpleados.vue')
                // },
                {
                    path: '/administrar-empleados/:id',
                    name: 'AdministrarEmpleados', // Nombre exacto que usaste en el código
                    component: AdministrarEmpleados
                },

                {
                    path: '/reportes',
                    name: 'Reportes', // Nombre exacto que usaste en el código
                    component: Reportes
                },
                {
                    path: 'sorteos',
                    name: 'Sorteos', // Nombre exacto que usaste en el código
                    component: Sorteos
                },
                {
                    path: '/facturacion',
                    name: 'Facturacion', // Nombre exacto que usaste en el código
                    component: () => import('@/views/pages/Facturacion.vue')
                },
                {
                    path: '/ajustes',
                    name: 'Ajustes',
                    component: () => import('@/views/pages/Ajustes.vue')
                }
            ]
        },
        {
            path: '/landing',
            name: 'landing',
            component: () => import('@/views/pages/Landing.vue')
        },
        {
            path: '/pages/notfound',
            name: 'notfound',
            component: () => import('@/views/pages/NotFound.vue')
        },

        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/views/pages/auth/Login.vue')
        },
        {
            path: '/auth/access',
            name: 'accessDenied',
            component: () => import('@/views/pages/auth/Access.vue')
        },
        {
            path: '/auth/error',
            name: 'error',
            component: () => import('@/views/pages/auth/Error.vue')
        },


    ]
});

export default router;
