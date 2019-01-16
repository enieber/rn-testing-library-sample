export const imports = {
  'src/product/Product.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-product-product" */ 'src/product/Product.mdx'),
}
