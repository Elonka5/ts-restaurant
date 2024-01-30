import { Configuration } from 'webpack';

interface CracoConfig {
  webpack: {
    configure: (config: Configuration) => Configuration;
  };
}

const cracoConfig: CracoConfig = {
  webpack: {
    configure: config => {
      if (config.resolve) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          path: require.resolve('path-browserify'),
        };
      }
      return config;
    },
  },
};

export default cracoConfig;
