import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";
import "../styles.css";


const Users = () => {
    const context = useContext(SocketContext);
    return (
        <div className="Userlist" id='users'>
            <h1>Random Online Users</h1>
            <p>Talk to random people</p>
            <div className="user-list">
            {
                Object.keys(context.users).length===1 && 
                <div>
                    <p>Uh oh! no users online</p>
                    <p>Try opening the link in one more tab to talk to your self ;p</p>
                </div>
            }
            {
            Object.keys(context.users).length!==1 && Object.keys(context.users).map(key => {
            if (key === context.yourID) {
                return null;
            }
            return (
                <>
                    <button onClick={() => context.callUser(key)}>Call {key}</button>
                    <br />
                </>
            );
            })};
            </div>
        </div>
    );
};

export default Users;