import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isRunningWebpack = !!process.env.WEBPACK;
const isRunningRspack = !!process.env.RSPACK;
if (!isRunningRspack && !isRunningWebpack) {
  throw new Error("Unknown bundler");
}

/**
 * @type {import('webpack').Configuration | import('@rspack/cli').Configuration}
 */
const config = {
  mode: "development",
  devtool: false,
  entry: {
    main: "./src/index",
  },
  target: [
    'web',
    'es2017'
  ],
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.mjs',
      '.json'
    ]
  },
  module: {
    parser: {
      javascript: {
        exportsPresence: 'error'
      }
    },
    rules: [
      /* config.module.rule('mjs') */
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
      },
      /* config.module.rule('js') */
      {
        test: /\.(?:js|jsx|mjs|cjs|ts|tsx|mts|cts)$/,
        type: 'javascript/auto',
        use: [
          /* config.module.rule('js').use('swc') */
          {
            loader: 'builtin:swc-loader',
            options: {
              jsc: {
                externalHelpers: true,
                parser: {
                  tsx: false,
                  syntax: 'typescript',
                  decorators: true
                },
                preserveAllComments: true,
                transform: {
                  legacyDecorator: true,
                  decoratorMetadata: true,
                  useDefineForClassFields: false
                }
              },
              isModule: 'unknown',
              env: {
                targets: [
                  'chrome >= 87',
                  'edge >= 88',
                  'firefox >= 78',
                  'safari >= 14'
                ],
                mode: 'usage',
                coreJs: '3.36',
                shippedProposals: true
              }
            }
          }
        ],
      },
      /* config.module.rule('js-data-uri') */
      {
        mimetype: {
          or: [
            'text/javascript',
            'application/javascript'
          ]
        },
        use: [
          /* config.module.rule('js-data-uri').use('swc') */
          {
            loader: 'builtin:swc-loader',
            options: {
              jsc: {
                externalHelpers: true,
                parser: {
                  tsx: false,
                  syntax: 'typescript',
                  decorators: true
                },
                preserveAllComments: true,
                transform: {
                  legacyDecorator: true,
                  decoratorMetadata: true,
                  useDefineForClassFields: false
                }
              },
              isModule: 'unknown',
              env: {
                targets: [
                  'chrome >= 87',
                  'edge >= 88',
                  'firefox >= 78',
                  'safari >= 14'
                ],
                mode: 'usage',
                coreJs: '3.36',
                shippedProposals: true
              }
            }
          }
        ],
        resolve: {
          fullySpecified: false,
        }
      },
    ]
  },
  output: {
    clean: true,
    path: isRunningWebpack
      ? path.resolve(__dirname, "webpack-dist")
      : path.resolve(__dirname, "rspack-dist"),
    filename: "[name].js",
  },
  experiments: {
    css: true,
  },
  optimization: {
    concatenateModules: true,
  }
};

export default config;
