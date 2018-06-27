import LeadList from './components/dashboard/lead-list';
import LeadView from './components/dashboard/lead-view';

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
]