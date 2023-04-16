import { useState, useEffect } from "react"
import getAccounts from "../utils/getAccounts"
import newContract from "../utils/newContract"

export default function NewContract({ setEscrows, escrows }) {
    const [account, setAccount] = useState();
    const [signer, setSigner] = useState();

    useEffect(() => {
        getAccounts(setAccount, setSigner);
    }, [account]);

    return (
        <div className="contract">
            <h1> New Contract </h1>
            <label>
                Arbiter Address
                <input type="text" id="arbiter" />
            </label>

            <label>
                Beneficiary Address
                <input type="text" id="beneficiary" />
            </label>

            <label>
                Deposit Amount (in Wei)
                <input type="text" id="wei" />
            </label>

            <div
                className="button"
                id="deploy"
                onClick={(e) => {
                e.preventDefault();

                newContract(signer, setEscrows, escrows);
                }}
            >
                Deploy
            </div>
        </div>
    )
}