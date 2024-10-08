import style from './style.module.css'
import iconLogo from '../../assets/room_logo.jpeg'

const Logo = () => {
  return (
    <div className={style['logo-container']}>
      <img src={iconLogo} alt="Logo da aplicação" />
      <h1>Room Company</h1>
    </div>
  )
}

export default Logo
