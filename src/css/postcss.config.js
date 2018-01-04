module.exports = {
    plugins: [
        require("postcss-nested"),
        require("postcss-cssnext")({
          browsers:['> 5%','ie 8' ]
        }),
      ]
    
}