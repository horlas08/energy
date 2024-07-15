import { lazy } from 'react'
import authRoute from './authRoute'
import type { Routes } from '@/@types/routes'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes: Routes = [
    {
        key: 'home',
        path: '/energy/home',
        component: lazy(() => import('@/views/user/energy/Home')),
        authority: [],
    },
    {
        key: 'energy.business',
        path: '/energy/business/:walletId?',
        component: lazy(() => import('@/views/user/energy/business/Home')),
        authority: [],
    },
    {
        key: 'energy.substations',
        path: '/energy/substations',
        component: lazy(() => import('@/views/user/energy/substations')),
        authority: [],
    },
    // {
    //     key: 'substation.home',
    //     path: '/substation/home',
    //     component: lazy(() => import('@/views/Home')),
    //     authority: [],
    // },
    {
        key: 'energy.transactions',
        path: '/energy/transactions',
        component: lazy(() => import('@/views/user/energy/Transaction')),
        authority: [],
    },
    {
        key: 'energy.fundRequest',
        path: '/energy/fundRequest',
        component: lazy(() => import('@/views/user/energy/FundRequest/FundRequest')),
        authority: [],
    },
    /** Example purpose only, please remove */
    {
        key: 'singleMenuItem',
        path: '/single-menu-view',
        component: lazy(() => import('@/views/demo/SingleMenuView')),
        authority: [],
    },
    {
        key: 'collapseMenu.item1',
        path: '/collapse-menu-item-view-1',
        component: lazy(() => import('@/views/demo/CollapseMenuItemView1')),
        authority: [],
    },
    {
        key: 'collapseMenu.item2',
        path: '/collapse-menu-item-view-2',
        component: lazy(() => import('@/views/demo/CollapseMenuItemView2')),
        authority: [],
    },
    {
        key: 'groupMenu.single',
        path: '/group-single-menu-item-view',
        component: lazy(() => import('@/views/demo/GroupSingleMenuItemView')),
        authority: [],
    },
    {
        key: 'groupMenu.collapse.item1',
        path: '/group-collapse-menu-item-view-1',
        component: lazy(
            () => import('@/views/demo/GroupCollapseMenuItemView1')
        ),
        authority: [],
    },
    {
        key: 'groupMenu.collapse.item2',
        path: '/group-collapse-menu-item-view-2',
        component: lazy(
            () => import('@/views/demo/GroupCollapseMenuItemView2')
        ),
        authority: [],
    },
]
