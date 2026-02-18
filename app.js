const app = Vue.createApp({
  data() {
    return {
      message: '',
      theme: 'light'
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
    },
    themeIcon() {
        return this.theme === 'light' ? 'dark_mode' : 'light_mode';
    }
  },

  mounted() {
    // Load saved markdown
    const savedText = localStorage.getItem('markdownText');
    if (savedText) {
      this.message = savedText;
    }

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.theme = savedTheme;
      document.documentElement
        .setAttribute('data-bs-theme', this.theme);
    }
  },

  watch: {
    message(newValue) {
      localStorage.setItem('markdownText', newValue);
    },

    theme(newTheme) {
      localStorage.setItem('theme', newTheme);
      document.documentElement
        .setAttribute('data-bs-theme', newTheme);
    }
  },

  methods: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
    }
  }
});


app.mount('#app');
