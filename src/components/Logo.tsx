import { classnames } from 'classnames/tailwind'

const logo = classnames('pb-4')
const Logo = () => {
  return (
    <div className={logo}>
      <img src="/images/logo-small.svg" alt="Todorant logo" />
    </div>
  )
}

export default Logo
