function importAll(r) {
  return r.keys().reduce((acc, name) => {
    let val = r(name).default;
    if (typeof r(name).default === 'string' && /\.(png|jpe?g)$/.test(name)) {
      val = r(name).default.replace(/^assets\/images\//, '');
    }
    acc[name.replace(/^\.\/|\.svg$|\.png$/gi, '')] = val;
    return acc;
  }, {});
}

export default importAll(
  require.context('./icons', true, /\.(?:svg|png|jpe?g)$/i)
);
