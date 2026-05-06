import { readFile } from 'fs/promises';
import { join } from 'path';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const referer = request.headers.get('referer');
  const host = request.headers.get('host');
  
  // Strict referer check
  if (!referer || !referer.includes(host || 'websyncdigital.com.ng')) {
    console.warn(`[Security] Unauthorized access attempt to CAC asset from: ${referer}`);
    return new NextResponse('Asset Protection: Hotlinking Forbidden', { status: 403 });
  }

  // Block common scrapers and cross-site requests
  const secFetchSite = request.headers.get('sec-fetch-site');
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';
  const botKeywords = ['bot', 'scraper', 'crawl', 'python', 'curl', 'wget', 'postman'];
  
  if (secFetchSite === 'cross-site' || botKeywords.some(keyword => userAgent.includes(keyword))) {
      return new NextResponse('Asset Protection: Access restricted to browser-only within WebSync ecosystem', { status: 403 });
  }

  try {
    const filePath = join(process.cwd(), 'src', 'legal-assets', 'cac.png');
    const fileBuffer = await readFile(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'image/png',
        // High security headers
        'Cache-Control': 'private, no-cache, no-store, must-revalidate',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-Robots-Tag': 'noindex, nofollow, noarchive', // Prevent search engine indexing of the raw image
        'Content-Disposition': 'inline; filename="ws_verification_only.png"'
      },
    });
  } catch (error) {
    return new NextResponse('Internal Error', { status: 500 });
  }
}
