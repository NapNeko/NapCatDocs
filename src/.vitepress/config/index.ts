import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { zh } from './zh'
import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid(defineConfig({
  ...shared,
  locales: {
    root: { label: '简体中文', ...zh }
  },
  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  // optionally set additional config for plugin itself with MermaidPluginConfig
  mermaidPlugin: {
    class: "mermaid my-class", // set additional css classes for parent container 
  }
}));
