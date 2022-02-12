import { createApp } from "vue";
import ElementPlus from "element-plus";
import * as Icons from "@element-plus/icons-vue";
import "element-plus/dist/index.css";


import "./style.scss";
import App from "./App.vue";
import router from "./router/index";
import { toLine } from "./utils";

const app = createApp(App).use(router).use(ElementPlus);

// 全局注册图标 牺牲一点儿性能
for (let i in Icons) {
	app.component(`el-icon-${toLine(i)}`, (Icons as any)[i]);
}
app.mount("#app");
