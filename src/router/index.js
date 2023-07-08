
import { createRouter, createWebHistory } from 'vue-router'
import Base from '@/pages/Base'
import CounterOleg from '@/pages/CounterOleg'
import CalculateOlegNew from '@/pages/CalculateOlegNew'
import CalculateOleg from '@/pages/CalculateOleg'
import GameTimp from '@/pages/GameTimp'
import SlideError from '@/pages/SlideError'
import ViFor from '@/pages/ViFor'
import NewCompany from '@/pages/NewCompany'

const router = createRouter({
    routes: [
        {
            path: '/',
            component: Base
            
        },
        {
            path: '/counter',
            component: CounterOleg
        },
        {
            path: '/calculate',
            component: CalculateOlegNew
        },
        {
            path: '/calcul',
            component: CalculateOleg
        },
        {
            path: '/gametimp',
            component: GameTimp
        },
        {
            path: '/error',
            component: SlideError
        },
        {
            path: '/vifor',
            component: ViFor
        },
        {
            path: '/newcompany',
            component: NewCompany
        }
        
    ],
    
    history: createWebHistory()
})

export default router

    