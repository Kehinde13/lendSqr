export default {

    presets: [

      [

        '@babel/preset-env',

        {

          targets: {

            node: 'current', 

          },

        },

      ],

      '@babel/preset-react', // Adds support for JSX

    ],

    plugins: [],

  };