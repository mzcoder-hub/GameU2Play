import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'GameU2Play - Best Ways Gaining Gaming Experience',
  keywords:
    'Gaming Platform, Gaming News, Gaming Updates, Gaming Forum, Gaming Competition',
  description: 'The Best Gaming Platform for Better Experience',
}

export default Meta
