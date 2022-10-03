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

# Global store #

- in src->context locates global store factory witch contain all factories from another modules and common api like localization

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

# module package #

Contain 4 packages (less or more if need)

## factory ##

- factory where we create stores (IRepository), useCases, controllers, state, presenter and libs implementation for useCases
- stores names starts on **package name** ends on **Store**. For package **registration** store:
```ts
    ...
    private registrationLoadingStore: IRepository<boolean> = new MobXRepository<boolean>();
    private registrationDisabledStore: IRepository<boolean> = new MobXRepository<boolean>();
    private registrationEmailStore: IRepository<string> = new MobXRepository<string>();
    private registrationPasswordStore: IRepository<string> = new MobXRepository<string>();
    ...
```
- after creating stores we create state. Its a class which keep screen state, its has only get and set methods for stores. Example creating store-class in factory for **registration** package:
```ts
private registrationState: IRegistrationState = new RegistrationState(
        ...
        this.registrationLoadingStore,
        this.registrationDisabledStore,
        this.registrationEmailStore,
        ...
    );
```
- after we create libs for useCases and pass them to useCase, also we pass stores where we want to save result. Example:
```ts
    private storage: IStorage = new KeychainStorage();
    private requester: IRequester = new AxiosRequester();
    private registerUserUseCase: IRegisterUserUseCase = new RegisterUserUseCase(
        this.storage,
        this.requester,
        this.userStore
    );
```
- next step is creating controller that change store class. This class call methods from ui (use cases and update state). Example:
```ts
    readonly registrationController: IRegistrationController = new RegistrationController(
        this.registrationState,
        this.registerUserUseCase
    );
```
- last step is add controller and state in presenter. And we can call it in our ui. Example:
```ts
    readonly registrationPresenter!: IRegistrationPresenter;

    constructor(
        private userStore: IRepository<IUser>,
    ) {
        this.registrationPresenter = {
            registrationController: this.registrationController,
            registrationState: this.registrationState,
        }
    }
```

## presenter ##

- its a controller witch connect state for ui, ui-logic and business-logic
- Contain 3 files (less or more if need). Example for registration: **IRegistrationPresenter**, **RegistrationController**, **RegistrationState**
- **RegistrationState** class contains setters and getters for repositories which we create in **RegistrationFactory** and pass to RegistrationState:
``` ts
export interface IRegistrationState {
    ...
    readonly email: string;
    ...
    setEmail: (data: string) => void;
    ...
}

export class RegistrationState implements IRegistrationState {
    constructor(
        ...
        private registrationEmailStore: IRepository<string>,
        ....
    ) { }

    get email() {
        return this.registrationEmailStore.data ?? '';
    }
    ...
    setEmail = (data: string) => {
        this.registrationEmailStore.save(data);
    }
    ...
}
```
- **RegistrationController** class contains ui-logic and change RegistrationState, contain useCases and call them:
```ts
export interface IRegistrationController {
    onChangeEmail: (data: string) => void;
    ...
    onRegister: (navigation: IStackNavigation) => Promise<void>;
}

export class RegistrationController implements IRegistrationController {
    constructor(
        private registrationState: IRegistrationState,
        private registerUserUseCase: IRegisterUserUseCase
    ) { }

    onChangeEmail = (data: string) => {
        this.registrationState.setEmail(data);
        this.validateInputs();
    }
    ...
    onRegister = async (navigation: IStackNavigation) => {
        await this.registerUserUseCase.register(
            this.registrationState.email,
            ...
        );
    }
    ...
}
```
- **IRegistrationPresenter** contain registrationState and registrationController contracts. From registrationState we pass only **getters**
```ts
export interface IRegistrationPresenter {
    registrationState: {
        ...
        readonly email: string;
    },
    registrationController: {
        onChangeEmail: (data: string) => void;
        ...
        onRegister: (navigation: IStackNavigation) => Promise<void>;
    }
}
```

## ui ##

Include main 3 files: 
 - style.ts - with component styles;
 - component.tsx - with all ui, component name ends with View (SplashView) 
 - index.tsx - import  component and pass there all props from mobx or redux or other storage, name ends with Screen (SplashView) 
 - can include packages with some components

## useCases ##

- useCases is business logic in app. It can be local logic for one module and global (called in 2 or more modules)
- if useCase is local it locates in module package **useCases**, if its global it locates in **modules->common->useCases**

# Class # 

# Error logs #

- in log you have to write class, method, params and message or error
- better way to write Logger for app

# Create module #

Run in terminal from root folder **node createModule moduleName useCase-useCase**