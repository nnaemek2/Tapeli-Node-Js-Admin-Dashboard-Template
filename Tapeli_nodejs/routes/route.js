
const express = require('express');
const route = express.Router();

route.get('/', (req, res, next) => {
  res.render('index', {title: 'Index'});
})

route.get('/index', (req, res, next) => {
  res.render('index', {title: 'Index'});
})

route.get('/auth-confirm-mail', (req, res, next) => {
  res.render('auth-confirm-mail', {title: 'Auth Confirm Mail', layout: 'partials/base'});
})

route.get('/auth-lock-screen', (req, res, next) => {
  res.render('auth-lock-screen', {title: 'Auth Lock Screen', layout: 'partials/base'});
})

route.get('/auth-login', (req, res, next) => {
  res.render('auth-login', {title: 'Logi In', layout: 'partials/base'});
})

route.get('/auth-logout', (req, res, next) => {
  res.render('auth-logout', {title: 'Auth Logout', layout: 'partials/base'});
})

route.get('/auth-recoverpw', (req, res, next) => {
  res.render('auth-recoverpw', {title: 'Auth Recoverpw', layout: 'partials/base'});
})

route.get('/auth-register', (req, res, next) => {
  res.render('auth-register', {title: 'Auth Register', layout: 'partials/base'});
})

route.get('/calendar', (req, res, next) => {
  res.render('calendar', {title: 'Calendar'});
})

route.get('/charts-area', (req, res, next) => {
  res.render('charts-area', {title: 'Charts Area'});
})

route.get('/charts-bar', (req, res, next) => {
  res.render('charts-bar', {title: 'Charts Bar'});
})

route.get('/charts-boxplot', (req, res, next) => {
  res.render('charts-boxplot', {title: 'Charts Boxplot'});
})

route.get('/charts-bubble', (req, res, next) => {
  res.render('charts-bubble', {title: 'Charts Bubble'});
})

route.get('/charts-candlestick', (req, res, next) => {
  res.render('charts-candlestick', {title: 'Charts Candlestick'});
})

route.get('/charts-chartist', (req, res, next) => {
  res.render('charts-chartist', {title: 'Charts Chartist'});
})

route.get('/charts-chartjs', (req, res, next) => {
  res.render('charts-chartjs', {title: 'Charts Chartjs'});
})

route.get('/charts-column', (req, res, next) => {
  res.render('charts-column', {title: 'Charts Column'});
})

route.get('/charts-flot', (req, res, next) => {
  res.render('charts-flot', {title: 'Charts Flot'});
})

route.get('/charts-funnel', (req, res, next) => {
  res.render('charts-funnel', {title: 'Charts Funnel'});
})

route.get('/charts-heatmap', (req, res, next) => {
  res.render('charts-heatmap', {title: 'Charts Heatmap'});
})

route.get('/charts-line', (req, res, next) => {
  res.render('charts-line', {title: 'Charts Line'});
})

route.get('/charts-mixed', (req, res, next) => {
  res.render('charts-mixed', {title: 'Charts Mixed'});
})

route.get('/charts-morris', (req, res, next) => {
  res.render('charts-morris', {title: 'Charts Morris'});
})

route.get('/charts-pie', (req, res, next) => {
  res.render('charts-pie', {title: 'Charts Pie'});
})

route.get('/charts-polararea', (req, res, next) => {
  res.render('charts-polararea', {title: 'Charts Polararea'});
})

route.get('/charts-radar', (req, res, next) => {
  res.render('charts-radar', {title: 'Charts Radar'});
})

route.get('/charts-radialbar', (req, res, next) => {
  res.render('charts-radialbar', {title: 'Charts Radialbar'});
})

route.get('/charts-rangearea', (req, res, next) => {
  res.render('charts-rangearea', {title: 'Charts Rangearea'});
})

route.get('/charts-scatter', (req, res, next) => {
  res.render('charts-scatter', {title: 'Charts Scatter'});
})

route.get('/charts-sparklines', (req, res, next) => {
  res.render('charts-sparklines', {title: 'Charts Sparklines'});
})

route.get('/charts-timeline', (req, res, next) => {
  res.render('charts-timeline', {title: 'Charts Timeline'});
})

route.get('/charts-treemap', (req, res, next) => {
  res.render('charts-treemap', {title: 'Charts Treemap'});
})

route.get('/contacts-profile', (req, res, next) => {
  res.render('contacts-profile', {title: 'Contacts Profile'});
})

