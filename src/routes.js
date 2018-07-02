import LeadList from './components/dashboard/lead-list';
import LeadView from './components/dashboard/lead-view';
import LeadTime from './components/dashboard/lead-timeline';

export default [
    {
        path: '/',
        component: LeadList,
    },
    {
        path: '/view/:id',
        name: 'leads-view',
        component: LeadView,
    },
    {
        path: '/timeline',
        name: 'leads-timeline',
        component: LeadTime,
    },
]