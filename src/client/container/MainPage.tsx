import React, {Component} from "react";

import {sagaMiddleWare} from "../app";
import rootSaga from "../modules/saga";
import { connect } from "react-redux";
import axios from "axios";

interface IState {
    posts: IPost[];
}
interface IPost {
 userId: string;
 id: string;
 title: string;
 body: string;
}

class MainPage extends Component<any, IState> {
    public state = {
        posts: [],
    };
    public async componentDidMount() {
        const data = await (await axios.get("/posts")).data;
        this.setState({posts: data });

    }
    public render() {
        const { posts } = this.state;
        return posts.map(post => <div>{post.title}</div>);
    }
}

export default MainPage;
