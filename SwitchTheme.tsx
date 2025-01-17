import { useTheme } from "./themeProvider";

export const ThemeSwitch = () => {
    const {theme, setTheme} = useTheme(); 

    return (
        <div className="min-h-screen bg-base-200">
            <button onClick={ () => setTheme(theme === "light" ? "dark" : "light")} className="btn btn-accent">Switch</button>
        </div>
    )

}