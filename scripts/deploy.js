#!/usr/bin/env node

/**
 * Deployment script for Vercel
 * This script runs during build to set up the database and environment
 */

const { execSync } = require('child_process');

async function deploySetup() {
  try {
    console.log('🚀 Starting deployment setup...');
    
    // Check if we're in production
    if (process.env.NODE_ENV === 'production') {
      console.log('📦 Production environment detected');
      
      // Set up authentication URLs if not provided
      if (!process.env.BETTER_AUTH_URL && process.env.VERCEL_URL) {
        const baseUrl = `https://${process.env.VERCEL_URL}`;
        process.env.BETTER_AUTH_URL = `${baseUrl}/api/auth`;
        process.env.NEXT_BASE_URL = baseUrl;
        console.log(`🔗 Auto-configured auth URLs for: ${baseUrl}`);
      }
      
      // Run database migrations if any database URL is available  
      const dbUrl = process.env.NEON_DATABASE_URL || process.env.POSTGRES_PRISMA_URL || process.env.DATABASE_URL;
      if (dbUrl) {
        console.log('🗄️ Running database migrations...');
        let dbType = 'External PostgreSQL';
        if (dbUrl.includes('neon')) dbType = 'Neon PostgreSQL';
        else if (dbUrl.includes('vercel')) dbType = 'Vercel Postgres';
        console.log('📡 Using database:', dbType);
        execSync('npx prisma migrate deploy', { stdio: 'inherit' });
        console.log('✅ Database migrations completed');
      } else {
        console.log('⚠️ No database URL found - skipping migrations');
        console.log('💡 Click the Deploy button to auto-install Neon PostgreSQL integration');
      }
      
      // Generate Prisma client
      console.log('🔧 Generating Prisma client...');
      execSync('npx prisma generate', { stdio: 'inherit' });
      console.log('✅ Prisma client generated');
    }
    
    console.log('🎉 Deployment setup completed successfully!');
  } catch (error) {
    console.error('❌ Deployment setup failed:', error.message);
    
    // Don't fail the build for optional setup steps
    if (error.message.includes('DATABASE_URL')) {
      console.log('ℹ️ Database setup failed - app will run with limited functionality');
    } else {
      throw error;
    }
  }
}

deploySetup();
