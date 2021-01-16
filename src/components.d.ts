/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Types } from "./utils";
import { User } from "./components/tyankatsu-user/tyankatsu-user";
import { User as User1 } from "./components/tyankatsu-user-list/tyankatsu-user-list";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
        /**
          * List data of user
         */
        "users": {name: string}[] | string;
    }
    interface TyankatsuUser {
        /**
          * Data of user
         */
        "user": Types.WithString<User>;
    }
    interface TyankatsuUserList {
        /**
          * List data of user
         */
        "users": Types.WithString<User[]>;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLTyankatsuUserElement extends Components.TyankatsuUser, HTMLStencilElement {
    }
    var HTMLTyankatsuUserElement: {
        prototype: HTMLTyankatsuUserElement;
        new (): HTMLTyankatsuUserElement;
    };
    interface HTMLTyankatsuUserListElement extends Components.TyankatsuUserList, HTMLStencilElement {
    }
    var HTMLTyankatsuUserListElement: {
        prototype: HTMLTyankatsuUserListElement;
        new (): HTMLTyankatsuUserListElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "tyankatsu-user": HTMLTyankatsuUserElement;
        "tyankatsu-user-list": HTMLTyankatsuUserListElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
        /**
          * List data of user
         */
        "users"?: {name: string}[] | string;
    }
    interface TyankatsuUser {
        /**
          * Data of user
         */
        "user"?: Types.WithString<User>;
    }
    interface TyankatsuUserList {
        /**
          * List data of user
         */
        "users"?: Types.WithString<User[]>;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "tyankatsu-user": TyankatsuUser;
        "tyankatsu-user-list": TyankatsuUserList;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "tyankatsu-user": LocalJSX.TyankatsuUser & JSXBase.HTMLAttributes<HTMLTyankatsuUserElement>;
            "tyankatsu-user-list": LocalJSX.TyankatsuUserList & JSXBase.HTMLAttributes<HTMLTyankatsuUserListElement>;
        }
    }
}
