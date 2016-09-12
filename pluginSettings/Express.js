/* 
 * Express -- Settings
 *
 * The Env parameter in the exported function below refers to process.env
 * Feel free to use it as such.
 */

exports.Express = function(Env){
  return {
    ExpressCore: {
      caseSensitiveRoutes: true,
      mergeReqParams: false,
      strictRouting: false
    },
    StaticFiles: {
      workDir: './public'
    },
    PreRouter: {
      middlewareOrder: [
        'compress',
        'serveStatic',
        'responseTime',
        'logger'
      ]
    },
    Router: {
      workDir: './routes'
    },
    PostRouter: {
      order: [
        '404',
        '500'
      ]
    },
    ExpressServer: {
      port: 8080,
      address: 'localhost'
    }
  }
}