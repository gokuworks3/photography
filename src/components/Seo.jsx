import { Helmet } from 'react-helmet-async';

const siteTitle = 'Alex Monroe Photography';
const defaultDescription =
  'A minimalist photography portfolio showcasing wedding, portrait, travel, and nature stories by Alex Monroe.';
const defaultImage =
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=80';

function Seo({ title, description = defaultDescription, image = defaultImage }) {
  const fullTitle = title ? title + ' | ' + siteTitle : siteTitle;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

export default Seo;
