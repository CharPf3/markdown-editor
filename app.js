const app = Vue.createApp({
  data() {
    return {
      message: ''
    };
  },
  computed: {
    htmlOutput() {
      return marked.parse(this.message);
    },
    charCount() {
        const plainText = this.htmlOutput
            .replace(/<[^>]*>/g, '')   // remove HTML tags
            .replace(/\n/g, '')       // remove newline characters
            .trim();                  // remove leading/trailing spaces

         return plainText.length;
    }
  }
});

app.mount('#app');
