import React from "react";
import Alert from "react-bootstrap/Alert";
import "./Footer.css";

function PageFooter(){
    return (
        <footer>
            <Alert className="alert-adapted">
                <section class="alert alert-primary" role="alert">
                    Built by Marcel Thiemann in Toronto &copy; 2020
                </section>
            </Alert>
        </footer>
    )
}

export default PageFooter;