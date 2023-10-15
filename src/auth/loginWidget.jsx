import {Redirect} from "react-router-dom";
import {useOktaAuth} from "@okta/okta-react";

const LoginWidget = ({config}) => {
    const { oktaAuth, authState } =  useOktaAuth();
    const onSuccess = (tokens) => {
        oktaAuth.handleLoginRedirect(tokens);
    }
}