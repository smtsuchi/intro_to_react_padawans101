import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from './context/AppContext'

export function withParams ( Component ) {
    return props => <Component {...props} params={useParams()} />
}


export function withNavigate ( Component ) {
    return props => <Component {...props} navigate={useNavigate()} />
}

export function withContext ( Component ) {
    return props => <Component {...props} appContext={useContext(AppContext)} />
}