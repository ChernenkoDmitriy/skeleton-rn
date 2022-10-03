# Code style

## Variable

### Variable naming

- Constants naming with capital later **I_AM_CONSTANT**
- Boolean - starts with **is**
- Conditions (if) always using with **{ }**
- tsx files and styles.ts name starts with lowercase letter **styles.ts**, **component.tsx**, **index.tsx**
- ts files has the same name as class inside

```ts
const daysSinceCreation: number;
```

### Function naming

- all selectors starts from **select**

# 'libs' package #

- in libs located realization react native libs from node modules like NetInfo, AsyncStorage, AppState, Requester
- libs in this package doesn't know about other packages and each other
- if need global store for this libs, we hove to create common store or special store in global factory 
- interface describe entity. Example **IRequester** but realization describes how interface was implemented **AxiosRequester**
, we use axios for implement IRequester

```ts
export class StoreFactory implements IStore {
    ...

    readonly Requester: IRequester = new AxiosRequester();

    // NetInfo presenter and store
    private NetInfoStore: IRepository<INetInfoState> = new MobXRepository<INetInfoState>();
    readonly NetinfoController: INetinfoController = new NetinfoController();

    constructor() {
        ...
        this.NetinfoController.subscribe(this.NetInfoStore.save);
    }

}
```