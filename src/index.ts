const a = 5;

/**
 * Solution for:
 * Error: Dynamic imports are only supported when the '--module' flag is set to 'es2020', 'es2022', 'esnext', 'commonjs', 'amd', 'system', 'umd', 'node12', or 'nodenext' .ts(1323)
 */

if (Number('5') === a) {
  import('./another-file').then((myGlobals) => {
    console.log(myGlobals)
    console.log(myGlobals.num);
    console.log(myGlobals.default)
  });
}