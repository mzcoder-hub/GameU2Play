import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>GamingU2Play</span> News
      </h1>
      <p className={headerStyles.description}>
        Keep Up To Date With The Latest Gaming News
      </p>
    </div>
  )
}
export default Header
