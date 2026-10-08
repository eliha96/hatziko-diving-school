/* ==========================================================================
   Hatziko Diving School - Fast Automated Bundler
   Compiles modular sources (js/, css/) into standalone browser bundles
   ========================================================================== */

let esbuild;
try {
    esbuild = require('esbuild');
} catch (e) {
    // Fallback if not directly loaded
}

console.log('⚡ Building Hatziko bundles...');

async function runBuild() {
    if (esbuild && typeof esbuild.build === 'function') {
        // 1. Bundle main site JS
        await esbuild.build({
            entryPoints: ['js/main.js'],
            bundle: true,
            outfile: 'app.js',
            format: 'iife'
        });

        // 2. Bundle coming soon JS
        await esbuild.build({
            entryPoints: ['js/coming-soon/main.js'],
            bundle: true,
            outfile: 'coming-soon.js',
            format: 'iife'
        });

        // 3. Bundle main CSS
        await esbuild.build({
            entryPoints: ['css/main.css'],
            bundle: true,
            outfile: 'style.css'
        });

        // 4. Bundle coming soon CSS
        await esbuild.build({
            entryPoints: ['css/coming-soon.css'],
            bundle: true,
            outfile: 'css/coming-soon.bundle.css'
        });
    } else {
        const { execSync } = require('child_process');
        execSync('npx esbuild js/main.js --bundle --outfile=app.js --format=iife', { stdio: 'inherit' });
        execSync('npx esbuild js/coming-soon/main.js --bundle --outfile=coming-soon.js --format=iife', { stdio: 'inherit' });
        execSync('npx esbuild css/main.css --bundle --outfile=style.css', { stdio: 'inherit' });
        execSync('npx esbuild css/coming-soon.css --bundle --outfile=css/coming-soon.bundle.css', { stdio: 'inherit' });
    }

    console.log('✅ All bundles compiled successfully!');
}

runBuild().catch(err => {
    console.error('❌ Build failed:', err);
    process.exit(1);
});
