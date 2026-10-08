/* ==========================================================================
   Hatziko Diving School - Fast Automated Bundler
   Compiles modular sources (js/, css/) into standalone browser bundles
   Runs in ~100ms using esbuild
   ========================================================================== */

const { execSync } = require('child_process');

console.log('⚡ Building Hatziko bundles...');

try {
    // 1. Bundle main site JS
    execSync('npx -y esbuild js/main.js --bundle --outfile=app.js --format=iife', { stdio: 'inherit' });
    
    // 2. Bundle coming soon JS
    execSync('npx -y esbuild js/coming-soon/main.js --bundle --outfile=coming-soon.js --format=iife', { stdio: 'inherit' });

    // 3. Bundle main CSS
    execSync('npx -y esbuild css/main.css --bundle --outfile=style.css', { stdio: 'inherit' });

    // 4. Bundle coming soon CSS
    execSync('npx -y esbuild css/coming-soon.css --bundle --outfile=css/coming-soon.bundle.css', { stdio: 'inherit' });

    console.log('✅ All bundles compiled successfully!');
} catch (err) {
    console.error('❌ Build failed:', err);
    process.exit(1);
}
