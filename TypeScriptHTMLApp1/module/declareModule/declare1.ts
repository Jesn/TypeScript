//环境内部模块
declare module D3 {
    //声明一个 Selectors 选择器接口
    export interface Selectors {
        select: {
            (selector: string): Selection;
            (element: EventTarget): Selection;
        }
    }

    //声明一个 Event 事件
    export interface Event {
        x: Number;
        y: number;
    }

    //声明一个 Base 接口继承 Selectors 接口
    export interface Base extends Selectors {
       
    }
}

declare var d3: D3.Base;