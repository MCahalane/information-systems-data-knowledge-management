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
        .replace(/foundations:\{url:'https:\/\/www\.youtube\.com\/results\?search_query=MIT\+OpenCourseWare\+data\+information\+knowledge',title:'MIT OpenCourseWare \/ university-level framing',context:'[^']+',prompt:'[^']+'\}/, "foundations:{id:'B6uk3Ac6uJY',title:'Data vs Information vs Knowledge — Insight Lab Studios',context:'This video connects the distinction between data, information, and knowledge to critical thinking in the digital age. Use it to examine how raw observations gain meaning, how information can be framed, and why knowledge requires interpretation and judgement.',prompt:'As you watch: how does the video distinguish recorded data from interpreted information and actionable knowledge?'}")
    },
  }],
})
