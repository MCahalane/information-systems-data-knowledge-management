import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/information-systems-data-knowledge-management/',
  plugins: [react(), {
    name: 'rewrite-asset-paths',
    transform(code, id) {
      if (!id.endsWith('/src/main.jsx')) return null
      return code
        .replaceAll("'/assets/", "'/information-systems-data-knowledge-management/assets/")
        .replaceAll('"/assets/', '"/information-systems-data-knowledge-management/assets/')
        .replaceAll("foundations:{url:'https://www.youtube.com/results?search_query=MIT+OpenCourseWare+data+information+knowledge'", "foundations:{id:'B6uk3Ac6uJY'")
        .replaceAll("title:'MIT OpenCourseWare / university-level framing'", "title:'Data vs Information vs Knowledge: The Key to Smart Thinking — Insight Lab Studios'")
        .replaceAll("This video bridges the conceptual ladder in this section to the way information is discussed in university courses. Watch for the point at which a recorded observation gains context and becomes useful for a decision.", "This video connects the distinction between data, information, and knowledge to critical thinking in the digital age. It examines how raw observations gain meaning, how information can be framed, and why knowledge requires interpretation and judgement.")
        .replaceAll("As you watch: where does interpretation enter the data-to-knowledge ladder?", "As you watch: how does the video distinguish recorded data from interpreted information and actionable knowledge?")
    },
  }],
})
