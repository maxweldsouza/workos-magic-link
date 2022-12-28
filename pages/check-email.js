import React from 'react';
import {useRouter} from "next/router";

function CheckEmail(props) {
    const router = useRouter()
    const link = router.query.link
    return (
        <div>
            <h1>Email</h1>
            Session link:

            <a href={link}>{link}</a>
        </div>
    );
}

export default CheckEmail;