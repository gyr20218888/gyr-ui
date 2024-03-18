# gyr-ui

UI 工具类，用于快速引用 alert, confirm, loading 等组件

```sh
npm install gyr-ui
```

```js
import ui from "gyr-ui";
```

## example

```js
ui.toast("操作成功");
ui.success("登录成功，获得积分");
ui.alert("操作成功", "会员账号已注册成功", () => {
  // TODO
});
```
