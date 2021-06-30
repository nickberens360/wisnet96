<template>
  <InternetExplorer
      :id="$route.name"
      :title-id="$route.name"
      class="text-center"
  >

    <div class="site-content-container">


      <form
          name="make-a-page"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          class="site-sidebar"
      >
        <input type="hidden" name="form-name" value="make-a-page" />
        <div class="site-sidebar__container">
          <div class="site-sidebar__group">
            <div class="form-group text-left">
              <label for="title">Site Name</label>
              <input
                  v-model="formResponse.title"
                  id="title"
                  name="title"
                  class="form-input"
                  type="text"
              >
            </div>
            <div class="form-group text-left">
              <label for="email">Email*</label>
              <input
                  v-model.lazy="$v.formResponse.email.$model"
                  id="email"
                  name="email"
                  class="form-input"
                  type="email"
                  placeholder="youremail@emal.com"
                  required
              >
              <p v-if="errors" class="error">
                <span v-if="!$v.formResponse.email.required">this field is required.</span>
                <span v-if="!$v.formResponse.email.email">Needs to be a valid email.</span>
              </p>
            </div>

            <div class="form-group text-left">
              <label for="website">Website URL</label>
              <input
                  v-model="formResponse.website"
                  id="website"
                  name="website"
                  class="form-input"
                  type="text"
                  placeholder="https://www.yoursite.com/"
              >
            </div>
            <div class="form-group text-left">
              <label for="content">Content</label>
              <textarea
                  v-model="formResponse.content"
                  id="content"
                  name="content"
                  class="form-input"
                  type="text"
                  placeholder="A paragraph or two about your organization"
                  style="height: 150px !important; overflow-y: scroll"
              ></textarea>
            </div>
            <div class="form-group text-left">
              <label for="logo">Upload Logo</label>
              <input
                  @change="onFileChange"
                  id="logo"
                  name="logo"
                  class="file-input"
                  type="file"
              >
            </div>
            <div class="form-group">
              <button type="submit" class="btn" @click.prevent="handleSubmit">Send</button>
              <!--              <button @click.prevent="submit" class="submit">Submit</button>-->
              <p v-if="errors" class="error">The form above has errors,
                <br>please get your act together and resubmit
              </p>
              <p v-else-if="empty && uiState === 'submit clicked'" class="error">The form above is empty,
                <br>cmon y'all you can't submit an empty form!
              </p>
              <p v-else-if="uiState === 'form submitted'" class="success">Hooray! Your form was submitted!</p>
            </div>
          </div>
        </div>
      </form>
      <div
          class="site-content"
      >

        <div class="site-header">
          <div style="background: white; display: inline-block">
            <img
                v-if="formResponse.logo"
                :src="formResponse.logo"
                alt=""
                class="site-logo"
            >
          </div>
          <marquee behavior="scroll">
            <h1>{{formResponse.title}}</h1>
          </marquee>
          <img src="/welcome13d.gif" alt="">
        </div>

        <div class="site-content-main" :style=" `background-image: ${bgImg};`   ">
          <div class="text-center">
            <img src="/hamster62.gif" alt="">
          </div>
          <div>
            <p>{{ formResponse.content }}</p>
          </div>
        </div>

        <div class="text-center mt-50">
          <img src="/spaceship.gif" alt="">
          <img src="/spaceship.gif" alt="">
          <img src="/spaceship.gif" alt="">
          <img src="/spaceship.gif" alt="">
          <img src="/spaceship.gif" alt="">
        </div>


      </div>
    </div>


  </InternetExplorer>

</template>


<script>

import InternetExplorer from "@/components/Windows95/InternetExplorer/InternetExplorer";
import {validationMixin} from 'vuelidate';
import {required, email} from 'vuelidate/lib/validators';
import axios from "axios";

export default {
  mixins: [validationMixin],
  components: {InternetExplorer},
  data() {
    return {
      slug: this.$route.params.slug,
      bgImg: 'none',
      uiState: "submit not clicked",
      errors: false,
      empty: true,
      formResponse: {
        title: null,
        email: null,
        website: null,
        logo: null,
        content: null,
      },
    };
  },
  validations: {
    formResponse: {
      email: {
        email,
        required
      }
    }

  },

  methods: {
    encode (data) {
      return Object.keys(data)
          .map(
              key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
          )
          .join("&");
    },
    handleSubmit() {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data' },
        body: this.encode({ 'form-name': 'make-a-page', ...this.formResponse }),
      })
          .then(() => console.log('Success!'))
          .catch(error => console.log(error));
    },

    /*submit() {
      this.empty = !this.$v.formResponse.$anyDirty;
      this.errors = this.$v.formResponse.$anyError;
      this.uiState = "submit clicked";
      if (this.errors === false && this.empty === false) {
        console.log(this.formResponse);
        this.uiState = "form submitted";
      }
    },*/
    onFileChange(e) {
      const file = e.target.files[0];
      this.formResponse.logo = URL.createObjectURL(file);
    }
  }

  /*head: {
    title: 'wisnet96 | '+ this.metaTitle,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description'
      }
    ],
  }*/
};
</script>

<style lang="scss" scoped>
.site-logo {
  max-width: 200px;
  max-height: 150px;
  margin: auto;
  display: block;

}


.site-content-container {
  display: flex;
  min-height: 100%;
  font-family: 'Comic Neue', cursive;
  font-weight: 700;
  background: black url("/background.gif");
}

.site-sidebar {
  flex: 300px;
  max-width: 300px;
  padding: 10px 15px;
  background: silver;
  font-family: "Windows 95", sans-serif;
  font-weight: 400;
}
.error {
  color: red;
  font-size: 12px;
}

input.file-input {
  background: none !important;
  padding: 0 !important;
  border: none !important;

}

.site-sidebar__container {
  position: sticky;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  top: 20px;
}

.site-sidebar__group {
  a {
    font-weight: bold;
    font-size: 24px;
    color: blue;
    text-decoration: underline;
  }
}

.site-header {
  display: flex;
  text-align: center;
  margin-bottom: 20px;
  border: 2px solid red;
  border-radius: 10px;
  padding: 10px;
  align-items: center;
}

marquee {
  display: block;
  max-width: 200px;
  margin: auto;
}

h1 {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 0;
  color: white;

}


.site-content {
  flex: 100%;
  flex-grow: 1;
  padding: 20px;

  text-align: left;
  font-size: 14px;

  /deep/ p, /deep/ ul {
    //border: 4px solid #04ff46 !important;
    font-size: 18px;
    background: white;
    padding: 10px;
    border-radius: 10px;
  }
}

.site-content-main {
  background-size: 25%;
  border-radius: 10px;
  border: 2px solid red;
  padding: 40px 20px;
}

@media only screen and (max-width: 840px) {
  /*.hidden-mobile {
    display: none;
  }*/
  .site-content-container {
    display: block;
  }
  .site-sidebar {
    max-width: 100%;
    //display: none;
  }
  .site-sidebar__container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: relative;
    top: auto;
  }
}

@media only screen and (max-width: 625px) {
  .site-header {
    display: flex;
    flex-direction: column;
  }
}


</style>

