<template>
  <InternetExplorer>
    <div class="layout">
      <PageSidebar/>
      <nuxt-child :key="$route.name"/>
    </div>
  </InternetExplorer>

</template>


<script>

import PageSidebar from "@/components/PageSidebar";
import InternetExplorer from "@/components/Windows95/InternetExplorer";

export default {
  layout: 'default',
  components: {PageSidebar, InternetExplorer},
};
</script>

<style>
.layout {
  padding-top: 20px;
  background: black;
}

</style>

<style lang="scss">
.page-layout {
  font-family: serif;
  color: var(--wisnet-color-gray-200);

  h1 {
    color: var(--wisnet-color-red);
    text-align: center;
  }
}

.index .page-content {
  color: var(--wisnet-color-gray-200);
}


.has-text-align-center {
  text-align: center;
}

.page-header {
  text-align: center;
  margin-bottom: 30px;

  img {
    display: block;
    max-width: 100%;
    margin: auto;
  }

  p {
    font-weight: bold;
  }
}

.dots {
  margin-bottom: 30px !important;
}

.page-content {
  font-weight: bold;
  font-size: 17px;

  p, ul {
    margin-bottom: 30px;
  }

  a {
    color: var(--wisnet-color-red);
  }
}

.highlight {
  font-weight: bold;
  color: var(--wisnet-color-red);
}

.list-highlight {
  font-weight: bold;
  font-size: 20px;
}


.page-footer {
  text-align: center;
  padding-bottom: 30px;
}


.index, .services {
  strong {
    color: var(--wisnet-color-red)
  }
}

.make-a-page {
  color: var(--wisnet-color-green-200);

  h4, span {
    color: var(--wisnet-color-yellow);
  }

  h2 a {
    color: var(--wisnet-color-yellow);
    text-decoration: underline;
  }
}

.wisnet-developers {
  text-align: center;
}

/*.page-layout {
  font-family: sans-serif;
  font-size: 14px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: serif;
  }
}*/

</style>

