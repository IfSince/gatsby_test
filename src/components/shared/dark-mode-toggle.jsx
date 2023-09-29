import { ThemeToggler } from 'gatsby-plugin-dark-mode'

export const DarkModeToggle = () => {
  return (
    <ThemeToggler>
      { ({ theme, toggleTheme }) => (
        <label>
          <input
            type="checkbox"
            onChange={ e => toggleTheme(e.target.checked ? 'dark' : 'light') }
            checked={ theme === 'dark' }
          />{ ' ' }
          Dark mode
        </label>
      ) }
    </ThemeToggler>
  )
}