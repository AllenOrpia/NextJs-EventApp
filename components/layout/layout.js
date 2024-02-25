
import { Fragment } from "react";
import Header from "./Header";

const layout = (props) => {
    return (
        <Fragment>
            <Header />
            <main>
                {props.children}
            </main>
        </Fragment>
    )
}

export default layout