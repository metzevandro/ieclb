const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  
    domains: [
      "www.luterano.org.br",
      "th.bing.com",
      "1.bp.blogspot.com",
      "images.pexels.com",
      "media.istockphoto.com",
      "placehold.co"
    ],
  },
  webpack: (config, { isServer }) => {
    // Add TypeScript loader for files in 'design-system-zeroz' package
    config.module.rules.push({
      test: /\.tsx?$/,
      include: /design-system-zeroz/,
      use: [
        {
          loader: "ts-loader",
          options: {
            allowTsInNodeModules: true,
            transpileOnly: true, // Apenas transpila, não verifica tipos
            compilerOptions: {
              target: "es5",
              lib: ["dom", "dom.iterable", "esnext"],
              allowJs: true,
              skipLibCheck: true,
              strict: true,
              esModuleInterop: true,
              module: "esnext",
              moduleResolution: "node",
              resolveJsonModule: true,
              jsx: "react",
            },
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.html$/,
      use: "html-loader",
    });

    return config;
  },
};

module.exports = nextConfig;
