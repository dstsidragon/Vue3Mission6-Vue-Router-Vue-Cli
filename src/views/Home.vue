<template>
  <div class="nav-link">
    <a  class="nav-link disabled" href="#" >{{userName}},你好</a>
    <router-link to="/">首頁</router-link> | <router-link to="/products">產品列表</router-link>|
    <router-link to="/carts">購物車列表</router-link>|
    <router-link to="/orders">訂單列表</router-link>|
    <a  href="#" v-if="loginStatus" @click.prevent="openiSgnOutUserModal">登出</a>
    <router-link v-else to="/Login">登入</router-link>|
    <router-link to="/admin">後台</router-link>
    <router-view />
  </div>
   <!-- 登出Modal -->
  <LoginOut ref="signOutUserModal" @sign-out-admin="signOutAdmin"></LoginOut>

</template>

<script>
import LoginOut from '@/components/LoginOut.vue';

export default {
  components: {
    // modal-登出
    LoginOut,
  },
  data() {
    return {
      // 使用者名稱
      userName: '訪客',
      // 登入/登出鈕
      loginStatus: false,
      // 讀取狀態
      loadingStatue: {
        // 查看內容鈕
        viewContentStatus: '',
        // 加到購物車鈕
        addCart: '',
      },
    };
  },
  methods: {
    // 登出
    signOutAdmin() {
      this.$http
        .post(`${process.env.VUE_APP_API}/logout`)
        .then((res) => {
          // console.log(res);
          // 如果成功就執行
          if (res.data.success) {
            alert(res.data.message);

            // 刪除cookie
            this.deleteAllCookies();
            // 跳轉頁面
            this.$router.push('/Login');
          } else {
            alert('未知的錯誤!');

            // 跳轉頁面
            this.$router.push('/Login');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 登出Modal
    openiSgnOutUserModal() {
      this.$refs.signOutUserModal.openModal();
    },
    // 刪除cookie
    deleteAllCookies() {
      const cookies = document.cookie.split(';');

      for (let i = 0; i < cookies.length; i += 1) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
      }
    },
    // 判斷使用者值
    chkUserName() {
      // 如果有取到值 ，代表已登入
      if (document.cookie.replace(/(?:(?:^|.*;\s*)username\s*=\s*([^;]*).*$)|^.*$/, '$1') !== '') {
        this.userName = document.cookie.replace(
          /(?:(?:^|.*;\s*)username\s*=\s*([^;]*).*$)|^.*$/,
          '$1',
        );
        // 登入狀態
        this.loginStatus = true;
      } else {
        this.userName = '訪客';
        // 登入狀態
        this.loginStatus = false;
      }
    },
  },
  created() {
    // 判斷使用者值
    this.chkUserName();
  },
};
</script>
