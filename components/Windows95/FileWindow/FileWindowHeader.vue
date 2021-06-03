<template>
    <div :id="id" class="card-header file-window-header d-flex justify-content-between align-items-center">
      <span>Wisnet Explorer 96</span>
      <nuxt-link to="/" class="btn btn-sm btn-close p-2" aria-label="Close">
        <span class="position-relative font-weight-bold" aria-hidden="true">X</span>
      </nuxt-link>
    </div>
</template>

<script>

import FileWindowNav from '@/components/Windows95/FileWindow/FileWindowNav'

export default {
  name: "FileWindowHeader",
  components: {FileWindowNav},
  props: {
    id: {
      type: String,
      required: false
    },
    address: {
      type: String,
      required: false
    }
  },
  data(){
    return {
      foobar: null
    }
  },
  computed: {
    currentRouteDisplay() {
      return this.$route.fullPath
    }
  },
  /*methods: {
    submit(e){
      console.log(e);
      if (e.keyCode === 13) {
        this.$router.push('/page/portfolio/');
      }
    }
  }*/
  /*methods: {
    validateEmailAddress: function(e, path) {
      if (e.keyCode === 13) {
        this.$router.push({
          path: path
        })
      }
    },
  }*/
}
</script>

<style lang="scss" scoped>
.file-window-header {
  font-family: "Windows 95", sans-serif;
  font-weight: bold;
  span {
    font-weight: bold;
  }
  .btn-close   {
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      color: red;
      font-weight: bold;
    }
  }
}


.navbar {
  margin-bottom: 0;
}

.form-group {
  margin-bottom: 0;
  flex: auto;
}
</style>