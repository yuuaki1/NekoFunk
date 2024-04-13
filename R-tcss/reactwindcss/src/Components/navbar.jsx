import { useState, useEffect } from "react"

export default function Navbar () {
    const [theme, setTheme] = useState("light")

    useEffect(() => {
        if (theme === "dark"){
            document.documentElement.classList.remove("light")
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
            document.documentElement.classList.add("light")
        }
    }, [theme])

    const themeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }
    return (
        <header className="m-1 h-auto w-auto bg-gradient-to-b from-black/80 to-black/40 text-[#ddd] backdrop-blur-lg border-[1px] border-white border-opacity-10 shadow-[0_0_20px_10px_rgba(0,0,0,0.75)] flex p-3 justify-around rounded-3xl
        dark:text-[#333] dark:from-white/40 dark:to-white/10 cursor-pointer">
            <h4 className="px-6 font-bold">Nekofunk</h4>
            <nav className="">
                <a className = "px-6" href="./home.jsx">Home</a>
                <a className = "px-6" href="./home.jsx">Music</a>
                <a className = "px-6" href="./home.jsx">About</a>
                <a className = "px-6" href="./home.jsx">Contact Us</a>
            </nav>
            <button className="px-6" onClick={themeSwitch}><img className="h-7 w-7" src="src\assets\dark-mode-svgrepo-com.svg" /></button>
        </header>
    )
}