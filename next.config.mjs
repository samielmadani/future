/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ariobe.irisceramicagroup.com",
            },
            {
                protocol: "https",
                hostname: "drive.google.com",
            }
            ,
            {
                protocol: "https",
                hostname: "cdn.dribbble.com",
            },
            {
                protocol: "https",
                hostname: "1drv.ms", // Add OneDrive hostname
            }
        ]
    }
};

export default nextConfig;
