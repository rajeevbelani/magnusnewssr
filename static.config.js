import axios from 'axios'
import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'
/*
* For Less Support
* */
import autoprefixer from 'autoprefixer'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import postcssFlexbugsFixes from 'postcss-flexbugs-fixes'

/*
* For TypeScript Support
* */
const typescriptWebpackPaths = require('./webpack.config.js')

const path = require('path')
const fs = require('fs')

const lessToJs = require('less-vars-to-js')

const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, 'src/theme-ant-overwrite.less'), 'utf8'))

const webpack = require('webpack')

//
export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get('http://magnusapi.herokuapp.com/post?state=published&type=blog')
    const { data: doctorInterview } = await axios.get('http://magnusapi.herokuapp.com/post?state=published&type=doctor_interview')
    const { data: treatmentDescription } = await axios.get('http://magnusapi.herokuapp.com/post?state=published&type=treatment_description')
    const { data: newsNEvents } = await axios.get('http://magnusapi.herokuapp.com/post?state=published&type=news_and_events')
    const { data: patientSnippets } = await axios.get('http://magnusapi.herokuapp.com/post?state=published&type=patient_snippets')
    const { data: patientStories } = await axios.get('http://magnusapi.herokuapp.com/post?state=published&type=patient_stories')
    const { data: featuredOnHomepage } = await axios.get('http://magnusapi.herokuapp.com/post?state=published&featuredOnHomepage=true')
    const { data: liverCancerFeed } = await axios.get('http://magnusapi.herokuapp.com/post?state=published&categories=5a68b2f0340a0b000448fdc7')
    const { data: hospitals } = await axios.get('http://magnusapi.herokuapp.com/hospital')
    const { data: doctors } = await axios.get('http://magnusapi.herokuapp.com/doctor')

    const homepageData = {
      snippets: patientSnippets,
      featured: featuredOnHomepage,
    }

    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({
          homepageData,
        }),
      },
      {
        path: '/home',
        component: 'src/containers/Home',
        getData: () => ({
          homepageData,
        }),
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/contact',
        component: 'src/containers/Contact',
      },
      {
        path: '/hospitals',
        component: 'src/containers/Hospitals',
        getData: () => ({
          hospitals,
        }),
        children: hospitals.map(hospital => ({
          path: `/${hospital.key}`,
          component: 'src/containers/HospitalDetails',
          getData: () => ({
            hospital,
          }),
        })),
      },
      {
        path: '/doctors',
        component: 'src/containers/Doctors',
        getData: () => ({
          doctors,
        }),
        children: doctors.map(doctor => ({
          path: `/${doctor.key}`,
          component: 'src/containers/DoctorDetails',
          getData: () => ({
            doctor,
          }),
        })),
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getData: () => ({
          posts, doctorInterview, pageTitle: 'Medical Blogs',
        }),
        children: posts.map(post => ({
          path: `/post/${post.slug}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        path: '/treatments',
        component: 'src/containers/Blog',
        getData: () => ({
          posts: treatmentDescription,
          pageTitle: 'Treatments',
        }),
        children: treatmentDescription.map(post => ({
          path: `/treatment/${post.slug}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        path: '/feed/liver-cancer',
        component: 'src/containers/Blog',
        getData: () => ({
          posts: liverCancerFeed,
          pageTitle: 'Know all about Liver Cancer',
        }),
        children: liverCancerFeed.map(post => ({
          path: `/post/${post.slug}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      // {
      //   path: '/whyus',
      //   component: 'src/containers/Post',
      //   getData: () => ({
      //     post:
      //   }),
      // },
      {
        path: '/patientstories',
        component: 'src/containers/Blog',
        getData: () => ({
          posts: patientStories,
          pageTitle: 'Patient Stories',
        }),
        children: patientStories.map(post => ({
          path: `/post/${post.slug}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        path: '/newsevents',
        component: 'src/containers/Blog',
        getData: () => ({
          posts: newsNEvents,
          pageTitle: 'News & Events',
        }),
        children: newsNEvents.map(post => ({
          path: `/post/${post.slug}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render () {
      const {
        Html, Head, Body, children, renderMeta,
      } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
            <script
              dangerouslySetInnerHTML={{ __html: `
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        
                ga('create', 'UA-114309319-1', 'auto');
                ga('send', 'pageview');
              ` }}
            />
            <script />

            <script
              dangerouslySetInnerHTML={{ __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window,document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '377975152632074'); 
                fbq('track', 'PageView');
              ` }}
            />
            <script />

            <noscript
              dangerouslySetInnerHTML={{ __html: `
          <img height="1" width="1"
          src="https://www.facebook.com/tr?id=377975152632074&ev=PageView&noscript=1" />
            ` }}
            />
            <noscript />
            <script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0073/9822.js" async="async" />
            {renderMeta.styleTags}
          </Head>
          <Body>
            <script
              dangerouslySetInnerHTML={{ __html: `
        window.fbAsyncInit = function() {
          FB.init({
            appId      : '563161330727480',
            xfbml      : true,
            version    : 'v2.12'
          });
        
          FB.AppEvents.logPageView();
        
        };
      
        (function(d, s, id){
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {return;}
          js = d.createElement(s); js.id = id;
          js.src = "https://connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
            ` }}
            />

            <div id="fb-root" />
            <script
              dangerouslySetInnerHTML={{ __html: `
              (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12&autoLogAppEvents=1';
                fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'facebook-jssdk'));
                ` }}
            />
            <div className="fb-customerchat"
              page_id="1568850076767195"
              theme_color="#0084ff" />
            {children}
          </Body>
        </Html>
      )
    }
  },
  webpack: (config, { stage, defaultLoaders }) => {
    /*
    * TypeScript Support
    * */

    // Add .ts and .tsx extension to resolver
    config.resolve.extensions.push('.ts', '.tsx')

    // Add TypeScript Path Mappings (from tsconfig via webpack.config.js)
    // to react-statics alias resolution
    config.resolve.alias = typescriptWebpackPaths.resolve.alias

    // Needed for momoent js resolution in React 16
    // See: https://github.com/moment/moment/issues/2979#issuecomment-332217206
    config.resolve.alias.moment$ = 'moment/moment.js'

    // We replace the existing JS rule with one, that allows us to use
    // both TypeScript and JavaScript interchangeably
    const jsTsLoader = {
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: defaultLoaders.jsLoader.exclude, // as std jsLoader exclude
      use: [
        {
          loader: 'babel-loader',
        },
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      ],
    }


    /*
    * Less Support
    * */

    // Add .less & .css to resolver
    config.resolve.extensions.push('.less')
    config.resolve.extensions.push('.css')

    // Loader depending on stage. Same format as the default cssLoader.
    let lessLoader = {}

    if (stage === 'dev') {
      // Enable Hot Module Replacement
      config.plugins.push(new webpack.HotModuleReplacementPlugin())

      // In-Line with style-loader
      lessLoader =
        {
          test: /\.less$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                minimize: false,
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                // Necessary for external CSS imports to work
                // https://github.com/facebookincubator/create-react-app/issues/2677
                sourceMap: true,
                ident: 'postcss',
                plugins: () => [
                  postcssFlexbugsFixes,
                  autoprefixer({
                    browsers: [
                      '>1%',
                      'last 4 versions',
                      'Firefox ESR',
                      'not ie < 9', // React doesn't support IE8 anyway
                    ],
                    flexbox: 'no-2009',
                  }),
                ],
              },
            },
            {
              loader: 'less-loader',
              options: {
                sourceMap: true,
                modifyVars: themeVariables,
                javascriptEnabled: true,
              },
            },
          ],
        }
    } else {
      // Extract to style.css
      lessLoader =
        {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract({
            fallback: {
              loader: 'style-loader',
              options: {
                hmr: false,
                sourceMap: false,
              },
            },
            use: [
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  minimize: true,
                  sourceMap: false,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  // Necessary for external CSS imports to work
                  // https://github.com/facebookincubator/create-react-app/issues/2677
                  ident: 'postcss',
                  plugins: () => [
                    postcssFlexbugsFixes,
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9', // React doesn't support IE8 anyway
                      ],
                      flexbox: 'no-2009',
                    }),
                  ],
                },
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false,
                  modifyVars: themeVariables,
                  javascriptEnabled: true,
                },
              },
            ],
          }),
        }
    }

    /*
    * Add new Loaders to default Loaders
    * */

    config.module.rules = [
      {
        oneOf: [
          jsTsLoader,
          lessLoader,
          defaultLoaders.cssLoader,
          defaultLoaders.fileLoader,
        ],
      },
    ]

    // Update ExtractTextPlugin with current instance
    config.plugins[2] =
      new ExtractTextPlugin({
        filename: getPath => {
          process.env.extractedCSSpath = 'styles.css'
          return getPath('styles.css')
        },
        allChunks: true,
      })

    return config
  },
}
