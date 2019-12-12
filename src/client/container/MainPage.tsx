import React from "react";

import {sagaMiddleWare} from "../app";
import rootSaga from "../modules/saga";

export default class extends React.Component {
    constructor(props: any) {
        super(props);
        sagaMiddleWare.run(rootSaga);
    }

    public render() {
        return <div>hello</div>;
    }
}
