/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ariobe.irisceramicagroup.com",
            }
        ]
    }
};

export default nextConfig;
