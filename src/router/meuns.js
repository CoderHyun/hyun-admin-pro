import { h } from 'vue';
import { baseRouters } from '@/router/index';

/**
 * 获取菜单列表
 * @returns
 */
export function getMenus() {
  const transformRouteToItem = (route) => {
    let item = {
      key: route.name,
      path: route.meta?.path,
      label: route.meta?.title,
      title: route.meta?.title,
    };

    // 这假设你的路由元数据中的icon字段存储的是Ant Design的图标组件
    if (route.meta?.icon) {
      item.icon = () => h(route.meta.icon);
    }

    if (route.children && route.children.length > 0) {
      item.children = route.children.map((childRoute) => transformRouteToItem(childRoute));
    }

    return item;
  };

  let result = [];
  for (let route of baseRouters) {
    // 由于外部路由主要是为了包裹 Layout，所以我们直接处理其 children 字段
    if (route.children) {
      for (let child of route.children) {
        result.push(transformRouteToItem(child));
      }
    }
  }
  return result;
}
