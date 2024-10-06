import { useState } from 'react';

const Login = () => {


    const [count, setCount] = useState(0);

    const handleInctrementCount = () => {
        setCount((prevState) => {
            return prevState + 1;
        });

        console.log(count);
    }

    return (
        <div>
            <button onClick={handleInctrementCount}>{count}</button>
        </div>
    )
}

export default Login;