route.get('/ecommerce-sidebar-dark-rtl', (req, res, next) => {
  res.render('ecommerce-sidebar-dark-rtl', {title: 'Ecommerce Sidebar Dark Rtl'});
})

route.get('/ecommerce-sidebar-dark', (req, res, next) => {
  res.render('ecommerce-sidebar-dark', {title: 'Ecommerce Sidebar Dark'});
})

route.get('/ecommerce-sidebar-rtl', (req, res, next) => {
  res.render('ecommerce-sidebar-rtl', {title: 'Ecommerce Sidebar Rtl'});
})

route.get('/ecommerce', (req, res, next) => {
  res.render('ecommerce', {title: 'Ecommerce'});
})

route.get('/email-verification', (req, res, next) => {
  res.render('email-verification', {title: 'Email Verification', layout: 'partials/base'});
})

route.get('/error-404', (req, res, next) => {
  res.render('error-404', {title: 'Error 404', layout: 'partials/base'});
})

route.get('/error-429', (req, res, next) => {
  res.render('error-429', {title: 'Error 429', layout: 'partials/base'});
})

route.get('/error-500', (req, res, next) => {
  res.render('error-500', {title: 'Error 500', layout: 'partials/base'});
})

route.get('/error-503', (req, res, next) => {
  res.render('error-503', {title: 'Error 503', layout: 'partials/base'});
})

route.get('/extended-carousel', (req, res, next) => {
  res.render('extended-carousel', {title: 'Extended Carousel'});
})

route.get('/extended-notifications', (req, res, next) => {
  res.render('extended-notifications', {title: 'Extended Notifications'});
})

route.get('/extended-offcanvas', (req, res, next) => {
  res.render('extended-offcanvas', {title: 'Extended Offcanvas'});
})

route.get('/extended-range-slider', (req, res, next) => {
  res.render('extended-range-slider', {title: 'Extended Range Slider'});
})

route.get('/extended-scrollbar', (req, res, next) => {
  res.render('extended-scrollbar', {title: 'Extended Scrollbar'});
})

route.get('/extended-scrollspy', (req, res, next) => {
  res.render('extended-scrollspy', {title: 'Extended Scrollspy'});
})

route.get('/forms-advanced', (req, res, next) => {
  res.render('forms-advanced', {title: 'Forms Advanced'});
})

route.get('/forms-elements', (req, res, next) => {
  res.render('forms-elements', {title: 'Forms Elements'});
})

route.get('/forms-pickers', (req, res, next) => {
  res.render('forms-pickers', {title: 'Forms Pickers'});
})

route.get('/forms-quilljs', (req, res, next) => {
  res.render('forms-quilljs', {title: 'Forms Quilljs'});
})

route.get('/forms-validation', (req, res, next) => {
  res.render('forms-validation', {title: 'Forms Validation'});
})

route.get('/icons-feather', (req, res, next) => {
  res.render('icons-feather', {title: 'Icons Feather'});
})

route.get('/icons-mdi', (req, res, next) => {
  res.render('icons-mdi', {title: 'Icons Mdi'});
})

route.get('/index-sidebar-dark-rtl', (req, res, next) => {
  res.render('index-sidebar-dark-rtl', {title: 'Index Sidebar Dark Rtl'});
})

route.get('/index-sidebar-dark', (req, res, next) => {
  res.render('index-sidebar-dark', {title: 'Index Sidebar Dark'});
})

route.get('/index-sidebar-rtl', (req, res, next) => {
  res.render('index-sidebar-rtl', {title: 'Index Sidebar Rtl'});
})

route.get('/maps-google', (req, res, next) => {
  res.render('maps-google', {title: 'Maps Google'});
})

route.get('/maps-vector', (req, res, next) => {
  res.render('maps-vector', {title: 'Maps Vector'});
})

route.get('/offline-page', (req, res, next) => {
  res.render('offline-page', {title: 'Offline Page', layout: 'partials/base'});
})

route.get('/pages-coming-soon', (req, res, next) => {
  res.render('pages-coming-soon', {title: 'Pages Coming Soon', layout: 'partials/base'});
})

route.get('/pages-faqs', (req, res, next) => {
  res.render('pages-faqs', {title: 'Pages Faqs'});
})

route.get('/pages-gallery', (req, res, next) => {
  res.render('pages-gallery', {title: 'Pages Gallery'});
})

