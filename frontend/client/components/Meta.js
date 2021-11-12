import Head from 'next/head'

const Meta = ({ title, keywords, description, url_location_href, url_location_image }) => {
  return (
    <Head>
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap'
        rel='stylesheet'
      />
      <meta name="robots" content="INDEX,FOLLOW" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="format-detection" content="telephone=no" />
      <meta charset="UTF-8" />
      <meta name="google-site-verification" content="g_TTCL8H4g4JSqyGu0Hi9EFG3v0OkcyYGtdeqa8sJrA" />
      <meta property="og:url" content={url_location_href} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={url_location_image} />
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
  url_location_href: '',
  url_location_image: '',
}
export default Meta
