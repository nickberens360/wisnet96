<template>
  <FileWindow
      :id="id"
      :title-id="titleId+'header'"
  >
    <template v-slot:header>
      <FileWindowNav/>
      <FileWindowAddress/>
    </template>
    <template v-slot:content>
      <slot />
    </template>
  </FileWindow>
</template>

<script>

import FileWindow from "@/components/Windows95/FileWindow/FileWindow";
import FileWindowNav from "@/components/Windows95/FileWindow/FileWindowNav";
import FileWindowAddress from "@/components/Windows95/FileWindow/FileWindowAddress";

export default {
  name: "InternetExplorer",
  components: {FileWindow, FileWindowNav, FileWindowAddress},
  props: {
    id: {
      type: String,
      required: true,
      default: 'explorer'
    },
    titleId: {
      type: String,
      required: true,
      default: 'explorer'
    },

  }


}
</script>
