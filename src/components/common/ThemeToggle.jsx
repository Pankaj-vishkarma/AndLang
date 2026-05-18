import useTheme from "../../hooks/useTheme";
import moonIcon from "../../assets/icons/moon-icon.png";
import sunIcon from "../../assets/icons/moon-icon.png";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="w-[110px] h-[44px] flex items-center gap-[7px] 
             rounded-[28px] border border-gray-300 
             bg-white text-black 
             pt-[4px] pr-[10px] pb-[4px] pl-[4px]"
        >
            {theme === "light" ? (
                <>
                    <img
                        src={moonIcon}
                        alt="dark mode"
                        className="w-[36px] h-[36px] object-contain"
                    />
                    <span className="text-sm font-medium">Dark</span>
                </>
            ) : (
                <>
                    <img
                        src={sunIcon}
                        alt="light mode"
                        className="w-[36px] h-[36px] object-contain"
                    />
                    <span className="text-sm font-medium">Light</span>
                </>
            )}
        </button>
    );
};

export default ThemeToggle;