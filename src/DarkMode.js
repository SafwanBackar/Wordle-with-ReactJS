import { useEffect, useState } from 'react';

function DarkMode() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    useEffect(()=>{
        localStorage.setItem('theme', theme)
        document.body.className = theme;
      },[theme])

    const toggleTheme = () => {
        theme === 'light'?setTheme('dark'):setTheme('light')
    };
    return (
        <>
            <label className="toggle">
                <input type="checkbox" onClick={toggleTheme}/>
                <span className="slider"></span>
            </label>
        </>
    )
}

export default DarkMode