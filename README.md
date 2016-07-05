## Testing

- Run local firebase-server:
```
$ node firebase-server-runner.js
```
- Add one line into /etc/hosts:
```
127.0.0.1    localhost.firebaseio.test
```

## Troubleshooting

- Error during building on prod (https://github.com/angular/material2/issues/541
):
```
$ ng build -prod

Build failed.
The Broccoli Plugin: [BundlePlugin] failed with:
Error on fetch for vendor/@angular2-material/checkbox/checkbox.js at file:///Users/dannyblue/Documents/projects/test-app/tmp/bundle_plugin-input_base_path-L2OPG5Mp.tmp/0/vendor/@angular2-material/checkbox/checkbox.js
    Loading app/test-app.component.js
        Loading app/index.js
            Loading main.js
                Error: ENOENT: no such file or directory, open '/Users/dannyblue/Documents/projects/test-app/tmp/bundle_plugin-input_base_path-L2OPG5Mp.tmp/0/vendor/@angular2-material/checkbox/usr/local/google/home/jelbourn/material2/tmp/broccoli_type_script_compiler-input_base_path-IydvmmBU.tmp/0/components/checkbox/checkbox.js.map'
                    at Error (native)

                    The broccoli plugin was instantiated at: 
                 
...
```

```
$ cd ./node_modules/@angular2-material
$ find . -type f -exec sed -i 's/\/\/# \S*jelbourn\/material2\S*/ /g' {} +
```
