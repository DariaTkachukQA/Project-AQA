import { defineConfig } from "@playwright/test";
import { defineBddConfig } from "playwright-bdd";
import { devices }  from "@playwright/test";



// const bddConfigdesktop = defineBddConfig({
//   features: "tests/features/desktop/*.feature",  
//   steps: "tests/steps/*.step.js",   
//   outputDir: 'test-results/projectA',         
// });

// const bddConfigMobile = defineBddConfig({
//   features: "tests/features/mobile/*.feature",  
//   steps: "tests/steps/*.step.js",  
//   outputDir: 'test-results/projectB',          
// });

export default defineConfig({
  reporter: "html",
  timeout: 100000,
  use: {
    browserName: "chromium",
  },
  projects: [
    {
      name: 'project-one',
      use: { 
                channel: 'chrome',
                baseURL: process.env.BASE_URL,
                viewport: { width: 1536, height: 960 },
      }, 
        testDir: defineBddConfig({ 
        outputDir: '.features-gen/one',
        features: "tests/features/desktop/*.feature",
        steps: 'tests/steps/*.step.js',
        
        
      }),
    },

    {
      name: 'project-two',
      use: { 
        channel: 'chrome',
        baseURL: process.env.BASE_URL,
        viewport: { width: 300, height: 500 },
}, 
       use: {
        ...devices['iPhone 14'], // iPhone 14 emulation
        baseURL: process.env.BASE_URL,
        browserName: 'webkit', // Safari for iPhone emulation
      },
        testDir: defineBddConfig({
        outputDir: '.features-gen/two',
        features: 'tests/features/mobile/*.feature',
        steps: 'tests/steps/*.step.js',
      }),
    },
  ],
});

// export default defineConfig({
//   reporter: "html",
//   use: {
//     browserName: "chromium",
//   },
//   projects: [
//     {
//       name: 'bdd',
//       testDir: bddConfigdesktop,
//       //testMatch: /tests\/bdd\/filters\/*/,
//       use: { 
//         channel: 'chrome',
//         baseURL: process.env.BASE_URL,
//         viewport: { width: 1536, height: 960 },
        
//       }
//     },
//     {
//       name: 'bdd-mobile-safari',
//       testDir:bddConfigMobile,
//       use: {
//         ...devices['iPhone 14'], // iPhone 14 emulation
//         baseURL: process.env.BASE_URL,
//         browserName: 'webkit', // Safari for iPhone emulation
//       },
//     },
//   ],
    

// });
