import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/views/home/Home.vue'
import ProvideCode from '@/components/views/provide-code/ProvideCode.vue'
import YourTestResults from '@/components/views/your-test-results/YourTestResults';
import Print from '@/components/views/print/Print';
import HelpTestResult from '@/components/views/help-pages/HelpTestResult';
import TestResultPending from '@/components/views/your-test-results/TestResultPending';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home'
    }, {
        path: '/testuitslag-ophalen',
        component: ProvideCode,
        name: 'ProvideCode'
    }, {
        path: '/jouw-testresultaat',
        name: 'YourTestResult',
        component: YourTestResults
    }, {
        path: '/print-qr',
        name: 'Print',
        component: Print
    }, {
        path: '/wat-betekent-je-testresultaat',
        name: 'HelpTestResult',
        component: HelpTestResult
    }, {
        path: '/testresultaat-nog-niet-bekend',
        name: 'TestResultPending',
        component: TestResultPending
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
