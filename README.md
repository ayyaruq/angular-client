# angular-client

[![CircleCI](https://circleci.com/gh/xivapi/angular-client/tree/master.svg?style=shield)](https://circleci.com/gh/xivapi/angular-client/tree/master)

## Api documentation

Visit https://xivapi.com/docs for documentation about the web api mapped by this client.

## Quick start

Add `XivapiClientModule` to your `AppModule` imports:

```ts
@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        ...
        XivapiClientModule.forRoot('my-api-key'),        
        ...
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
```

In the other modules, don't call `forRoot` again, just import the module itself.

Then you can simply inject the service wherever you want to use it:

```ts
@Component({
    ...
})
export class FooComponent {
    
    public items$: Observable<XivapiList<any>>;
    
    constructor(private xivapi: XivapiService){
        this.items$ = this.xivapi.getList(XivapiEndpoint.Items);
    }
}
```

## Documentation

Further documentation available on documentation website: https://xivapi.github.io/angular-client/
