module.exports = {
    devServer: {
        overlay: {
            warnings: false,
            errors: false
        },
        proxy: {
            "/api": {
                target: "http://v.juhe.cn/",
                changeOrigin: true,
                ws: true,
                secure: false,
                pathRewrite: {
                    "^/api": "" //注意^/api一定要有斜杠，否则接口访问会404
                }
            }

        }
    },
    lintOnSave: false
}