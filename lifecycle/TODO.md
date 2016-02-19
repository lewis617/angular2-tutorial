## Pros
* Simple config for a complete build once you know what you are doing

## Cons
* Huge (3.27 MB) bundle with default config => what gets bundled???
    * Source maps the main "culprit" - dropping them gets the bundle down to 1.31 MB
    * Removing eval - down to 1.23 MB
    * Uglify - 459 kB
* Bundle re-building takes time (4424ms) => check what happens in the watch mode
    * Watch mode with dev-server: 1130 ms
* Need to "manually" include all the external but mandatory dependencies (zone, rxjs, reflect shim)