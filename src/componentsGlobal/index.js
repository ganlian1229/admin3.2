const path = require('path');
const filName = require.context('../componentsGlobal', true, /\.vue$/);
export default function setupGlobal(app) {
    filName.keys().forEach((item) => {
        const name = path.basename(item, '.vue');
        app.component(name, filName(item).default);
    });
}
