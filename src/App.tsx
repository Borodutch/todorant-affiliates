import Root from 'components/Root'
import { BodyText, Link } from 'components/Text'
import Logo from 'components/Logo'
import Button from 'components/Button'

const TodorantLink = () => <Link link="https://todorant.com">Todorant</Link>

const App = () => {
  return (
    <Root>
      <Logo />
      <BodyText>
        Hi, it's Nikita. Welcome to <TodorantLink /> Affiliate Program!
      </BodyText>
      <BodyText>
        <TodorantLink /> is a smart todo list app that uses cognitive psychology
        tricks to make the human brain complete tasks. It's been available for
        almost two years, has over 30 000 registered users that created over 295
        000 todos. See live most up-to-date stats{' '}
        <Link link="https://borodutch.com">here</Link>.
      </BodyText>
      <BodyText>
        I'm happy to announce the upcoming affiliate program for{' '}
        <TodorantLink /> that can help you make money. Todorant pricing model is
        simple: users get the first month for free, then it's either $5/month,
        $36/year or $150 once for a perpetual license.
      </BodyText>
      <BodyText>
        I plan to start testing the Affiliate Program in Q3 2021, giving
        affiliates 50% of earnings from their channels after App Store, Play
        Store or Stripe fees are applied.
      </BodyText>
      <BodyText>
        If you are interested in giving the affiliate program a try, please,
        leave your contact information in the Google Form by pressing the button
        below. Most of the fields of the form are optional. Still, I will be
        picking the most promising affiliates based on the responses. Hence, I
        highly encourage you to give me as much information as you can.
      </BodyText>
      <BodyText>
        If you have any questions, contact me{' '}
        <Link link="https://t.me/borodutch">on Telegram</Link> or{' '}
        <Link link="mailto:affiliates@borodutch.com">by email</Link>.
      </BodyText>
      <BodyText>Cheers!</BodyText>
      <Button
        onClick={() => {
          window.open('https://forms.gle/yMKE2r1DcCiMgDer7', '_blank')
        }}
        title="Join the affiliates waitlist"
      />
    </Root>
  )
}

export default App
