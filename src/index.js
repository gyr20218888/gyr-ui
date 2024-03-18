import { ElNotification, ElLoading, ElMessageBox } from "element-plus";

let loadingInstance = null;

const ui = {
  // 普通提示
  toast: (message) => {
    ElNotification({
      message: message,
      type: "info"
    });
  },
  // 成功提示
  success: (message) => {
    ElNotification({
      message: message,
      type: "success"
    });
  },
  // 警告提示
  warn: (message) => {
    ElNotification({
      message: message,
      type: "warning"
    });
  },
  // 错误提示
  error: (message) => {
    ElNotification({
      message: message,
      type: "error"
    });
  },
  // 显示加载中
  showLoading: (message) => {
    loadingInstance = ElLoading.service({
      fullscreen: true,
      text: message,
      background: "rgba(0, 0, 0, 0.7)"
    });
  },
  // 隐藏加载中
  hideLoading: () => {
    if (loadingInstance) {
      loadingInstance.close();
      loadingInstance = null;
    }
  },
  // 消息提示
  alert: (title, message, fn = null, btnText = "确定") => {
    ElMessageBox.alert(message, title, {
      confirmButtonText: btnText,
      center: true,
      buttonSize: "large",
      callback: () => {
        fn && fn();
      }
    });
  },
  // 确认对话框
  confirm: (
    title,
    message,
    confirmFn = null,
    cancelFn = null,
    confirmText = "确定",
    cancelText = "取消"
  ) => {
    ElMessageBox.confirm(message, title, {
      confirmButtonText: confirmText,
      cancelButtonText: cancelText,
      center: true,
      buttonSize: "large"
    })
      .then(() => {
        confirmFn && confirmFn();
      })
      .catch(() => {
        cancelFn && cancelFn();
      });
  },
  // 内容提交
  prompt: (
    title,
    message,
    value,
    options = {},
    confirmFn = null,
    cancelFn = null,
    confirmText = "确定",
    cancelText = "取消"
  ) => {
    let promptOptions = Object.assign(options || {}, {
      confirmButtonText: confirmText,
      cancelButtonText: cancelText,
      inputValue: value,
      // inputPattern: /^[A-Za-z0-9\u4e00-\u9fa5]+$/,
      // inputErrorMessage: '请填写内容',
      // inputPlaceholder: '',
      center: true,
      buttonSize: "large"
    });

    ElMessageBox.prompt(message, title, promptOptions)
      .then(({ value }) => {
        confirmFn && confirmFn(value);
      })
      .catch(() => {
        cancelFn && cancelFn();
      });
  }
};

export default ui;
