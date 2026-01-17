// pages/sitemap.xml.js

import { MyProjects } from "@/components/home/projects/Projects";

const SITE_URL = 'https://fabiconcept.com';

const socialLinks = [
    'https://www.linkedin.com/in/favour-ajokubi-371904222/',
    'https://www.github.com/fabiconcept',
    'https://www.twitter.com/goath2o',
    'https://www.instagram.com/fabiconcept_ng',
];

// Helper function to escape XML special characters
function escapeXml(unsafe) {
    return unsafe.replace(/[<>&'"]/g, (c) => {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '\'': return '&apos;';
            case '"': return '&quot;';
            default: return c;
        }
    });
}

function generateSiteMap() {
    const currentDate = new Date().toISOString();

    const pageSections = [
        {
            url: SITE_URL,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 1.0,
        },
        {
            url: `${SITE_URL}/#about`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/#projects`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/#experience`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/#contact`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];

    const socialEntries = socialLinks.map((link) => ({
        url: link,
        lastModified: currentDate,
        changeFrequency: 'yearly',
        priority: 0.5,
    }));

    const projectEntries = MyProjects.map((project) => ({
        url: project.projectLink,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.6,
    }));

    const allUrls = [...pageSections, ...socialEntries, ...projectEntries];

    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${allUrls
            .map(({ url, lastModified, changeFrequency, priority }) => {
                return `
       <url>
           <loc>${escapeXml(url)}</loc>
           <lastmod>${lastModified}</lastmod>
           <changefreq>${changeFrequency}</changefreq>
           <priority>${priority}</priority>
       </url>
     `;
            })
            .join('')}
   </urlset>
 `;
}

function SiteMap() {
    return null;
}

export async function getServerSideProps({ res }) {
    const sitemap = generateSiteMap();

    res.setHeader('Content-Type', 'text/xml');
    res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;