import { defineConfig } from "@playwright/test";
import { defineBddConfig } from "playwright-bdd";
import { devices } from "@playwright/test";


const bddConfig = defineBddConfig({
  features: "tests/features/*.feature",  
  steps: "tests/steps/*.step.js",            
});

export default defineConfig({
  reporter: "html",
  use: {
    browserName: "chromium",
  },
  projects: [
    {
      name: 'bdd',
      testDir: bddConfig,
      //testMatch: /tests\/bdd\/filters\/*/,
      use: { 
        channel: 'chrome',
        baseURL: process.env.BASE_URL,
        viewport: { width: 1536, height: 960 },
        
      }
    },
    {
      name: 'bdd-mobile-safari',
      use: {
        ...devices['iPhone 14'], // iPhone 14 emulation
        baseURL: process.env.BASE_URL,
        browserName: 'webkit', // Safari for iPhone emulation
      },
    },
  ],
    
  
});
