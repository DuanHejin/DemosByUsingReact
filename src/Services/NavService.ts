import { NavModel } from "../Models/NavModel";

export class NavService {

  /**
   * 获取导航栏列表
   */
  getNavList = () => {
    const list: NavModel[] = [];
    list.push(new NavModel({
      name: 'About', to: '/about',
      desc: [
        '测试画面怎样由components构成的',
      ]
    }));
    list.push(new NavModel({
      name: 'Topics', to: '/topics',
      desc: [
        '测试父路由和子路由',
      ]
    }));
    list.push(new NavModel({
      name: '页面footer部固定', to: '/absoluteFooter',
      desc: [
        '测试footer部绝对定位。',
        '实现无论页面高度达不达得到浏览器窗口高度，footer部都会一直显示在页面底部。',
      ]
    }));
    list.push(new NavModel({
      name: 'Http Payload', to: '/http-payload',
      desc: [
        '以Payload作为参数传输的http请求',
      ]
    }));
    list.push(new NavModel({
      name: 'Http Form Data', to: '/http-form-data',
      desc: [
        '以Form Data作为参数传输的http请求',
      ]
    }));
    list.push(new NavModel({
      name: 'parent-and-child', to: '/parent-and-child',
      desc: [
        '验证父组件和子组件渲染关系',
      ]
    }));
    list.push(new NavModel({
      name: 'lifeCycle', to: '/lifeCycle',
      desc: [
        'react生命周期',
      ]
    }));
    list.push(new NavModel({
      name: 'checkShouldComUpdate', to: '/checkShouldComUpdate',
      desc: [
        'checkShouldComUpdate',
      ]
    }));
    list.push(new NavModel({
      name: 'hooksUpdateState', to: '/hooksUpdateState',
      desc: [
        'hooksUpdateState',
      ]
    }));

    return list;
  }
}