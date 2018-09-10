import { NavModel } from "../Models/NavModel";

export class NavService {

  getNavList = () => {
    const list: NavModel[] = [];
    list.push(new NavModel({name: 'About', to: '/about',
     desc: [
      '测试画面怎样由components构成的',
    ]}));
    list.push(new NavModel({name: 'Topics', to: '/topics',
     desc: [
      '测试父路由和子路由',
    ]}));
    list.push(new NavModel({name: '页面footer部固定', to: '/absoluteFooter',
     desc: [
      '测试footer部绝对定位。',
      '实现无论页面高度达不达得到浏览器窗口高度，footer部都会一直显示在页面底部。',
    ]}));

    return list;
  }
}