route.get('/pages-invoice', (req, res, next) => {
  res.render('pages-invoice', {title: 'Pages Invoice'});
})

route.get('/pages-maintenance', (req, res, next) => {
  res.render('pages-maintenance', {title: 'Pages Maintenance', layout: 'partials/base'});
})

route.get('/pages-pricing', (req, res, next) => {
  res.render('pages-pricing', {title: 'Pages Pricing'});
})

route.get('/pages-profile', (req, res, next) => {
  res.render('pages-profile', {title: 'Pages Profile'});
})

route.get('/pages-starter', (req, res, next) => {
  res.render('pages-starter', {title: 'Pages Starter'});
})

route.get('/pages-timeline', (req, res, next) => {
  res.render('pages-timeline', {title: 'Pages Timeline'});
})

route.get('/preview', (req, res, next) => {
  res.render('preview', {title: 'Preview'});
})

route.get('/tables-basic', (req, res, next) => {
  res.render('tables-basic', {title: 'Tables Basic'});
})

route.get('/tables-datatables', (req, res, next) => {
  res.render('tables-datatables', {title: 'Tables Datatables'});
})

route.get('/ui-accordions', (req, res, next) => {
  res.render('ui-accordions', {title: 'Ui Accordions'});
})

route.get('/ui-alerts', (req, res, next) => {
  res.render('ui-alerts', {title: 'Ui Alerts'});
})

route.get('/ui-badges', (req, res, next) => {
  res.render('ui-badges', {title: 'Ui Badges'});
})

route.get('/ui-breadcrumb', (req, res, next) => {
  res.render('ui-breadcrumb', {title: 'Ui Breadcrumb'});
})

route.get('/ui-buttons', (req, res, next) => {
  res.render('ui-buttons', {title: 'Ui Buttons'});
})

route.get('/ui-cards', (req, res, next) => {
  res.render('ui-cards', {title: 'Ui Cards'});
})

route.get('/ui-carousel', (req, res, next) => {
  res.render('ui-carousel', {title: 'Ui Carousel'});
})

route.get('/ui-collapse', (req, res, next) => {
  res.render('ui-collapse', {title: 'Ui Collapse'});
})

route.get('/ui-dropdowns', (req, res, next) => {
  res.render('ui-dropdowns', {title: 'Ui Dropdowns'});
})

route.get('/ui-general', (req, res, next) => {
  res.render('ui-general', {title: 'Ui General'});
})

route.get('/ui-grid', (req, res, next) => {
  res.render('ui-grid', {title: 'Ui Grid'});
})

route.get('/ui-images', (req, res, next) => {
  res.render('ui-images', {title: 'Ui Images'});
})

route.get('/ui-list', (req, res, next) => {
  res.render('ui-list', {title: 'Ui List'});
})

route.get('/ui-modals', (req, res, next) => {
  res.render('ui-modals', {title: 'Ui Modals'});
})

route.get('/ui-offcanvas', (req, res, next) => {
  res.render('ui-offcanvas', {title: 'Ui Offcanvas'});
})

route.get('/ui-pagination', (req, res, next) => {
  res.render('ui-pagination', {title: 'Ui Pagination'});
})

route.get('/ui-placeholders', (req, res, next) => {
  res.render('ui-placeholders', {title: 'Ui Placeholders'});
})

route.get('/ui-popovers', (req, res, next) => {
  res.render('ui-popovers', {title: 'Ui Popovers'});
})

route.get('/ui-progress', (req, res, next) => {
  res.render('ui-progress', {title: 'Ui Progress'});
})

route.get('/ui-scrollspy', (req, res, next) => {
  res.render('ui-scrollspy', {title: 'Ui Scrollspy'});
})

route.get('/ui-spinners', (req, res, next) => {
  res.render('ui-spinners', {title: 'Ui Spinners'});
})

route.get('/ui-tabs', (req, res, next) => {
  res.render('ui-tabs', {title: 'Ui Tabs'});
})

route.get('/ui-tooltips', (req, res, next) => {
  res.render('ui-tooltips', {title: 'Ui Tooltips'});
})

route.get('/ui-typography', (req, res, next) => {
  res.render('ui-typography', {title: 'Ui Typography'});
})

route.get('/ui-video', (req, res, next) => {
  res.render('ui-video', {title: 'Ui Video'});
})

route.get('/widgets', (req, res, next) => {
  res.render('widgets', {title: 'Widgets'});
})

module.exports = route