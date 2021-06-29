import { FC } from 'react'
import { classnames } from 'classnames/tailwind'

const whiteText = classnames('text-white')
const grayText = classnames('text-gray-300')

const headerText = classnames(
  whiteText,
  'text-3xl',
  'md:text-6xl',
  'font-bold',
  'text-center',
  'mb-6'
)
export const HeaderText: FC = ({ children }) => {
  return <p className={headerText}>{children}</p>
}

const subheaderText = classnames(
  whiteText,
  'text-xl',
  'md:text-2xl',
  'font-bold',
  'text-center',
  'my-12'
)
export const SubheaderText: FC = ({ children }) => {
  return <p className={subheaderText}>{children}</p>
}

const bodyText = classnames(grayText, 'my-4')
export const BodyText: FC = ({ children }) => {
  return <p className={bodyText}>{children}</p>
}

const linkStyle = classnames(whiteText)
export const Link: FC<{ link: string }> = ({ children, link }) => {
  return (
    <a className={linkStyle} href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}
